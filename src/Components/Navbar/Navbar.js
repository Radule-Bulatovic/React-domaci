import { Link } from "react-router-dom";
import styles from "./style.module.css";
function Navbar() {
  return (

    <nav>
      <div className="nav-wrapper light-blue darken-4">
        <Link to="/" ><img className={`brand-logo ${styles.logo}`} src="https://seeklogo.com/images/B/blogger_B-logo-47610B2F87-seeklogo.com.png" /></Link>
        <ul id="nav-mobile" className="">

          <li className="right"><Link className="btn light-blue lighten-2" to="/add-post"><i className="material-icons">add</i></Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;