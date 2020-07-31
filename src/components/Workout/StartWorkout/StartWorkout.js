import React from "react";
import "./StartWorkout.scss";
import Workout from "../Workouts/Workout";
import Exercise from "../BuildWorkout/Exercise/Exercise";

const StartWorkout = () => {
	return (
		<div className="Start-Workout">
			<h1 className="sctn-title">Begin Workout</h1>
			<Workout
				workoutName="Calisthenics 1"
				restTimeBetweenSets="1 min"
				numberOfSets="3"
				workoutDB="begin-workout"
			>
				<Exercise
					exerciseName="Exercise 1"
					activeTime="30 sec"
					restTime="10 sec"
					intensityLevel="2"
					exerciseFocus="Cardio"
					resistanceWeight=""
        >
          <div className="progress finished"></div>
        </Exercise>
				<Exercise
					exerciseName="Exercise 2"
					activeTime="45 sec"
					restTime="10 sec"
					intensityLevel="2"
					exerciseFocus="Legs - Quads"
					resistanceWeight="25 lbs"
				>
          <div className="progress finished"></div>
        </Exercise>
				<Exercise
					exerciseName="Exercise 3"
					activeTime="1 min"
					restTime="10 sec"
					intensityLevel="3"
					exerciseFocus="Legs - Hamstrings"
					resistanceWeight="25 lbs"
				>
          <div className="progress finished"></div>
        </Exercise>
				<Exercise
					exerciseName="Exercise 4"
					activeTime="30 sec"
					restTime="10 sec"
					intensityLevel="2"
					exerciseFocus="Cardio"
					esistanceWeight=""
				>
          <div className="progress finished"></div>
        </Exercise>
				<Exercise
					exerciseName="Exercise 5"
					activeTime="45 sec"
					restTime="10 sec"
					intensityLevel="4"
					exerciseFocus="Legs - Quads"
					resistanceWeight="25 lbs"
				>
          <div className="progress active"></div>
        </Exercise>
				<Exercise
					exerciseName="Exercise 6"
					activeTime="1 min"
					restTime="10 sec"
					intensityLevel="3"
					exerciseFocus="Legs - Hamstrings"
					resistanceWeight="25 lbs"
				>
          <div className="progress"></div>
        </Exercise>
				<Exercise
					exerciseName="Exercise 7"
					activeTime="30 sec"
					restTime="10 sec"
					intensityLevel="2"
					exerciseFocus="Cardio"
					resistanceWeight=""
				>
          <div className="progress"></div>
        </Exercise>
				<Exercise
					exerciseName="Exercise 8"
					activeTime="45 sec"
					restTime="10 sec"
					intensityLevel="2"
					exerciseFocus="Legs - Quads"
					resistanceWeight="25 lbs"
				>
          <div className="progress"></div>
        </Exercise>
				<Exercise
					exerciseName="Exercise 9"
					activeTime="1 min"
					restTime="10 sec"
					intensityLevel="3"
					exerciseFocus="Legs - Hamstrings"
					resistanceWeight="25 lbs"
				>
          <div className="progress"></div>
        </Exercise>
			</Workout>
		</div>
	);
};
export default StartWorkout;
