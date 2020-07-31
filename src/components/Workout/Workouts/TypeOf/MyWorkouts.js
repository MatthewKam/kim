import React from "react";
import Workout from '../Workout';
import Exercise from '../../BuildWorkout/Exercise/Exercise';
import { MaterialButton } from "../../../../components/Button/Button";

const MyWorkouts = () => {
	return (
		<div className="Workouts-My sctn-container-x">
			<h2 className="sctn-title-workouts">My Workouts</h2>
			<MaterialButton materialIcon="add" buttonText="Create workout" />
			<div className="workouts-wrap">
				<div className="workouts">
					<Workout
						workoutName="Jumprope 1"
						restTimeBetweenSets="1 min"
						numberOfSets="5"
						workoutDB="my-workouts"
					>
						<Exercise
							exerciseName="Exercise 1"
							activeTime="30 sec"
							restTime="10 sec"
							intensityLevel="2"
							exerciseFocus="Cardio"
							resistanceWeight=""
						/>
						<Exercise
							exerciseName="Exercise 2"
							activeTime="45 sec"
							restTime="10 sec"
							intensityLevel="2"
							exerciseFocus="Legs - Quads"
							resistanceWeight="25 lbs"
						/>
						<Exercise
							exerciseName="Exercise 3"
							activeTime="1 min"
							restTime="10 sec"
							intensityLevel="3"
							exerciseFocus="Legs - Hamstrings"
							resistanceWeight="25 lbs"
						/>
					</Workout>
				</div>
			</div>
		</div>
	);
};
export default MyWorkouts;
