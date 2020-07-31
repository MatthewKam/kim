import React, { useState } from "react";
import "./Exercise.scss";
import { Button, Menu, MenuItem } from "@material-ui/core";

const Exercise = ({
	exerciseName,
	activeTime,
	restTime,
	intensityLevel,
	exerciseFocus,
	editExercise,
	resistanceWeight,
	children
}) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	let showSettings = editExercise ? (
		<div className="Exercise-settings">
			<Button
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick}
			>
				<i className="material-icons">more_vert</i>
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>Edit</MenuItem>
				<MenuItem onClick={handleClose}>Remove</MenuItem>
				<MenuItem onClick={handleClose}>Duplicate</MenuItem>
			</Menu>
		</div>
	) : (
		""
	);
	return (
		<div className="Exercise">
			<div className="Exercise-wrap">
				<div className={`Exercise-body level-${intensityLevel}`}>
					<h4>
						<i>{exerciseName}</i>
					</h4>
					<p>
						Active: {activeTime}
						{restTime ? `, Rest: ${restTime}` : ""}
						{intensityLevel ? `, Level: ${intensityLevel}` : ""}
						{exerciseFocus ? `, Focus: ${exerciseFocus}` : ""}
						{resistanceWeight ? `, Resistance: ${resistanceWeight}` : ""}
					</p>
				</div>
        {children}
				{showSettings}
			</div>
		</div>
	);
};

export default Exercise;
