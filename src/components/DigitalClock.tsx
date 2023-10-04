import React from "react";

interface DigitalClockProps {
	time: Date;
}

const DigitalClock: React.FC<DigitalClockProps> = ({ time }) => {
	const formattedTime = time.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	});

	return <div>{formattedTime}</div>;
};

export default DigitalClock;
