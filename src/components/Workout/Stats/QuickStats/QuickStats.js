import React from 'react';
import '../Stats.scss';
import './QuickStats.scss';

export function QuickStats(props) {
  let title = (props.statsTitle ? props.statsTitle : 'Quick Stats')
  return(
    <div className="QuickStats sctn-container">
      <div className="sctn-header">
        <h1 className="sctn-title">{title}</h1>
        <p>10 days in a row of working out!</p>
        <p>3/5 average intensity of workout</p>
        <p>Longest workout: 2 hours 20 minutes</p>
      </div>
      <h4>Time Since last workout</h4>
      <div className="Top-Five-Content">
        <h2>Top Five</h2>
        <div className="Top-Five-Wrap">
          <TopFive topFiveTitle="Workout">
            <p>1. Back 1</p>
            <p>2. Kicking Butt</p>
            <p>3. This is going to suck</p>
            <p>4. I hate Burpees</p>
            <p>5. Jumprope 1</p>
          </TopFive>
          <TopFive topFiveTitle="Focus">
            <p>1. Legs</p>
            <p>2. Chest</p>
            <p>3. Shoulders</p>
            <p>4. Back</p>
            <p>5. Cardio</p>
          </TopFive>
          <TopFive topFiveTitle="Time">
            <p>1. 2 hours 2 minutes</p>
            <p>2. 1 hour 45 minutes</p>
            <p>3. 1 hour 42 minutes </p>
            <p>4. 1 hour 5 minutes</p>
            <p>5. 10 minutes</p>
          </TopFive>
        </div>
      </div>
    </div>
  )
}

export function TopFive(props){
  const { topFiveTitle, children } = props;
  return(
    <div className="Top-Five">
      <h4>{topFiveTitle}</h4>
      {children}
    </div>
  )
}

export default QuickStats;