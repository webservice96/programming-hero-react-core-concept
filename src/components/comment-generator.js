import { useEffect, useState } from "react";

function CommentGenerator() {
    const [comments, setComments] = useState([]);
    /* fetch data form api */
    useEffect(async () => {
        const URL = 'https://jsonplaceholder.typicode.com/comments';
        const response = await fetch(URL);
        const data = await response.json();
        setComments(data);
    }, []);

    return (
        <div className="container my-3">
            <h2 className="pb-2">Comments Generator</h2>
            <div className="row">
                {
                    comments.map(comment => <CommentBox name={comment.name} body={comment.body} email={comment.email}></CommentBox>)
                }
            </div>
        </div>
    );
}

function CommentBox(props) {
    return (
        <div className="col-lg-4 mb-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.body}</p>
                    <a href={"mailto:" + props.email} className="btn btn-primary">Email to commentor</a>
                </div>
            </div>
        </div>
    );
}

export default CommentGenerator;