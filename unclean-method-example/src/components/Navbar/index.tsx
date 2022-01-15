import React from 'react';
import logo from '../../img/logo.png';
import navBarItens from '../../utils/itens';
import ButtonBlue from '../buttonBlue';
import Icon from '../Icon';
import './styles.scss';

const Navbar = () => {
    const arrayOfIcons: string[] = ['home', 'happy', 'happy', 'user'];
    return (
        <nav className="NavBarMain">
            <a href="/">
                <img className="logo" src={logo} alt="Logo da PetAdopt" />
            </a>
            <ul className="nav-menu">
                {navBarItens.map((item, index) => {
                    return (
                        <li key={index}>
                            <Icon icon={arrayOfIcons[index]} size={24} />
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
