import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomeCard({ post: { id, image_url, title, author }, index }) {

    let navigate = useNavigate();

    return (
        <div className="col s4" onClick={() => { navigate(`/post/${index + 1}`) }}>
            <div className="card small">
                <div className="card-image">
                    <img src={image_url} />
                    
                </div>
                <div className="card-content">
                    <h5>{title}</h5>
                    <p>{author}</p>
                </div>
            </div>
        </div>
    )
}

export default HomeCard;