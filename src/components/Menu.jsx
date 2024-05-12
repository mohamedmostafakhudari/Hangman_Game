import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = ({ onGuideOpen }) => {
	const dialogRef = useRef();
	const navigate = useNavigate();

	function handlePageTransition() {
		if (!dialogRef.current) return;
		dialogRef.current.style.transform = "translateX(-200%)";
		dialogRef.current.addEventListener("transitionend", () => {
			navigate("/category");
		});
	}
	return (
		<dialog
			open
			ref={dialogRef}
			className="relative flex flex-col duration-700 ease-in-out bg-[#1D140B] rounded-lg w-80 p-12 h-[min(648px,65vh)] md:h-[min(768px,80vh)] md:w-full md:max-w-screen-sm"
		>
			<GameTitle />
			<div className="flex-1 grid place-items-center">
				<button
					onClick={handlePageTransition}
					className="relative bg-white rounded-full grid place-items-center p-6 cursor-pointer overflow-hidden duration-200 ease-in-out scale-90 hover:scale-100 md:p-10 group"
				>
					<div className="w-12 ml-1 relative z-10 md:w-20">
						<img
							src="../assets/icons/play.png"
							alt=""
						/>
					</div>
					<div className="absolute duration-300 ease-in-out top-0 left-1/2 -translate-x-1/2 translate-y-full w-32 aspect-square rounded-full bg-green-800 pointer-events-none md:w-48 group-hover:translate-y-0"></div>
				</button>
			</div>
			<div className="flex items-center justify-center pb-0">
				<button
					onClick={onGuideOpen}
					className="bg-[#757C19] text-white font-bold p-6 py-2 rounded-full text-xl md:px-12 md:py-4 md:text-3xl"
				>
					How To Play
				</button>
			</div>
		</dialog>
	);
};

function GameTitle() {
	return (
		<h1 className="absolute left-1/2 -translate-x-1/2 bottom-full translate-y-1/3 text-6xl flex flex-col leading-3 gap-10 text-white font-bold md:translate-y-3/4">
			<span className="self-end">The</span>
			<span className="tracking-wider block relative">
				<div className="absolute bg-green-600 left-0 w-0 -top-4 -bottom-4 -z-10 animate-fillingText pointer-events-none"></div>
				Hangman
			</span>
			<span className="self-end relative">
				<div className="absolute bg-green-600 right-0 w-0 -top-4 -bottom-4 -z-10 delay-500 animate-fillingText pointer-events-none"></div>
				Game
			</span>
		</h1>
	);
}

export default Menu;
