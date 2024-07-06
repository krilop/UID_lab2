// src/components/Footer.js
import React from 'react';
import './Footer.css';
import ProgDetails from '../../Data/progDetails.json';
import ProgCard from "../ProgCard/ProgCard";
import lang from '../../Data/translate.json';
import {useLanguage} from "../language/Language";
const Footer = () => {
    const { getLang } = useLanguage();
    const currentLanguage = getLang();
    let translated;
    if(currentLanguage=="ru") {
        translated = lang.ru.footer;
    } else    {
        translated = lang.en.footer;
    }
    return (
    <>
        <footer className="app-footer">
        <h1>{translated.title}</h1>

            <div className={"prog-card-container"}>
                {ProgDetails.map(person=>(<ProgCard key={person.id} person={person}/>))}
            </div>
            <p>&copy; 2023 Famous People Website</p>
        </footer>
    </>
    );
};

export default Footer;