import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        
        <nav>
        <div className="nav-wrapper light-blue darken-4">
          <ul id="nav-mobile" className="">
            <li className="left"><Link to="/">Posts</Link></li>
            <li className="right"><Link className="btn light-blue lighten-2" to="/add-post"><i className="material-icons">add</i></Link></li>
          </ul>
        </div>
      </nav>
     );
}

export default Navbar;