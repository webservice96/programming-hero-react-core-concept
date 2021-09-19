function HelloWorld(props) {
    return (
        <div className="hello-box">
            <h2>{props.message}, {props.called}</h2>
        </div>
    );
}

export default HelloWorld;