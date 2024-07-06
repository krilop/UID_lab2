import React from 'react';
import './Main.css'; // импорт стилей из верхнего сегмента
import temp_pict from '../../assets//temp_pict.jpg'; // импорт изображения
import {Link} from 'react-router-dom'
import people from '../../Data/peopleData.json'
import { useHistory } from 'react-router-dom';
import Info from "../Info/Info";
import {useLanguage} from "../language/Language";
import lang from "../../Data/translate.json";




const Main = ({ person }) => {

    const { id, name, years, img, biography } = person;
    const { text} = biography[0];
    const { getLang } = useLanguage();
    const currentLanguage = getLang();
    let translatedLang;
    if(currentLanguage=="ru") {
        translatedLang = lang.ru.card;
    } else {
        translatedLang = lang.en.card;
    }
    const scrollToTop = () => {
        const scrollStep = -window.scrollY / (1000 / 80); // 1000 - время прокрутки в миллисекундах, 15 - чем меньше, тем медленнее
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    return (
        <>
            <Info/>
            <div className="person_wrapper">
                <h1>{translatedLang.title}</h1>
                <div className="persons_info">
                    <img src={process.env.PUBLIC_URL + img} alt="temp" />

                        <div className = "persons_bio">
                            <h2>{name}</h2>
                            <h3>{translatedLang.year} {years}</h3>
                            <h4>{text}</h4>

                        <Link  to={`/PersonInfo/${id}`}>
                        <button onClick={scrollToTop}>{translatedLang.btn}</button>
                        </Link>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Main;
