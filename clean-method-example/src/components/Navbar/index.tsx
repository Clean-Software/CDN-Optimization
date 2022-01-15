import React from 'react';
import { BASE_URL_CLOUDINARY } from '../../shared/GLOBAL';
import navBarItens from '../../utils/itens';
import ButtonBlue from '../buttonBlue';
// import Icon from '../Icon';
import './styles.scss';

const Navbar = () => {
    const arrayOfIcons: string[] = ['home', 'happy', '', 'user'];
    return (
        <nav className="NavBarMain">
            <a href="/">
                <img
                    className="logo"
                    src={`${BASE_URL_CLOUDINARY}v1642273991/logo_exfoez.png`}
                    alt="Logo da PetAdopt"
                />
            </a>
            <ul className="nav-menu">
                {navBarItens.map((item, index) => {
                    return (
                        <li key={index}>
                            {/* <Icon icon={arrayOfIcons[index]} size={24} /> */}
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
