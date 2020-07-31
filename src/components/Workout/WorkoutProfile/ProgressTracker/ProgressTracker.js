import React from "react";
import {
	MaterialButton
} from "../../../Button/Button";
import ProgressSlider from './ProgressSlider/ProgressSlider';
import ProgressReportCard from './ProgressReportCard/ProgressReportCard';
import "./ProgressTracker.scss";

// export function AddImage(){
//   return();
// }



export function ProgressTracker() {
	return (
		<div className="Progress-Tracker">
			<h1 className="sctn-title">Your progress</h1>
			<MaterialButton buttonText="Take New Photo" materialIcon="add_a_photo" />
      <div className="Progress">
        <div className="Progress-Start">
          <div className="progress-title">
            <h3>Humble Beginnings</h3>
            <h4>Where you started</h4>
          </div>
          <ProgressReportCard
            imgUrl="./image-body-type-5.jpg"
            dateTaken="July 11, 2020"
            timeTaken="3:05 PM (PST)"
          />
        </div>
        <div className="Progress-Report">
          <div className="progress-title">
            <h3>Rome wasn't built in a day</h3>
            <h4>The progress is the journey</h4>
          </div>
          <ProgressSlider/>
        </div>
      </div>
		</div>
	);
}

export default ProgressTracker;
