import React, { createContext, useState, useContext } from 'react';
import data from '../../Data/peopleData.json'; // Импортируем файл с данными

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Начальный язык, например, английский

    const getTextsByLanguage = () => {
        return data[language]; // Возвращает тексты на выбранном языке
    };

    const getLang = () => {
        return language; // Возвращает текущий выбранный язык
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, getTextsByLanguage, getLang }}>
            {children}
        </LanguageContext.Provider>
    );
};


export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
