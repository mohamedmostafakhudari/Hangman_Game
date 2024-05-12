import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
export async function loader({ request }) {
	const category = new URL(request.url).searchParams.get("category");
	try {
		return {
			data: await (await fetch(`https://www.wordgamedb.com/api/v1/words/?category=${category}`)).json(),
		};
	} catch (err) {
		console.log(err);
	}
}

const Game = () => {
	const { data } = useLoaderData();
	const [round, setRound] = useState(1);
	const targetWord = data[round - 1];
	const totalRounds = data.length;

	console.log(targetWord, `${round} / ${totalRounds}`);
	return <div>Game</div>;
};

export default Game;
