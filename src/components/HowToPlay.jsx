import React from "react";

const HowToPlay = ({ isOpen, onClose }) => {
	return (
		<div className={`bg-green-500 absolute p-6 rounded-md max-w-screen-sm max-h-[648px] md:max-h-[768px] overflow-y-scroll ${isOpen ? "animate-fadeIn" : "hidden"}`}>
			<div className="sticky flex items-center justify-between left-12 right-12 bg-green-500 -top-6">
				<button
					onClick={onClose}
					className="text-slate-700 w-fit p-4"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="currentColor"
					>
						<path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
					</svg>
				</button>
				<h2 className="text-2xl font-bold text-center">How To Play</h2>
			</div>
			<ul className="mt-6 space-y-4">
				<li>
					<span className="font-bold text-lg block">1. Player Roles:</span> Word Setter: One player selects a word or phrase for the other player(s) to guess. This player is responsible for choosing a
					word and keeping it secret from the guesser(s). Guesser(s): The other player(s) attempt to guess the word chosen by the word setter. Their objective is to deduce the hidden word by guessing
					letters one at a time.
				</li>
				<li>
					<span className="font-bold text-lg block">2. Start the Game:</span> Designate who will be the word setter and who will be the guesser(s). If playing solo, you'll take on both roles.
				</li>
				<li>
					<span className="font-bold text-lg block">3. Choose a Word:</span> The word setter selects a word or phrase, ensuring it's not too long or too short for the difficulty level desired. Phrases
					can include spaces and punctuation marks.
				</li>
				<li>
					<span className="font-bold text-lg block">4. Display the Board:</span> The word setter displays the board, typically as a series of blank spaces, each representing a letter of the chosen
					word. For example, if the word is "hangman", the board might appear as "_ _ _ _ _ _ _".
				</li>
				<li>
					<span className="font-bold text-lg block">5. Guessing Letters:</span> The guesser(s) start by guessing a letter of the alphabet. If the guessed letter is in the word, the word setter reveals
					all instances of that letter on the board. If the guessed letter is not in the word, the word setter starts drawing the hangman figure, adding one part for each incorrect guess.
				</li>
				<li>
					<span className="font-bold text-lg block">6. Hangman Figure:</span> The hangman figure typically consists of a gallows and a stick figure. Incorrect guesses result in the gradual completion
					of the hangman figure, symbolizing the progress toward losing the game.
				</li>
				<li>
					<span className="font-bold text-lg block">7. Winning and Losing:</span> Winning: The guesser(s) win if they successfully guess all the letters of the word before completing the hangman
					figure. Losing: The guesser(s) lose if they complete the hangman figure before guessing all the letters of the word correctly.
				</li>
				<li>
					<span className="font-bold text-lg block">8. End of Game:</span> The game ends when the guesser(s) either successfully guess the word or complete the hangman figure. Players can then switch
					roles and play again, or continue with the same roles for another round.
				</li>
			</ul>
		</div>
	);
};

export default HowToPlay;
