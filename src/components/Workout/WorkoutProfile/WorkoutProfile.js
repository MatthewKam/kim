import React from "react";
import "./WorkoutProfile.scss";
import Button from "@material-ui/core/Button";
import Profile from "./Profile/Profile";
import ProgressTracker from "./ProgressTracker/ProgressTracker";

export function WorkoutProfile() {

	return (
		<div className="WorkoutProfile">
			<Profile />
      <Button>Progress</Button>
      <Button>Workouts</Button>
      <Button>Stats</Button>
      <ProgressTracker />
		</div>
	);
}

export function BuildProfile() {
	return <div className="BuildProfile"></div>;
}

export default WorkoutProfile;
