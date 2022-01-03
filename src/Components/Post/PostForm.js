import { Component } from "react";
import React from 'react';


class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            newPost: {
                id: null,
                author: null,
                title: null,
                image_url: null,
                content: null,
            }
        }
    }

    componentDidMount() {
        fetch("https://jsonblob.com/api/jsonBlob/927240457810100224")
            .then(response => {
                return response.json();
            })
            .then(response => {
                let id = response[response.length - 1].id + 1;
                this.setState({ 
                    newPost: { id: id },
                    posts: [...response]
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChange(e){
        let newPost = {...this.state.newPost};
        newPost[e.target.id] = e.target.value;
        this.setState({newPost});
    }

    handleSubmit(e) {
        e.preventDefault();
        let url = "https://jsonblob.com/api/jsonBlob/927240457810100224";
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify([...this.state.posts, this.state.newPost])
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <div className="container center">
                <h3>New Post</h3>
                <div className="row">
                    <form className="col s12" onSubmit={(e) => { this.handleSubmit(e) }}>
                        <div className="row">
                            <div className="input-field col s4">
                                <input onChange={(e) => { this.handleChange(e)}} id="author" type="text" className="validate" />
                                <label htmlFor="author">Author</label>
                            </div>
                            <div className="input-field col s4">
                                <input onChange={(e) => { this.handleChange(e)}} id="title" type="text" className="validate" />
                                <label htmlFor="title">Title</label>
                            </div>
                            <div className="input-field col s4">
                                <input onChange={(e) => { this.handleChange(e)}} id="image_url" type="url" className="validate" />
                                <label htmlFor="image_url">Image url</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="content" onChange={(e) => { this.handleChange(e)}} className="validate" />
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
}

export default PostForm;