import React from "react";
import Clock from "./Clock";

interface AnalogClockProps {
	size: number;
	time: Date;
}

const AnalogClock: React.FC<AnalogClockProps> = ({ size, time }) => {
	const hours = time.getHours();
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();

	const hourDegrees = (hours % 12) * 30 + minutes / 2;
	const minuteDegrees = minutes * 6;
	const secondDegrees = seconds * 6;

	const hourStyle = {
		transform: `rotate(${hourDegrees}deg)`,
	};

	const minuteStyle = {
		transform: `rotate(${minuteDegrees}deg)`,
	};

	const secondStyle = {
		transform: `rotate(${secondDegrees}deg)`,
	};

	return (
		<div style={{ width: size, height: size, position: "relative" }}>
			<div
				style={{
					position: "absolute",
					top: size / 2,
					left: size / 2,
					transform: "translate(-50%, -50%)",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: size / 2,
						height: size / 2,
						transformOrigin: "100% 100%",
						...hourStyle,
					}}
				>
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: size / 10,
							height: size / 10,
							borderRadius: "50%",
							backgroundColor: "white",
							transform: "translate(-50%, -50%)",
						}}
					/>
					<div
						style={{
							position: "absolute",
							top: size / 20,
							left: 0,
							width: size / 20,
							height: size / 2,
							backgroundColor: "white",
							transform: "translate(-50%, -100%)",
						}}
					/>
				</div>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: size / 2.5,
						height: size / 2.5,
						transformOrigin: "100% 100%",
						...minuteStyle,
					}}
				>
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: size / 20,
							height: size / 2,
							backgroundColor: "white",
							transform: "translate(-50%, -100%)",
						}}
					/>
				</div>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: size / 3,
						height: size / 3,
						transformOrigin: "100% 100%",
						...secondStyle,
					}}
				>
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: size / 40,
							height: size / 2,
							backgroundColor: "red",
							transform: "translate(-50%, -100%)",
						}}
					/>
				</div>
			</div>
		</div>
	);
};
export default AnalogClock;
