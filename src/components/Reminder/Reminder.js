import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import IconButton from "@material-ui/core/IconButton";

export default function Reminder(props) {
	const { reminderTime } = props;
	const [reminderStatus, setReminderStatus] = useState({
		reminderOn: false,
	});
	const handleChange = (event) => {
		setReminderStatus({
			...reminderStatus,
			[event.target.name]: event.target.checked,
		});
	};
	const AntSwitch = withStyles((theme) => ({
		root: {
			width: 45,
			height: 25,
			padding: 0,
			display: "flex",
		},
		switchBase: {
			padding: 2,
			color: theme.palette.grey[500],
			"&$checked": {
				transform: "translateX(20px)",
				color: theme.palette.common.white,
				"& + $track": {
					opacity: 1,
					backgroundColor: theme.palette.primary.main,
					borderColor: theme.palette.primary.main,
				},
			},
		},
		thumb: {
			width: 21,
			height: 21,
			boxShadow: "none",
		},
		track: {
			border: `1px solid ${theme.palette.grey[500]}`,
			borderRadius: 40 / 2,
			opacity: 1,
			backgroundColor: theme.palette.common.white,
			transition: theme.transitions.create(["background-color", "border"]),
		},
		checked: {},
	}))(Switch);

	return (
		<div className="Reminder">
			<p className="reminder-text">
				Reminder at:
				<br />
				{reminderTime}
			</p>
			<FormGroup className="reminder-toggle">
				<Typography component="div">
					<Grid component="label" container spacing={2}>
						<Grid className="grid-left" item>
							<i className="material-icons">alarm_off</i>
						</Grid>
						<Grid className="grid-mid" item>
							<AntSwitch
								checked={reminderStatus.reminderOn}
								onChange={handleChange}
								name="reminderOn"
							/>
						</Grid>
						<Grid className="grid-right" item>
							<i className="material-icons">alarm_on</i>
						</Grid>
					</Grid>
				</Typography>
			</FormGroup>
      <div  className="reminder-set">
			  <IconButton><i className="material-icons">alarm_add</i></IconButton>
      </div>
		</div>
	);
}
