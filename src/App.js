import "./App.css";
import { useState } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

function App() {
    const [subject, setSubject] = useState({
        title: "WEB",
        sub: "World Wide Web!",
    });
    const [toc, setToc] = useState([
        { id: 0, title: "HTML", desc: "HTML is for information." },
        { id: 1, title: "CSS", desc: "CSS is for design." },
        { id: 2, title: "JS", desc: "JS is for function." },
    ]);
    const [mode, setMode] = useState("read");
    const [welcome, setWelcome] = useState({
        title: "Welcome",
        desc: "Hello, React!",
    });
    const [read, setRead] = useState({
        title: "Reading",
        desc: "You're reading now.",
    });
    const [selected, setSelected] = useState(0);
    var max_content_id = toc.length - 1;

    var _title,
        _desc,
        _article = null;
    if (mode === "welcome") {
        _title = welcome.title;
        _desc = welcome.desc;
        _article = (
            <ReadContent
                title={_title}
                desc={_desc}
            />
        );
    } else if (mode === "read") {
        var i = 0;
        while (i < toc.length) {
            var data = toc[i];
            if (data.id === selected) {
                _title = data.title;
                _desc = data.desc;
                break;
            }
            i = i + 1;
        }
        _article = (
            <ReadContent
                title={_title}
                desc={_desc}
            />
        );
    } else if (mode === "create") {
        _article = (
            <CreateContent
                onSubmit={function (_title, _desc) {
                    max_content_id = max_content_id + 1;
                    var array = { id: max_content_id, title: _title, desc: _desc };
                    setToc((toc) => {
                        return [...toc, array];
                    });
                    setMode("read");
                }}
            />
        );
    } else if (mode === "update") {
        _article = (
            <UpdateContent
                data={toc[selected]}
                onSubmit={function (_id, _title, _desc) {
                    const findIndex = toc.findIndex((e) => e.id === _id);
                    var copyArray = [...toc];
                    if (findIndex !== -1) {
                        copyArray[findIndex] = { ...copyArray[findIndex], title: _title, desc: _desc };
                    }
                    setToc(copyArray);
                    setMode("read");
                }}
            />
        );
    }

    return (
        <div className="App">
            <Subject
                title={subject.title}
                sub={subject.sub}
                onChangePage={function () {
                    setMode("read");
                }}
            />
            <TOC
                onChangePage={function (id) {
                    setMode("read");
                    setSelected(Number(id));
                }}
                data={toc}
            />
            <Control
                onChangeMode={function (_mode) {
                    if (_mode === "delete") {
                        if (window.confirm()) {
                            var i = 0;
                            while (i < toc.length) {
                                if (toc[i].id === selected) {
                                    var copyArray = toc.filter((e) => e.id !== selected);
                                    setToc(copyArray);
                                    max_content_id = max_content_id + 1;
                                    setMode("read");
                                }
                                i = i + 1;
                            }
                        }
                    } else {
                        setMode("read");
                    }
                    setMode(_mode);
                }}
            />
            {_article}
        </div>
    );
}

export default App;
