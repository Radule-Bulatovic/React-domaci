import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Post() {

    const [post, setPost] = useState({
        id: null,
        title: null,
        image_url: null,
        author: null,
        content: null
    });

    const { id } = useParams();

    useEffect(() => {
        fetch("https://jsonblob.com/api/jsonBlob/927240457810100224")
            .then(response => {
                return response.json();
            })
            .then(response => {
                setPost(response[id - 1]);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <div className='container'>
            <div className="card large">
                <div className="card-image">
                    <img src={post.image_url} />
                </div>
                <div className="card-content">
                    <h4>{post.title}</h4>
                    <hr/>
                    <p>{post.content}</p>
                    <br/>
                    <p>Author: {post.author}</p>
                </div>
            </div>
        </div>
    );
}

export default Post;