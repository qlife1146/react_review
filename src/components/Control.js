function Control(props) {
    return (
        <ul>
            <li>
                <a
                    href="/create"
                    onClick={function (e) {
                        e.preventDefault();
                        props.onChangeMode("create");
                    }}
                >
                    create
                </a>
            </li>
            <li>
                <a
                    href="/update"
                    onClick={function (e) {
                        e.preventDefault();
                        props.onChangeMode("update");
                    }}
                >
                    update
                </a>
            </li>
            <li>
                <input
                    type="button"
                    value="delete"
                    onClick={function (e) {
                        e.preventDefault();
                        props.onChangeMode("delete");
                    }}
                />
            </li>
        </ul>
    );
}

export default Control;
