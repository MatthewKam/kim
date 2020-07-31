import React from "react";
import QuickStats from "./QuickStats/QuickStats";
import OverallStats from "./OverallStats/OverallStats";
import Goals from "./Goals/Goals";
import {
	MaterialButton,
	MaterialGroup,
} from "../../../components/Button/Button";
import "./Stats.scss";

const Stats = () => {
	return (
		<div className="Stats sctn-container">
			<h1 className="sctn-title">Stats</h1>
			<MaterialGroup groupClass="Stat-Buttons">
				<MaterialButton buttonText="Goals" />
				<MaterialButton buttonText="Quick Stats" />
				<MaterialButton buttonText="Overall Stats" />
			</MaterialGroup>
			<Goals />
			<QuickStats />
			<OverallStats />
		</div>
	);
}

export default Stats;
