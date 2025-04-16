import Navbar from "./Navbar"
import Logo from "./Logo"

import '../../styles/Header.css'

const Header = () =>{
    return(
        <header className="header">
        <Logo />    
        <Navbar />
        </header>
    )
}

export default Header