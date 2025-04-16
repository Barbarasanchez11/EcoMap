import { Link } from "react-router-dom"

import '../../styles/Navbar.css'

const Navbar = () => {
    return(
        <nav>
            <div>

            <ul>
              <li><Link to="/aboutus">About us</Link> </li>
              <li><Link to="contactus">Contact us</Link> </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar