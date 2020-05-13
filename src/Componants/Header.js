import React from 'react';
import './Header.css';

const Title = (props) => {
    return <h2>CGPA <span>{props.cgpa}</span></h2>
}

const NavLink = (props) => {
    return (
        <li onClick={props.func}>
             {props.name}
        </li>
    );
}

const Navigation = (props) => {
    return (
        <ul className="nav-area">
            <NavLink name="ABOUT" />
            <NavLink name="RESET" func={props.func} />
        </ul>
    );
}

const Header = (props) => {
    return (
        <div className="top-header">
            <Title cgpa={props.cgpa} />
            <Navigation func={props.func}/>
        </div>
    );
}

export default Header;