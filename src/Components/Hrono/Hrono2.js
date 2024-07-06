import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import './Hrono2.css'
import React from "react";


const VertTimeLine = ({element})=>{
    const {logo}=element;
    return(
        <>
        <Timeline lineColor={'#ddd'} animate={ true }>
            {element.map((biography)=>{
                return(
                    <div className="tl-part">
                        <TimelineItem dateText={biography.time}>
                            <h3>{biography.title}</h3>
                            <p>{biography.text}</p>
                        </TimelineItem>
                        {biography.logo === "success" ? <img src={process.env.PUBLIC_URL + '/Images/events/birth.png'}/> : biography.logo === "birth" ? <img src={process.env.PUBLIC_URL + '/Images/events/Great_Success.png'}/> : logo}

                    </div>
                );
            })}

        </Timeline>
        </>
    );
}
export default VertTimeLine;
