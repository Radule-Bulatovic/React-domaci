import React, { useEffect, useState } from 'react';
import HomeCard from './HomeCard/HomeCard';

function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonblob.com/api/jsonBlob/927240457810100224")
            .then(response => {
                return response.json();
            })
            .then(response => setPosts([...response]))
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    let cards = posts.map((e, i) => <HomeCard post={e} index={i} key={e.id} />)

    return (
        <div className="container">
            <h3 className="center-align">Posts</h3>
            <div className="row">
                {cards}
            </div>
        </div>
    );
}

export default Home;