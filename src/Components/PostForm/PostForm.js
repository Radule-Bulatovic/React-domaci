import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


function PostForm() {

    let navigate = useNavigate();
    const [newPost, setNewPost] = useState({
        id: null,
        title: null,
        image_url: null,
        author: null,
        content: null
    });
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonblob.com/api/jsonBlob/927240457810100224")
            .then(response => {
                return response.json();
            })
            .then(response => {
                setPosts([...response]);
                let temp = {
                    id: response[response.length - 1].id + 1,
                    title: null,
                    image_url: null,
                    author: null,
                    content: null
                }
                setNewPost(temp);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const handleChange = (e) => {
        let temp = { ...newPost };
        temp[e.target.id] = e.target.value;
        setNewPost(temp);
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
        const isEmpty = Object.values(newPost).some(x => x === null || x === '');
        if (isEmpty) return;

        let url = "https://jsonblob.com/api/jsonBlob/927240457810100224";
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify([...posts, newPost])
        })
            .then((response) => response.json())
            .then((data) => navigate("/"))
            .catch((error) => console.log(error))
    }

    return (
        <div className="container center">
            <h3>New Post</h3>
            <div className="row">
                <form className="col s12" onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="row">
                        <div className="input-field col s4">
                            <input onChange={(e) => { handleChange(e) }} id="author" type="text" className="validate" required />
                            <label htmlFor="author">Author</label>
                        </div>
                        <div className="input-field col s4">
                            <input onChange={(e) => { handleChange(e) }} id="title" type="text" className="validate" required />
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="input-field col s4">
                            <input onChange={(e) => { handleChange(e) }} id="image_url" type="url" className="validate" required />
                            <label htmlFor="image_url">Image url</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="content" onChange={(e) => { handleChange(e) }} className="validate" required />
                            <label htmlFor="content">Content</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PostForm;