import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Exercise from "./Exercise/Exercise";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {
	MaterialButton,
	MaterialGroup,
} from "../../Button/Button";

const AddTime = ({ timeTitle, appendedId }) => {

	return (
		<div className="Add-Time">
			<h4>{timeTitle}</h4>
			<div className="units-wrap">
				<div className="units-type units-hours">
					<Slider
						defaultValue={0}
						aria-labelledby={appendedId + "-time-hours"}
						valueLabelDisplay="auto"
						step={1}
						marks
						min={0}
						max={5}
					/>
					<Typography
						id={appendedId + "-time-hours"}
						className="time-label"
						gutterBottom
					>
						Hours
					</Typography>
				</div>
				<div className="units-type units-minutes">
					<Slider
						defaultValue={0}
						aria-labelledby={appendedId + "-time-minutes"}
						valueLabelDisplay="auto"
						step={5}
						marks
						min={0}
						max={59}
					/>
					<Typography
						id={appendedId + "-time-minutes"}
						className="time-label"
						gutterBottom
					>
						Minutes
					</Typography>
				</div>
				<div className="units-type units-seconds">
					<Slider
						defaultValue={0}
						aria-labelledby={appendedId + "-time-minutes"}
						valueLabelDisplay="auto"
						step={5}
						marks
						min={0}
						max={59}
					/>
					<Typography
						id={appendedId + "-time-seconds"}
						className="time-label"
						gutterBottom
					>
						Seconds
					</Typography>
				</div>
			</div>
		</div>
	);
}

const FieldWraps = ({ wrapClass, children }) => {
	return (
		<div className={"Field-Wraps" + (wrapClass !== "" ? " " + wrapClass : "")}>
			{children}
		</div>
	);
}

const BuildWorkout = () => {
	const [exerciseFocus, setExerciseFocus] = React.useState("");
	const [weightUnit, setWeightUnit] = React.useState("lbs");
	// const [value, setValue] = React.useState(30);
	const handleChange = (event) => {
		setExerciseFocus(event.target.value);
		setWeightUnit(event.target.value);
	};
	return (
		<div className="Add-Workout">
			<h1 className="sctn-title">Add Workout</h1>
			<form action="">
				<FieldWraps wrapClass="font-basic field-wrap">
					<TextField
						required
						label="Workout Name"
						name="workoutName"
						defaultValue="Pilates"
					/>
				</FieldWraps>

				<Exercise
					editExercise="true"
					exerciseName="Exercise 3"
					activeTime="1 min"
					restTime="10 sec"
					intensityLevel="3"
					exerciseFocus="Legs - Hamstrings"
					resistanceWeight="25 lbs"
				/>
        
				<div className="Add-Exercise">
					<FieldWraps wrapClass="font-basic field-wrap">
						<TextField required label="Exercise Name" name="exerciseName" />
					</FieldWraps>
					<FieldWraps wrapClass="font-basic field-wrap">
						<AddTime timeTitle="Active Time" appendedId="active" />
					</FieldWraps>
					<FieldWraps wrapClass="font-basic field-wrap">
						<AddTime timeTitle="Rest Time" appendedId="rest" />
					</FieldWraps>
					<FieldWraps wrapClass="field-wrap">
						<Typography
							id="discrete-slider"
							className="font-basic"
							gutterBottom
						>
							Intensity Level
						</Typography>
						<Slider
							defaultValue={3}
							aria-labelledby="discrete-slider"
							valueLabelDisplay="auto"
							step={1}
							marks
							min={1}
							max={5}
						/>
					</FieldWraps>
					<FieldWraps wrapClass="exercise-focus field-wrap">
						{/* <InputLabel id="exercise-focus" className="font-basic"></InputLabel> */}
						<Select
							labelId="exercise-focus"
							id="exercise-focus-select"
							value={exerciseFocus}
							onChange={handleChange}
							displayEmpty
						>
							<MenuItem value="" disabled>
								Exercise Focus
							</MenuItem>
							<MenuItem value={"Legs"}>Legs</MenuItem>
							<MenuItem value={"Legs - Hamstrings"}>Legs - Hamstrings</MenuItem>
							<MenuItem value={"Legs - Quads"}>Legs - Quads</MenuItem>
							<MenuItem value={"Legs - Calves"}>Legs - Calves</MenuItem>
							<MenuItem value={"Legs - Glutes"}>Legs - Glutes</MenuItem>
							<MenuItem value={"Arms"}>Arms</MenuItem>
							<MenuItem value={"Arms - Biceps"}>Arms - Biceps</MenuItem>
							<MenuItem value={"Arms - Triceps"}>Arms - Triceps</MenuItem>
							<MenuItem value={"Arms - Forearms/Grip"}>
								Arms - Forearms/Grip
							</MenuItem>
							<MenuItem value={"Chest"}>Chest</MenuItem>
							<MenuItem value={"Chest - Upper"}>Back</MenuItem>
							<MenuItem value={"Back - Lower"}>Back - Lower</MenuItem>
							<MenuItem value={"Back - Middle (Lats)"}>
								Back - Middle (Lats)
							</MenuItem>
							<MenuItem value={"Back - Upper (Traps)"}>
								Back - Upper (Traps)
							</MenuItem>
							<MenuItem value={"Abs"}>Abs</MenuItem>
							<MenuItem value={"Abs - Lower"}>Abs - Lower</MenuItem>
							<MenuItem value={"Abs - Upper"}>Abs - Upper</MenuItem>
							<MenuItem value={"Abs - Side"}>Abs - Side</MenuItem>
							<MenuItem value={"Shoulders"}>Shoulders (Delts)</MenuItem>
							<MenuItem value={"Cardio"}>Cardio</MenuItem>
						</Select>
					</FieldWraps>
					<FieldWraps wrapClass="resistance-weight-wrap field-wrap">
						<Typography
							id="discrete-slider"
							className="font-basic"
							gutterBottom
						>
							Resistance Weight
						</Typography>
						<div className="resistance-weight flex-direction-row">
							<Slider
								defaultValue={3}
								aria-labelledby="discrete-slider"
								valueLabelDisplay="auto"
								step={5}
								marks
								min={5}
								max={225}
								className="weight-amount grow-4"
							/>
							<Select
								id="weight-unit-select"
								value={weightUnit}
								onChange={handleChange}
								className="weight-unit grow-1"
							>
								<MenuItem value={"lbs"}>lbs</MenuItem>
								<MenuItem value={"kgs"}>kgs</MenuItem>
							</Select>
						</div>
					</FieldWraps>
          AMRAP?
					<MaterialButton buttonText="Save Exercise" />
				</div>
				
        <div className="add-another">
          <MaterialButton buttonText="Add Exercise" className="add-more"/>
        </div>
        
				<MaterialGroup groupClass="Workout-Buttons">
					<MaterialButton
						materialIcon="playlist_add"
						buttonText="Save/Add to Queue"
					/>
					<MaterialButton buttonText="Save Workout" />
				</MaterialGroup>

			</form>
		</div>
	);
}

export default BuildWorkout;