// src/components/PersonCard.js
import React from 'react';
import './ProgCard.css';
import {useLanguage} from "../language/Language";
import lang from "../../Data/translate.json";

const PersonCard = ({ person }) => {
    const { id, name, linkGH, img } = person;
    const { getLang } = useLanguage();
    const currentLanguage = getLang();
    let translated;
    if(currentLanguage=="ru") {
        translated = lang.ru.footer;
    } else    {
        translated = lang.en.footer;
    }
    return (
        <div className="prog-card">
            <h2>{name}</h2>
            <img src={process.env.PUBLIC_URL + img} className={"progimages"}/>
            <a href = {linkGH} target="_blank" rel="noopener noreferrer">
                {translated.git}
            </a>
        </div>
    );
};

export default PersonCard;
