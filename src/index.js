import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";

import "./main.css";

import Root from "./routes/Root.jsx";
import Index from "./routes/Index.jsx";
import Category from "./routes/Category.jsx";
import Game from "./routes/Game.jsx";

import { loader as wordsLoader } from "./routes/Game.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Root />}
		>
			<Route
				index
				element={<Index />}
			/>
			<Route
				path="category"
				element={<Category />}
			/>
			<Route
				path="game"
				loader={wordsLoader}
				element={<Game />}
			/>
		</Route>
	)
);
const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<RouterProvider router={router} />);
