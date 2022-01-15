import React from 'react';
import { logo } from '../../img';
import navBarItens from '../../utils/itens';
import ButtonBlue from '../buttonBlue';
import './styles.scss';

const Navbar = () => {
    const arrayOfIcons: string[] = ['home', 'happy', '', 'user'];
    return (
        <nav className="NavBarMain">
            <a href="/">
                <img className="logo" src={logo} alt="Logo da PetAdopt" />
            </a>
            <ul className="nav-menu">
                {navBarItens.map((item, index) => {
                    return (
                        <li key={index}>
                            <i className={`icon-${arrayOfIcons[index]}`}></i>
                            <a className={item.className} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
                <li>
                    <a href="/login">
                        <ButtonBlue>Login</ButtonBlue>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
