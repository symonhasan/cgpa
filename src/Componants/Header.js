import React from 'react';
import './Header.css';

const Title = (props) => {
    return <h2>CGPA <span>{props.cgpa}</span></h2>
}

const NavLink = (props) => {
    return (
        <a onClick={props.func} href={props.link}>
             {props.name}
        </a>
    );
}

const Navigation = (props) => {
    return (
        <div className="nav-area">
            <NavLink name="GITHUB" link={props.link} />
            <NavLink name="RESET" func={props.func}  />
        </div>
    );
}

const Header = (props) => {
    return (
        <div className="top-header">
            <Title cgpa={props.cgpa} />
            <Navigation func={props.func} link={props.link}/>
        </div>
    );
}

export default Header;
