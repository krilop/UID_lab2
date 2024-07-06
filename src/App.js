import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { useLanguage } from './Components/language/Language';
import {
    Route,
    Routes,
    HashRouter,
} from "react-router-dom";
import Data from './Data/peopleData.json';
import Main from './Components/Main/Main';
import PersonInfo from "./Pages/PersonInfo";
import ListOfPerson from "./Pages/ListOfPerson";

const App = () => {
    const { getTextsByLanguage, getLang } = useLanguage();
    const currentLanguage = getLang();
    const translated = currentLanguage === "ru" ? Data.ru : Data.en;
    const peopleData = getTextsByLanguage();
    const initialIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % 5;
    const [selectedPerson, setSelectedPerson] = useState(peopleData[initialIndex]);

    useEffect(() => {
        debugger
        const interval = setInterval(() => {
            const minuteIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % 5;
            setSelectedPerson(peopleData[minuteIndex]);
        }, 1000);
        return () => clearInterval(interval);
    }, [peopleData]);

    return (
        <HashRouter>
            <div className="app">
                <Header />
                <Routes>
                    <Route exact path="/" element={<Main person={selectedPerson} />} />
                    <Route path="/ListOfPerson" element={<ListOfPerson />} />
                    <Route path="/PersonInfo/:id" element={<PersonInfo person={selectedPerson} />} />
                </Routes>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
