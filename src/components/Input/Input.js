import React, { useRef } from "react";
import "./Input.scss";

export const Radio = (props) => {
	let inputField;
	const { radioName, radioValue, radioId, radioStyle, radioText } = props;
	if (props.radioDefault !== "true") {
		inputField = (
			<input name={radioName} type="radio" value={radioValue} id={radioId} />
		);
	} else {
		inputField = (
			<input
				name={radioName}
				type="radio"
				value={radioValue}
				id={radioId}
				defaultChecked
			/>
		);
	}
	return (
		<div className={`Radio ${radioStyle ? radioStyle : ""}`}>
			<div className="radio-wrap">
				<div className="radio">
					{inputField}
					<label htmlFor={radioId}>
						<div className="indicator"></div>
						<span>{radioText}</span>
					</label>
				</div>
			</div>
		</div>
	);
};

export const Checkbox = (props) => {
	let inputField;
	const {
		checkboxId,
		checkboxName,
		checkboxValue,
		checkboxStyle,
		checkboxText,
	} = props;
	if (props.checkboxDefault !== "true") {
		inputField = (
			<input
				type="checkbox"
				id={checkboxId}
				name={checkboxName}
				value={checkboxValue}
			/>
		);
	} else {
		inputField = (
			<input
				type="checkbox"
				id={checkboxId}
				name={checkboxName}
				value={checkboxValue}
				defaultChecked
			/>
		);
	}
	return (
		<div className={`Checkbox ${checkboxStyle ? checkboxStyle : ""}`}>
			<div className="checkbox-wrap">
				<div className="checkbox">
					{inputField}
					<label htmlFor={checkboxId}>
						<div className="check"></div>
						<span>{checkboxText}</span>
					</label>
				</div>
			</div>
		</div>
	);
};

export const Switch = (props) => {
	let onOff;
	const { switchStyle, switchShape } = props;
	return (
		<div className={`Switch ${switchStyle ? switchStyle : ""}`}>
			<div className="switch-wrap">
				<div className={`switch ${switchShape ? switchShape : ""}`}>
					<label>
						<input type="checkbox" />
						<span>{onOff}</span>
					</label>
				</div>
			</div>
		</div>
	);
};

export const Input = (props) => {
	let input, inputted;
	const {
		inputElement,
		inputType,
		inputId,
		inputValue,
		inputName,
		inputPlaceholder,
		inputStyle,
		children,
	} = props;

	if (inputElement === "input" || !inputElement) {
		input = (
			<input
				className={`form-field${inputted ? " " + inputted : ""}`}
				type={inputType}
				id={inputId}
				value={inputValue}
				name={inputName}
				placeholder={inputPlaceholder}
			/>
		);
	}
	if (inputElement === "select") {
		input = (
			<select name={inputName} id={inputId}>
				{children}
			</select>
		);
	}
	if (inputElement === "textarea") {
		input = (
			<textarea
				name={inputName}
				id={inputId}
				placeholder={inputPlaceholder}
				cols="100%"
			/>
		);
	}
	return (
		<div className={`Input ${inputStyle ? inputStyle : ""}`}>
			<div className="input-wrap">{input}</div>
		</div>
	);
};

const getPercentage = (current, max) => ((100 * current) / max).toFixed(0);
const getValue = (percentage, max) => ((max / 100) * percentage).toFixed(0);
const getLeft = (percentage) => `calc(${percentage}% - 15px)`;

export const Slider = (props) => {
	const sliderRef = useRef();
	const thumbRef = useRef();
  const diff = useRef();
  const currentRef = useRef();
  // let marks = [];


	const handleMouseMove = (event) => {
		let newX =
			event.clientX -
			diff.current -
			sliderRef.current.getBoundingClientRect().left;
		const start = 0;
		const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;
		if (newX < start) newX = 0;
		if (newX > end) newX = end;
    const newPercentage = getPercentage(newX, end);
    const newValue = getValue(newPercentage, max);
    thumbRef.current.style.left = getLeft(newPercentage);
    currentRef.current.textContent = newValue;
    onChange(newValue);
  };
  
	const handleMouseUp = () => {
		document.removeEventListener("mouseup", handleMouseUp);
		document.removeEventListener("mousemove", handleMouseMove);
	};

	const handleMouseDown = (event) => {
		diff.current =
			event.clientX - thumbRef.current.getBoundingClientRect().left;
		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
  };
  
	const {
		sliderStyle,
		sliderText,
		defaultValue,
    max,
    onChange
  } = props;
  
	let text =
		sliderText === "" || sliderText === " " ? "Slider Name" : sliderText;
	const initialPercentage = getPercentage(defaultValue, max);

	return (
		<div className={`Slider ${sliderStyle ? sliderStyle : ""}`}>
			<div className="slider-wrap">
				<h3>{text}</h3>
        <h4>
          <strong ref={currentRef}>{initialPercentage}</strong>
          &nbsp;/&nbsp;
          {max}
        </h4>
				<div className="slider" ref={sliderRef}>
					<div
            className="slider-thumb"
            style={{ left: getLeft(initialPercentage) }}
						ref={thumbRef}
						onMouseDown={handleMouseDown}
					></div>
					<span
						className="slider-ticks"
						style={{ left: defaultValue, width: "100%" }}
					></span>
					<input type="hidden" value={defaultValue} />
				</div>
			</div>
		</div>
	);
};
