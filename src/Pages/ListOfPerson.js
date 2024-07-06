import React from "react";

import peopleData from '../Data/peopleData.json';
import PersonCard from "../Components/PersonCard/PersonCard";
import '../App.css';
import {useLanguage} from "../Components/language/Language";

import './ListOfPerson.css';
import lang from "../Data/translate.json";
import SearchComponent from "../Components/SearchComponent/SearchComponent";

function ListOfPerson() {
    const { language, getTextsByLanguage } = useLanguage();
    const peopleData = getTextsByLanguage();
    const dataArray = Object.values(peopleData); // Преобразование объекта в массив
    const { getLang } = useLanguage();
    const currentLanguage = getLang();
    let translated;
    if(currentLanguage=="ru") {
        translated = lang.ru;
    } else    {
        translated = lang.en;
    }
    return (
    <div className = "main">
        <main>
         <h1>{translated.search.title}</h1>
                <div className = "search">
                    <SearchComponent/>
                  <search-button type="submit"></search-button>
                </div>
            <h3>{translated.list.title}</h3>
            <div className="card-container">
            {dataArray.map(person => (
                console.log(person.id),
                <PersonCard key={person.id} person={person} />
            ))}
            </div>
        </main>
         </div>
    )
}
export default ListOfPerson