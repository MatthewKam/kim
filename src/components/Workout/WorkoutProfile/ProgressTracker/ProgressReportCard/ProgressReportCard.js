import React, {useState} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import QuickStats from "../../../Stats/QuickStats/QuickStats";
import './ProgressReportCard.scss';

const ProgressReportCard = ({ imgUrl, dateTaken, timeTaken }) => {
  let imgSrc = require(`${imgUrl}`);
  const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="Progress-Report-Card">
			<div className="Progress-Image">
				<img
					src={imgSrc}
					alt={`Report Card${" - " + dateTaken + " " + timeTaken}`}
				/>
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
          <MenuItem onClick={handleClose}>Change Image</MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
          <MenuItem onClick={handleClose}>Archive</MenuItem>
        </Menu>
				<h4>Photo Taken</h4>
				<p>
					<span>{dateTaken}</span> <span>at {timeTaken}</span>
				</p>
			</div>
			<QuickStats statsTitle="Stat Snapshot" />
		</div>
	);
}

export default ProgressReportCard;