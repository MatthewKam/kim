import React from 'react';
import './Workouts.scss';
import MyWorkouts from './TypeOf/MyWorkouts';
import SavedWorkouts from './TypeOf/SavedWorkouts';
import SuggestedWorkouts from './TypeOf/SuggestedWorkouts';
import {
  MaterialButton,
  MaterialGroup
} from "../../../components/Button/Button";
 
const Workouts = () => {
  return(
    <div className="Workouts sctn-container-x">
      <h1 className="sctn-title">Workouts</h1>
      <MaterialGroup groupClass="buttons-space-evenly">
        <MaterialButton
          inverseOrder
          buttonText="My"
          materialIcon="fitness_center"
        />
        <MaterialButton
          materialIcon="turned_in"
          buttonText="Saved"
        />
        <MaterialButton
          materialIcon="thumb_up"
          buttonText="Recommended"
        />
      </MaterialGroup>
      <div className="workout-list">
        <MyWorkouts/>
        <SavedWorkouts/>
        <SuggestedWorkouts/>
      </div>
    </div>
  )
}

export default Workouts;