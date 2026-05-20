import {Link} from "react-router-dom";
import {useState} from "react";
import "../css/Navigation.css";
import { SignedIn } from "@clerk/clerk-react";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    };

    return (
        <nav id="main-nav">
            <a id="toggle-nav" onClick={toggleMenu} href="#">
                {menuOpen?(<p>&#8963;</p>):(<p>&#8964;</p>)}
                </a>
            <ul className={menuOpen?"columns":"hide-small"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/listings">Listings</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                
                <SignedIn>
                <li>
                    <Link to="/schedule">Schedule</Link>
                </li>
                </SignedIn>
            </ul>
        </nav>
    );
};

export default Navigation;