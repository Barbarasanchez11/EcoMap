import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav>
            <ul>
              <li><Link to="/aboutus">About us</Link> </li>
              <li><Link to="contactus">Contact us</Link> </li>
            </ul>
        </nav>
    )
}

export default Navbar