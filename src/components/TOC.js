function TOC(props) {
    var i = 0;
    const lists = [];
    const data = props.data;
    while (i < data.length) {
        lists.push(
            <li key={data[i].id}>
                <a
                    href={"/content/" + data[i].id}
                    data-id={data[i].id}
                    onClick={function (e) {
                        e.preventDefault();
                        props.onChangePage(e.target.dataset.id);
                    }}
                >
                    {data[i].title}
                </a>
            </li>
        );
        i = i + 1;
    }
    return (
        <nav>
            <ul>{lists}</ul>
        </nav>
    );
}

export default TOC;
