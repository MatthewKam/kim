import React from 'react';
import { MaterialButton, MaterialGroup } from "../../../../components/Button/Button";
import Button from '@material-ui/core/Button';
import '../Stats.scss';
import './Goals.scss';

export function Goals(props){

  return(
    <div className="Goals sctn-container">
      <h1 className="sctn-title">Goals</h1>
      <div className="Goals-Wrap">
        <GoalSection sectionTitle="Weight" sectionClass="weight">
          <p>Current: 205 lbs</p>
          <p>Goal: 175 lbs</p>
        </GoalSection>
        <GoalSection sectionTitle="Time Spent" sectionClass="time">
          <p>1 hour per day</p>
          <p>7 hours per week</p>
          <p>50 hours per month</p>
        </GoalSection>
        <GoalSection sectionTitle="Personal Bests" sectionClass="best">
          <p>Upper Chest Press: 20 reps</p>
          <p>Leg Press: 10 reps</p>
          <p>Pull Ups: 15 reps</p>
          <p>Curls: 20 reps</p>
          <p>Run: 30 min, 3 miles</p>
        </GoalSection>
        <h4>Time Since last workout</h4>
      </div>
      <Button>See Your Progress</Button>
      <Button>Track Your Progress</Button>
      <MaterialGroup groupClass="add-edit-goals">
        <MaterialButton
          buttonText="add goals"
          materialIcon="add"
        />
        <MaterialButton
          buttonText="edit goals"
          materialIcon="edit"
        />
      </MaterialGroup>
    </div>
  )
}

export function GoalSection(props){
  const { sectionTitle, sectionIcon, sectionClass, children } = props;
  let icon = 
  (sectionIcon ? <i className="material-icons">{sectionIcon}</i> : '')
  return(
    <div className={`Goals-Section${sectionClass? ' ' + sectionClass: ''}`}>
      <h2>{sectionTitle} {icon}</h2>
      {children}
    </div>
  );
}

export default Goals;