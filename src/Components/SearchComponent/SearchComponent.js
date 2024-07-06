import React, { useState } from 'react';
import SearchResults from '../SearchResult/SearchResults';

import {useLanguage} from "../language/Language";
import data from "../../Data/peopleData.json"
import lang from "../../Data/translate.json"
//тут для английского

const SearchComponent = () => {
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
    const handleSearch = () => {
        // Преобразуйте строку поиска в нижний регистр для регистронезависимого поиска
        const query = searchQuery.toLowerCase();
        if (query === '') {
            // Если запрос пустой, очистите результаты поиска
            setResults([]);
            return;
        }
        // Преобразуем объект в массив его значений
        const peopleArray = Object.values(translatedLang);
        // Фильтрация данных на основе введенного запроса
        const searchResults = peopleArray.filter((person) =>
            person.name.toLowerCase().includes(query)
        );

        // Обновление результатов поиска в состоянии компонента
        setResults(searchResults);
    };

    const [results, setResults] = useState([]); // State to hold search results

    return (
        <div>
            <input
                type="text" placeholder={trnlang.hint}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>{trnlang.btn}</button>
            <SearchResults results={results} />
        </div>
    );
};

export default SearchComponent;
