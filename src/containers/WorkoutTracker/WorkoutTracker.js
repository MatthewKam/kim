import React from 'react';
import Home from '../../components/Workout/Home/Home';
import WorkoutProfile from '../../components/Workout/WorkoutProfile/WorkoutProfile';
import { StickyNavBar, StickyFooter } from '../../components/Workout/Navigation/Navigation';
import Stats from '../../components/Workout/Stats/Stats';
import Workouts from "../../components/Workout/Workouts/Workouts";
import './WorkoutTracker.scss';

const WorkoutTracker = (props) => {
  return (
    <div className="WorkoutTracker">
      <div>Side Bar</div>
      <StickyNavBar/>
      <Home/>
      <WorkoutProfile/>
      <Stats/>
      <Workouts />
      <StickyFooter/>
    </div>
  );
}

export default WorkoutTracker;