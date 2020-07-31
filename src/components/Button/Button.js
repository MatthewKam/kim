import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import "./Button.scss";

export function BasicButton({ buttonText, buttonStyle, buttonType, buttonElement }) {
	let button;
	if (buttonElement === "div") {
		button = (
			<div className="btn-div">
				<span>{buttonText}</span>
			</div>
		);
	}
	if (buttonElement === "button") {
		button = (
			<button type={buttonType} className="btn-button">
				<span>{buttonText}</span>
			</button>
		);
	}
	if (buttonElement === "anchor") {
		button = (
			<a href={buttonText} className="btn-anchor">
				<span>{buttonText}</span>
			</a>
		);
	}

	return (
		<div className={`Button ${buttonStyle ? buttonStyle : ""}`}>
			{button}
		</div>
	);
}

export function MaterialButton({materialIcon,
  buttonText,
  buttonClass,
  inverseOrder,
  buttonType}) {
	let button;

	if (!inverseOrder) {
		button = (
			<>
				<i className="material-icons">{materialIcon}</i>
				<span>&nbsp;</span>
				{buttonText ? buttonText : ""}
			</>
		);
	} else {
		button = (
			<>
				{buttonText ? buttonText : ""}
				<span>&nbsp;</span>
				<i className="material-icons">{materialIcon}</i>
			</>
		);
	}
	return (
		<Button
			variant={buttonType}
			color="primary"
			className={`Material-Button${buttonClass ? " " + buttonClass : ""}`}
		>
			{button}
		</Button>
	);
}

export function MaterialGroup(props) {
	const { children, groupClass } = props;
	return (
		<div className={`Material-Group${groupClass ? " " + groupClass : ""}`}>
			{children}
		</div>
	);
}

// <MaterialGroup >
//   <MaterialButton
//     buttonText="new goals"
//     materialIcon="add"
//   />
//   <MaterialButton
//     buttonText="goals"
//     materialIcon="edit"
//   />
// </MaterialGroup>

export default BasicButton;
