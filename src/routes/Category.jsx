import React from "react";
import { CategoryButton } from "../components/ui/Button";
import { Link } from "react-router-dom";
const InitialData = {
	0: "animal",
	1: "country",
	2: "food",
	3: "plant",
	4: "sport",
};

const Category = () => {
	return (
		<div className="container px-6 space-y-8 md:p-0 max-w-screen-lg">
			<div className="flex items-center gap-4">
				<button className="bg-[#757C19] text-white p-4 rounded-full lg:p-6">
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							fill="currentColor"
						>
							<path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
						</svg>
					</div>
				</button>
				<h2 className="text-3xl font-bold text-white md:text-5xl lg:text-7xl">Pick a Category</h2>
			</div>
			<ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{Object.values(InitialData).map((cat) => (
					<li key={cat}>
						<Link to={`/game?category=${cat}`}>
							<CategoryButton>{cat}</CategoryButton>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Category;
