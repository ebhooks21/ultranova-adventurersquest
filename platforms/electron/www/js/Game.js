/**
 * Game.js -- File to define the game class.
 */

import {UltraNova} from "../js/UltraNova.js";
import {Screen} from "../js/Screen.js";

class Game
{
	/**
	 * Main constructor for the game class.
	 */
	constructor()
	{
		let self = this;

		self.un = new UltraNova(self);
		self.screen = new Screen(self);
	}

	/**
	 * Function to start the game.
	 */
	start()
	{
		let self = this;

		//Start the game
		(self.un).start();
	}

	/**
	 * Function to draw the player info area.
	 */
	drawPlayerInfoArea(player)
	{
		let self = this;

		(self.screen).drawPlayerInfoArea(player);
	}
};

export {Game};
