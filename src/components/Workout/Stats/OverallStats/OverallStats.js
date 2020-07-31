import React from 'react';
import '../Stats.scss';
import Button from '@material-ui/core/Button';

export function OverallStats(props) {
  let title = (props.statsTitle ? props.statsTitle : 'Overall Stats')
  return(
    <div className="OverallStats sctn-container">
      <h1 className="sctn-title">{title}</h1>
      <h4>Time Since last workout</h4>
      <div className="workout-time">
        <h2>Time</h2>
        <p>Graph of time</p>
        <Button>Day</Button>
        <Button>Week</Button>
        <Button>Month</Button>
        <Button>All</Button>
      </div>
      <div className="workout-focus">
        <h2>Focus</h2>
        <p>Graph of focus</p>
        <Button>Day</Button>
        <Button>Week</Button>
        <Button>Month</Button>
        <Button>All</Button>
      </div>
      <div className="workout-intensity">
        <h2>Intensity</h2>
        <p>Graph of intensity</p>
        <Button>Day</Button>
        <Button>Week</Button>
        <Button>Month</Button>
        <Button>All</Button>
      </div>
      <div className="workouts">
        <h3>Last Workouts</h3>
        <p>Workout 1</p>
        <p>Workout 2</p>
        <p>Workout 3</p>
        <p>Workout 4</p>
        <p>Workout 5</p>
        <p>Workout 6</p>
        <p>Workout 7</p>
        <Button>See More</Button>
      </div>
      <div className="exercise">
        <h3>Last Exercises</h3>
        <p>Exercise 1</p>
        <p>Exercise 2</p>
        <p>Exercise 3</p>
        <p>Exercise 4</p>
        <p>Exercise 5</p>
        <p>Exercise 6</p>
        <p>Exercise 7</p>
        <p>Exercise 8</p>
        <p>Exercise 9</p>
        <p>Exercise 10</p>
        <Button>See More</Button>
      </div>
    </div>
  )
}

export default OverallStats;