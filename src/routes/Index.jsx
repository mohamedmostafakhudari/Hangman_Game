import { useState } from "react";
import HowToPlay from "../components/HowToPlay";
import Menu from "../components/Menu";

export default function Index() {
	const [isGuideOpen, setIsGuideOpen] = useState(false);
	return (
		<>
			<div className="container px-6 md:px-0 max-w-screen-lg grid place-items-center min-h-full">
				<Menu onGuideOpen={() => setIsGuideOpen(true)} />
				<HowToPlay
					isOpen={isGuideOpen}
					onClose={() => setIsGuideOpen(false)}
				/>
			</div>
		</>
	);
}
