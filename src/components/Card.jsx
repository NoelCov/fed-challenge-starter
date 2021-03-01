import React from 'react';
import Timer from "./Timer";
export default function Card(props) {
    return (
    <div className="card">
    <img src={props.src} className="card-img-top" alt="" />
    {props.style}
    <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <img className="profImage" src={props.profilePicURL} alt="" />
        <Timer
            icon={props.icon}
            time={props.time}
            secondIcon={props.secondIcon} 
            distance={props.distance}
        />
        <a href="/"><b>{props.link}</b></a>
    </div>
    </div>
    )
}
