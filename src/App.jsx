import Hello from "./components/Hello";
import { useEffect, useRef } from "react";
export default function App() {
	return (
		<>
			<Hello />
			<img
				ref={ref}
				src={hangmanDrawing[currentHealth]}
			></img>
		</>
	);
}
