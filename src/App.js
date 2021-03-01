import React from "react";
import Card from "./components/Card";
import TimerIcon from '@material-ui/icons/Timer';
import TimelineIcon from '@material-ui/icons/Timeline';
import ImageStyle from "./components/ImageStyle";

export default function App() {
  return (
    <div className="container">
      <Card 
        src="/images/lake-inniscarra-thumb.jpg"
        title="Lake Inniscarra, Ireland— Pyramid"
        profilePicURL="/images/lake-inniscarra-trainer.jpg"
        icon={<TimerIcon fontSize="small" />}
        time="30:53"
        secondIcon={<TimelineIcon fontSize="small" />}
        distance="6,248 M"
        link="VIEW DETAILS"
      />
      <Card
        src="/images/performance-series-thumb.jpg"
        style={<ImageStyle number="9" />}
        title="Performance Series"
        profilePicURL="/images/performance-series-trainer.jpg"
      />
      <Card
        src="/images/slow-pulls-thumb.jpg"
        title="Slow Pulls and Fast Intervals"
        profilePicURL="/images/slow-pulls-trainer.jpg"
        icon={<TimerIcon style={{width: "15px", margin: "3px 2px"}} />}
        time="44:13"
        secondIcon={<TimelineIcon fontSize="small" />}
        distance="9,948 M"
      />
      <Card 
        src="/images/20-minutes-to-toned-thumb.jpg"
        style={<ImageStyle number="12" />}
        title="20 Minutes to Toned"
        profilePicURL="/images/20-minutes-to-toned-trainer.jpg"  
      />
      <Card 
        src="/images/charles-race-thumb.jpg"
        title="Charles Race, Boston, Massachusetts"
        profilePicURL="/images/charles-race-trainer.jpg"
        icon={<TimerIcon style={{width: "15px", margin: "3px 2px"}} />}
        time="36:22"
        secondIcon={<TimelineIcon fontSize="small" />}
        distance="8,648 M"
      />
      <Card 
        src="/images/full-body-hiit-thumb.jpg"
        style={<ImageStyle number="12" />}
        title="Full-Body HIIT Series"
        profilePicURL="/images/full-body-hiit-trainer.jpg"
      />
      <Card 
        src="/images/kafue-river-thumb.jpg"
        title="Kafue River, Zambia— Power Stroke Pyramid"
        profilePicURL="/images/kafue-river-trainer.jpg"
        icon={<TimerIcon style={{width: "15px", margin: "3px 2px"}} />}
        time="22:22"
        secondIcon={<TimelineIcon fontSize="small" />}
        distance="4,660 M"
      />
      <Card 
        src="images/shred-and-burn-thumb.jpg"
        style={<ImageStyle number="16" />}
        title="Shred & Burn Series"
        profilePicURL="images/shred-and-burn-trainer.jpg"
      />
    </div>
  );
}
