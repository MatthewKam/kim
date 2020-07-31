import React from "react";
import Button from "@material-ui/core/Button";
import Reminder from "../../Reminder/Reminder";
import BuildWorkout from "../BuildWorkout/BuildWorkout";
import { QuoteOfTheDay } from "../../Quotes/Quotes";
import StartWorkout from "../StartWorkout/StartWorkout";
import WorkoutQueue from "../WorkoutQueue/WorkoutQueue";
import QuickStats from "../Stats/QuickStats/QuickStats";
import Goals from "../Stats/Goals/Goals";
import SuggestedWorkouts from '../Workouts/TypeOf/SuggestedWorkouts'
import {
	MaterialButton,
	MaterialGroup,
} from "../../Button/Button";

import "./Home.scss";


const InitialScreen = () => {
	return (
		<div className="Initial-Screen">
			<h1>
				K<span>&#183;</span>I<span>&#183;</span>M
			</h1>
			<h2>Keep it moving</h2>
			<h3>A place to create custom workouts with ease.</h3>
			<h4>
				So you can focus more on doing the damn thing! Or start on a path to
				rediscovering what your body is capable of.
			</h4>
			<Button variant="contained" color="primary">
				Let's get started!
			</Button>
			<p>Set a target goal for weight and daily, weekly, monthly goals for time spent working out.</p>
			<p>Check your stats over time and keep moving past personal bests.</p>
      <p>Track your progress. Take pictures of your progression and see how far you've gotten.</p>
		</div>
	);
}

const Home = () => {
	return (
		<div className="Home">
			<Reminder reminderTime="7:30PM PST" />
			<div className="Home-ATF">
        <InitialScreen />
        <QuoteOfTheDay />
      </div>
			<div className="HomeStats">
        <MaterialGroup groupClass="Stat-Buttons">
          <MaterialButton buttonText="Goals" />
          <MaterialButton buttonText="Quick Stats" />
        </MaterialGroup>
        <Goals />
        <QuickStats />
        <Button>See More Stats</Button>
      </div>
			<div className="HomeWorkouts">
        <SuggestedWorkouts />
        <Button>My Workouts</Button>
        <Button>Saved Workouts</Button>
      </div>
      <BuildWorkout />
			<StartWorkout />
			<WorkoutQueue />
		</div>
	);
}

export default Home;
