/**
 * Game.js -- File to define the game class.
 */

import {UltraNova} from "../js/UltraNova.js";

class Game
{
	/**
	 * Main constructor for the game class.
	 */
	constructor()
	{
		let self = this;

		self.un = new UltraNova();
	}

	/**
	 * Function to start the game.
	 */
	start()
	{
		alert("HERE2");
	}
};

export {Game};
