// src/components/PersonCard.js
import React from 'react';
import './PersonCard.css';
import {Link} from "react-router-dom";
import {useLanguage} from "../language/Language";
import lang from "../../Data/translate.json";

const PersonCard = ({ person }) => {
    const {id, name, years, img, link } = person;
    const { getLang } = useLanguage();
    const currentLanguage = getLang();
    let translated;
    if(currentLanguage=="ru") {
        translated = lang.ru.card;
    } else    {
        translated = lang.en.card;
    }
    return (
    <>
        <div className="person-card">
            <div className="class-text">
                <h2>{name}</h2>
                <p>{translated.year} {years}</p>
            </div>

            <img src={process.env.PUBLIC_URL + img} className={"images"}/>
            <Link to = {`/PersonInfo/${id}`} target="_blank" rel="noopener noreferrer">
               <button >{translated.btn}</button>
            </Link>
        </div>
    </>
    );
};

export default PersonCard;
