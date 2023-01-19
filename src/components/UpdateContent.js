import { useState } from "react";
function UpdateContent(props) {
    const [title, setTitle] = useState(props.data.title);
    const [desc, setDesc] = useState(props.data.desc);
    return (
        <article>
            <h2>Update</h2>
            <form
                action="/update_process"
                method="post"
                onSubmit={function (e) {
                    e.preventDefault();
                    props.onSubmit(props.data.id, title, desc);
                }}
            >
                <p>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        // value={title}
                        defaultValue={title}
                        onChange={function (e) {
                            setTitle(e.target.value);
                        }}
                    />
                </p>
                <p>
                    <textarea
                        name="desc"
                        placeholder="description"
                        defaultValue={desc}
                        onChange={function (e) {
                            setDesc(e.target.value);
                        }}
                    />
                </p>
                <p>
                    <input type="submit" />
                </p>
            </form>
        </article>
    );
}

export default UpdateContent;
