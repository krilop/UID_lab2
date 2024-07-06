import React from "react";

import VertTimeLine from "../Components/Hrono/Hrono2";

import ImageSlider from "../Components/ImageSlider/ImageSlider";

import {useParams} from "react-router-dom";
import Data from "../Data/peopleData.json";
import YoutubeEmbed from "../Components/YouTudeEmbed/YoutubeEmbed";
import {useLanguage} from "../Components/language/Language";
import Geolocation from "../Components/Geolocation/Geolocation";
import './PersonInfo.css';

const PersonInfo = () => {
    const { language, getTextsByLanguage } = useLanguage();
    const peopleData = getTextsByLanguage();
    const {id} = useParams();
    const selectedPerson=peopleData[id];
    const { name, years, img, geolocation, gallery, biography, linkOnVideo } = selectedPerson;
    const slides = [
        {url: process.env.PUBLIC_URL+ gallery.img1},
        {url: process.env.PUBLIC_URL+ gallery.img2},
        {url: process.env.PUBLIC_URL+ gallery.img3}
    ];
    return (
        <>
        <div className = "personal-info">
            <div className="cont">
                <div className="person-card">
                    <div className="class-text">
                        <h2>{name}</h2>
                        <p>{years}</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + img} className="day-image" />
                </div>
                 </div>

                <div className="container-slider">
                <ImageSlider slides={slides} />
            </div>

                <VertTimeLine element={biography}/>
            <YoutubeEmbed embedId={linkOnVideo}/>
            <Geolocation elem={geolocation}/>
            </div>
        </>

);
};
export default PersonInfo;
