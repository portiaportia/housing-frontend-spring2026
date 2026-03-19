import {Link} from "react-router-dom";
import "../css/Header.css";
import Navigation from "./Navigation";
import logo from "../images/logo.jpg";

const Header = () => {
    return (
        <header id="main-header">
            <Link to="/"><img id="logo" src={logo} /></Link>
            <h1>Finding A Home</h1>
            <Navigation />
        </header>
    );
};

export default Header;