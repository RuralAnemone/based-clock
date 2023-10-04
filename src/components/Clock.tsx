import React, { useState, useEffect } from "react";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";

const Clock = () => {
	const [time, setTime] = useState(new Date());
	const [isAnalog, setIsAnalog] = useState(true);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	const toggleClockType = () => {
		setIsAnalog(!isAnalog);
	};

	return (
		<div>
			<button onClick={toggleClockType}>
				{isAnalog ? "Switch to Digital" : "Switch to Analog"}
			</button>
			{isAnalog ? <AnalogClock size={40} time={time} /> : <DigitalClock time={time} />}
		</div>
	);
};

export default Clock;
