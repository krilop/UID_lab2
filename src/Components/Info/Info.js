import React from 'react';
import './Info.css';
import {useLanguage} from "../language/Language";
import lang from "../../Data/translate.json";
const Info = () => {
    const { getLang } = useLanguage();
    const currentLanguage = getLang();
    let translated;
    if(currentLanguage=="ru") {
        translated = lang.ru.info;
    } else    {
        translated = lang.en.info;
    }
    return (
    <>
        <div className = "wall">
            <h1>{translated.name}</h1>
        </div>
        <div className = "red_line"></div>
        <div className = "info_wrapper">
        <h1>{translated.title}</h1>
        <p>{translated.text}</p>
        </div>
    </>
    );
};

export default Info;
