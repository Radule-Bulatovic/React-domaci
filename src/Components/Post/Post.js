import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post(props) {

    const { id } = useParams();
    const getBlob = () => {
        fetch("https://jsonblob.com/api/jsonBlob/927240457810100224")
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <p>
                Post component for post {id}
            </p>
            <button onClick={() => { getBlob() }}>FETCH</button>
        </div>
    );
}

export default Post;