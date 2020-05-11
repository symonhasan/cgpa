import React from 'react';
import './Header.css';

const Title = (props) => {
    return <h2>CGPA <span>{props.cgpa}</span></h2>
}

const NavLink = (props) => {
    return (
        <li>
             {props.name}
        </li>
    );
}

const Navigation = () => {
    return (
        <ul className="nav-area">
            <NavLink name="ABOUT" />
        </ul>
    );
}

const Header = (props) => {
    return (
        <div className="top-header">
            <Title cgpa={props.cgpa} />
            <Navigation />
        </div>
    );
}

export default Header;