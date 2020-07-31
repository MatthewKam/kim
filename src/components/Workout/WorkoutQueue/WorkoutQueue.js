import React from "react";
import "./WorkoutQueue.scss";
import Workout from '../Workouts/Workout';
import Exercise from '../BuildWorkout/Exercise/Exercise';

const WorkoutQueue = () => {
	return (
		<div className="Workout-Queue">
      <h1 className="sctn-title">Queue</h1>
      <div className="Workout-Finished">
        <Workout workoutName="Back 1" restTimeBetweenSets="1 min" numberOfSets="3" workoutDB="queue-workout">
          <Exercise exerciseName="Exercise 1" activeTime="30 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Cardio" resistanceWeight=""/>
          <Exercise exerciseName="Exercise 2" activeTime="45 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Legs - Quads" resistanceWeight="25 lbs"/>
          <Exercise exerciseName="Exercise 3" activeTime="1 min" restTime="10 sec" intensityLevel="3" exerciseFocus="Legs - Hamstrings" resistanceWeight="25 lbs"/>
        </Workout>

        <Workout workoutName="Jump 1" restTimeBetweenSets="1 min" numberOfSets="5" workoutDB="queue-workout" >
          <Exercise exerciseName="Exercise 1" activeTime="30 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Cardio" resistanceWeight=""/>
          <Exercise exerciseName="Exercise 2" activeTime="45 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Legs - Quads" resistanceWeight="25 lbs"/>
          <Exercise exerciseName="Exercise 3" activeTime="1 min" restTime="10 sec" intensityLevel="3" exerciseFocus="Legs - Hamstrings" resistanceWeight="25 lbs"/>
          <Exercise exerciseName="Exercise 4" activeTime="30 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Cardio" esistanceWeight=""/>
          <Exercise exerciseName="Exercise 5" activeTime="45 sec" restTime="10 sec" intensityLevel="4" exerciseFocus="Legs - Quads" resistanceWeight="25 lbs"/>
          <Exercise exerciseName="Exercise 6" activeTime="1 min" restTime="10 sec" intensityLevel="3" exerciseFocus="Legs - Hamstrings" resistanceWeight="25 lbs"/>
        </Workout>
      </div>
      <div className="Workout-Current">
        <Workout workoutName="Calisthenics 1" restTimeBetweenSets="1 min"	numberOfSets="3" workoutDB="queue-workout">
          <Exercise exerciseName="Exercise 1" activeTime="30 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Cardio" resistanceWeight=""/>
          <Exercise exerciseName="Exercise 2" activeTime="45 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Legs - Quads" resistanceWeight="25 lbs"/>
          <Exercise exerciseName="Exercise 3" activeTime="1 min" restTime="10 sec" intensityLevel="3" exerciseFocus="Legs - Hamstrings" resistanceWeight="25 lbs"/>
          <Exercise exerciseName="Exercise 4" activeTime="30 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Cardio" esistanceWeight=""/>
          <Exercise exerciseName="Exercise 5" activeTime="45 sec" restTime="10 sec" intensityLevel="4" exerciseFocus="Legs - Quads" resistanceWeight="25 lbs"/>
          <Exercise exerciseName="Exercise 6" activeTime="1 min" restTime="10 sec" intensityLevel="3" exerciseFocus="Legs - Hamstrings" resistanceWeight="25 lbs"/>
          <Exercise exerciseName="Exercise 7" activeTime="30 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Cardio" resistanceWeight=""/>
          <Exercise exerciseName="Exercise 8" activeTime="45 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Legs - Quads" resistanceWeight="25 lbs"/>
          <Exercise exerciseName="Exercise 9" activeTime="1 min" restTime="10 sec" intensityLevel="3" exerciseFocus="Legs - Hamstrings" resistanceWeight="25 lbs"/>
        </Workout>
      </div>
      <div className="Workout-Next">
        <Workout workoutName="Back 2" restTimeBetweenSets="1 min" numberOfSets="3" workoutDB="queue-workout">
          <Exercise exerciseName="Exercise 1" activeTime="30 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Cardio" resistanceWeight=""/>
          <Exercise exerciseName="Exercise 2" activeTime="45 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Legs - Quads" resistanceWeight="25 lbs"/>
          <Exercise exerciseName="Exercise 3" activeTime="1 min" restTime="10 sec" intensityLevel="3" exerciseFocus="Legs - Hamstrings" resistanceWeight="25 lbs"/>
        </Workout>

        <Workout workoutName="Jump 2" restTimeBetweenSets="1 min" numberOfSets="5" workoutDB="queue-workout" >
          <Exercise exerciseName="Exercise 1" activeTime="30 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Cardio" resistanceWeight=""/>
          <Exercise exerciseName="Exercise 2" activeTime="45 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Legs - Quads" resistanceWeight="25 lbs"/>
          <Exercise exerciseName="Exercise 3" activeTime="1 min" restTime="10 sec" intensityLevel="3" exerciseFocus="Legs - Hamstrings" resistanceWeight="25 lbs"/>
          <Exercise exerciseName="Exercise 4" activeTime="30 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Cardio" esistanceWeight=""/>
          <Exercise exerciseName="Exercise 5" activeTime="45 sec" restTime="10 sec" intensityLevel="4" exerciseFocus="Legs - Quads" resistanceWeight="25 lbs"/>
          <Exercise exerciseName="Exercise 6" activeTime="1 min" restTime="10 sec" intensityLevel="3" exerciseFocus="Legs - Hamstrings" resistanceWeight="25 lbs"/>
        </Workout>

        <Workout workoutName="Jumprope 1" restTimeBetweenSets="1 min" numberOfSets="5" workoutDB="queue-workout">
          <Exercise exerciseName="Exercise 1" activeTime="30 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Cardio" resistanceWeight=""/>
          <Exercise exerciseName="Exercise 2" activeTime="45 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Legs - Quads" resistanceWeight="25 lbs"/>
          <Exercise exerciseName="Exercise 3" activeTime="1 min" restTime="10 sec" intensityLevel="3" exerciseFocus="Legs - Hamstrings" resistanceWeight="25 lbs"/>
          <Exercise exerciseName="Exercise 4" activeTime="30 sec" restTime="10 sec" intensityLevel="2" exerciseFocus="Cardio" esistanceWeight=""/>
        </Workout>
      </div>
			
    </div>
	);
}

export default WorkoutQueue;