import React, { useState, useEffect } from "react";
import "./Events.scss";

export function Scroll() {
	const [scrollInfo, setScrollInfo] = useState({
		scrollY: null,
		scrollX: null,
		scrollDirectionY: null,
		scrollDirectionX: null,
	});
	const [bodyOffset, setBodyOffset] = useState(
		document.body.getBoundingClientRect()
	);
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [lastScrollLeft, setLastScrollLeft] = useState(0);

	const scrollListener = () => {
		setBodyOffset(document.body.getBoundingClientRect());
		setScrollInfo({
			scrollY: -bodyOffset.top,
			scrollX: bodyOffset.left,
			directionY:
				lastScrollTop !== -bodyOffset.top
					? lastScrollTop > -bodyOffset.top
						? "up"
						: "down"
					: "",
			directionX:
				lastScrollLeft !== -bodyOffset.left
					? lastScrollTop > -bodyOffset.left
						? "left"
						: "right"
					: "",
		});
		setLastScrollTop(-bodyOffset.top);
		setLastScrollLeft(-bodyOffset.left);
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollListener);
		return () => window.removeEventListener("scroll", scrollListener);
	});

	const { scrollX, scrollY, directionY, directionX } = scrollInfo;
	const hasScrolled =
		typeof scrollX === "number" && typeof scrollY === "number";
	return (
		<div
			className="Scroll"
			scroll-y={scrollY}
      scroll-direction-x={directionY}
      scroll-x={scrollX}
			scroll-direction-y={directionX}
		>
			<h2>
				{hasScrolled
					? `Your scroll position is at Y:${scrollY} ${directionY}, X:${scrollX} ${directionX}.`
					: "Scrolllllllllll MF!"}
			</h2>
		</div>
	);
}

export function MouseMovement() {
	const [mousePosition, setMousePosition] = useState({
		posX: null,
		posY: null,
	});
	const updateMousePosition = (ev) => {
		setMousePosition({ posX: ev.clientX, posY: ev.clientY });
	};

	useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition);
		return () => {
			window.removeEventListener("mousemove", updateMousePosition);

		};
	}, []);

  const { posX, posY } = mousePosition;
	const hasMovedCursor =
		typeof posX === "number" &&
		typeof posY === "number";
	return (
		<div className="Cursor" pointer-x={posX} pointer-y={posY}>
			<h1>
				{hasMovedCursor
					? `Your cursor is at X: ${posX}, Y: ${posY}.`
					: "Let's mouse around!"}
			</h1>
		</div>
	);
}
