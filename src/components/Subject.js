function Subject(props) {
    return (
        <header>
            <h1>
                <a
                    href="/"
                    onClick={function (e) {
                        e.preventDefault();
                        props.onChangePage();
                    }}
                >
                    {props.title}
                </a>
            </h1>
            {props.sub}
        </header>
    );
}

export default Subject;
