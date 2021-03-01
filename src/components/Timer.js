import React from 'react'

export default function Timer(props) {
    return (
        <div style={{marginBottom: "5px"}}>
            <span className="details">{props.icon}  {props.time}</span>
            <span className="details">{props.secondIcon}  {props.distance}</span>
        </div>

    )
}
