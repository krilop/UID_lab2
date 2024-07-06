import React, {useState} from 'react';
import './ImageSlider.css';

const ImageSlider = ({slides})=> {
    const [currentIndex, setCurrentIndex]=useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return(
        <div className="slider">
            <div>
                <div className="leftArrow" onClick={goToPrevious}>❰</div>
                <div className="rightArrow" onClick={goToNext}>❱</div>
            </div>
            <div className="slide" style={{ backgroundImage: `url(${slides[currentIndex].url})`}}></div>
            <div className="dotContainerSlide">
                {slides.map((slide,slideIndex)=>(
                    <div className="dotSlide"
                         key={slideIndex}
                         onClick={()=>goToSlide(slideIndex)}>
                    ●
                </div>
                ))}

            </div>
        </div>
    );
};
export default ImageSlider;