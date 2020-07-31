import React from 'react';
import Workout from '../Workout';
import Exercise from '../../BuildWorkout/Exercise/Exercise';

const SavedWorkouts = () => {
  return(
    <div className="Workouts-Saved">
      <h2 className="sctn-title-workouts">Saved Workouts</h2>
      <div className="workouts-wrap">
        <div className="workouts">
          <Workout
            workoutName="Back 1"
            restTimeBetweenSets="1 min"
            numberOfSets="3"
            workoutDB="saved-workouts"
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
          <Workout
            workoutName="Jump 1"
            restTimeBetweenSets="1 min"
            numberOfSets="5"
            workoutDB="saved-workouts"
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
            <Exercise
              exerciseName="Exercise 4"
              activeTime="30 sec"
              restTime="10 sec"
              intensityLevel="2"
              exerciseFocus="Cardio"
              resistanceWeight=""
            />
            <Exercise
              exerciseName="Exercise 5"
              activeTime="45 sec"
              restTime="10 sec"
              intensityLevel="2"
              exerciseFocus="Legs - Quads"
              resistanceWeight="25 lbs"
            />
            <Exercise
              exerciseName="Exercise 6"
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
  )
}

export default SavedWorkouts;