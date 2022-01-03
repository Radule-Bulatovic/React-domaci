import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    let navigate = useNavigate();

    return (
        <div className="container">
            <h3 className="center-align">Posts</h3>
            <div className="row">

                
                <div className="col s4" onClick={() => {navigate(`/post/${'1'}`)}}>
                    <div className="card small">
                        <div className="card-image">
                            <img src="https://materializecss.com/images/sample-1.jpg" />
                            <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
            

            </div>
        </div>
    );
}

export default Home;