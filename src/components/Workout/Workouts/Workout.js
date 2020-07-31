import React, { useState } from "react";
import {
	MaterialButton,
	MaterialGroup,
} from "../../../components/Button/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import "./Workouts.scss";

export function Workout(props) {
	const {
		workoutName,
		numberOfSets,
		restTimeBetweenSets,
		mainFocus,
    workoutDB,
    children
	} = props;
	let typeOfButtons;
	let menuButtons;

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	switch (workoutDB) {
		case "saved-workouts":
			menuButtons = (
        <div className="Workout-settings">
          <div className="menu-items">
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
              <MenuItem onClick={handleClose}>Add To Queue</MenuItem>
              <MenuItem onClick={handleClose}>Duplicate</MenuItem>
            </Menu>
          </div>
          <div className="expand-workout">
            <i className="material-icons">expand_more</i>
          </div>
				</div>
			);

			break;
		case "my-workouts":
			menuButtons = (
        <div className="Workout-settings">
          <div className="menu-items">
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
              <MenuItem onClick={handleClose}>Add To Queue</MenuItem>
              <MenuItem onClick={handleClose}>Edit</MenuItem>
            </Menu>
          </div>
          <div className="expand-workout">
            <i className="material-icons">expand_more</i>
          </div>
				</div>
			);
			break;
		case "suggested-workouts":
			menuButtons = (
        <div className="Workout-settings">
          <div className="menu-items">
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
              <MenuItem onClick={handleClose}>Add To Queue</MenuItem>
              <MenuItem onClick={handleClose}>Save</MenuItem>
              <MenuItem onClick={handleClose}>Duplicate</MenuItem>
            </Menu>
          </div>
          <div className="expand-workout">
            <i className="material-icons">expand_more</i>
          </div>
        </div>
          
			);
			break;
		case "queue-workout":
			menuButtons = (
        <div className="Workout-settings">
          <div className="menu-items">
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
              <MenuItem onClick={handleClose}>Start</MenuItem>
              <MenuItem onClick={handleClose}>Move</MenuItem>
              <MenuItem onClick={handleClose}>Remove</MenuItem>
            </Menu>
          </div>
          <div className="expand-workout">
            <i className="material-icons">expand_more</i>
          </div>
        </div>
			);
			break;
		case "begin-workout":
      menuButtons = (
        <div className="Workout-settings">
          <div className="menu-items">
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
              <MenuItem onClick={handleClose}>Reset</MenuItem>
              <MenuItem onClick={handleClose}>Remove</MenuItem>
            </Menu>
          </div>
        </div>
			);
			typeOfButtons = (
				<div className="Play-Buttons">
					<MaterialGroup groupName="PlayPauseStop">
						<MaterialButton materialIcon="play_circle_outline" />
						<MaterialButton materialIcon="pause_circle_outline" />
						<MaterialButton materialIcon="stop_circle" />
					</MaterialGroup>
					<MaterialGroup groupName="PreviousRewindForwardNext">
						<MaterialButton materialIcon="skip_previous" />
						<MaterialButton materialIcon="replay_10" />
						<MaterialButton materialIcon="forward_10" />
						<MaterialButton materialIcon="skip_next" />
					</MaterialGroup>
				</div>
			);
			break;
		default:
			typeOfButtons = <MaterialButton materialIcon="playlist_add" />;
	}
	return (
		<div className="Workout">
			<div className="Workout-header">
				<div className="Workout-info">
					<h3>
						<u>{workoutName}</u>
					</h3>
					<p>
						{mainFocus ? `Main Focus: ${mainFocus},` : ""}10 Exercises
						{numberOfSets > 1
							? `, ${numberOfSets} Sets`
							: `, ${numberOfSets} Set`}
						, Total Time: 34 min 10 sec , Level 2 Intensity
						{restTimeBetweenSets
							? `, ${restTimeBetweenSets} Rest Between Sets`
							: ""}{" "}
					</p>
				</div>
				
        {menuButtons}
        
			</div>
			<div className="Workout-body">
				{children}
				{typeOfButtons}
			</div>
		</div>
	);
}

export default Workout;
