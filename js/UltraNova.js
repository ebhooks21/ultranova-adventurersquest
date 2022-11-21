/**
 * UltraNova.js -- File to store the UltraNova class.
 */

class UltraNova
{
	/**
	 * Main constructor for the UltraNova class.
	 */
	constructor(game)
	{
		let self = this;

		self.game = game;
	}

	/**
	 * Function to start the UltraNova.
	 */
	start()
	{
		let self = this;
		self.showMainDisplay();
	}

	/**
	 * Function to display the main display.
	 */
	showMainDisplay()
	{
		let self = this;

		//Draw the player area
		(self.game).drawPlayerInfoArea(null);
	}
};

export {UltraNova};
