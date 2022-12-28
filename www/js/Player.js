/**
 * Player.js -- File to track the player, which will have characters.
 */
class Player
{
	/**
	 * Main Constructor for the player class.
	 */
	constructor(name)
	{
		let self = this;

		self.name = name;
		self.sprite = "./images/helmets/helmet2.png";
		self.level = 1;
	}
};

export {Player};
