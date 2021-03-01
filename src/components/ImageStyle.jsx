import React from 'react'
import ListIcon from '@material-ui/icons/List';

export default function ImageStyle(props) {
    return (
        <div className="effect">
            <div className="effect-content">
                <div>{props.number}</div>
                <div>WORKOUTS</div>
                <div><ListIcon /></div>
            </div>
        </div>
    )
}
