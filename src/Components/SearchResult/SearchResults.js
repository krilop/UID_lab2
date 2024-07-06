import React, {useState} from 'react';
import PersonCard from '../PersonCard/PersonCard';
import data from "../../Data/peopleData.json";
import lang from "../../Data/translate.json";
import {useLanguage} from "../language/Language";

const SearchResults = ({ results }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const { getLang } = useLanguage();
    const currentLanguage = getLang();
    let translatedLang;
    let trnlang;
    if(currentLanguage=="ru") {
        translatedLang = data.ru;
        trnlang=lang.ru.search;
    } else {
        translatedLang = data.en;
        trnlang=lang.en.search;
    }

    if (!results) {
        return <p>{trnlang.loading}</p>; // Отображаем сообщение о загрузке, если результаты еще не получены
    }

    if (results.length == 0) {
        if (searchQuery.trim() === '') {
            return <p>{trnlang.noResults}</p>; // Отображаем сообщение о пустом запросе
        } else {
            return <p></p>; // Отображаем сообщение о том, что результаты не найдены
        }
    }
    return (
        <div>
            <h3>{trnlang.result}</h3>
            <div className="card-container">
            {results.map((person) => (
                <PersonCard key={person.id} person={person} />
            ))}
                </div>
        </div>
    );
};

export default SearchResults;
