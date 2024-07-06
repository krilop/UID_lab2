import React, { useState } from 'react';
import './Header.css';

import logo from '../../assets/logo.png';
import language from '../../assets//lang.png';
import bars from '../../assets//bars.png';
import {Link } from 'react-router-dom';
import lang from '../../Data/translate.json';
import {useLanguage} from "../language/Language";


const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const { getLang, setLanguage} = useLanguage();
    const currentLanguage = getLang();
    let translated;
    if(currentLanguage=="ru") {
        translated = lang.ru.header;
    } else    {
        translated = lang.en.header;
    }
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
        setMenuVisible(false); // Close language menu after selection
    };
    return (
        <>

            <header className="app-header">
                <div className="nav">
                    <img
                        className="globe"
                        src={logo}
                        height="45"
                        width="auto"
                        alt="logo"
                    />
                    <ul className="links">
                        <li><Link to="/">{translated.home}</Link></li>
                        <li><Link to="/ListOfPerson">{translated.list}</Link></li>
                    </ul>
                    <div className="lang_ch">
                        <img
                            src={language}
                            height="30"
                            width="auto"
                            alt="language"
                            onClick={toggleMenu}
                        />
                        {menuVisible && (
                            <div className="lang-ch-menu">
                                {/* Implement language change functionality here */}
                                <button onClick={() => handleLanguageChange('ru')}>ru</button>
                                <button onClick={() => handleLanguageChange('en')}>en</button>
                            </div>
                        )}
                    </div>
                    <div className="toggle_btn" onClick={handleToggle}>
                        <img className="toggle_img" src={bars} alt="bars" />
                    </div>
                </div>

                {isOpen && (
                    <div className="dropdown_menu">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contacts">Contacts</a></li>
                            <li><a href="#list">List</a></li>
                            <li>
                                <div className="lang_ch">
                                    <img
                                        src={language}
                                        height="30"
                                        width="auto"
                                        alt="lang"
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;