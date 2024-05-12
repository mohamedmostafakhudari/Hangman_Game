import React from "react";
const types = {
	regular: "",
	primary: "text-white bg-green-500",
	keyboard: "text-slate-800 bg-white",
};

export const Button = ({ onClick, className, children, type }) => {
	return (
		<button
			onClick={onClick}
			className={`block uppercase font-bold tracking-widest ${type ? types[type] : types["regular"]} ${className}`}
		>
			{children}
		</button>
	);
};
export const CategoryButton = ({ onClick, className, children }) => {
	return (
		<Button
			onClick={onClick}
			className={`w-full py-6 rounded-[48px] text-2xl lg:text-3xl md:py-20`}
			type="primary"
		>
			{children}
		</Button>
	);
};
