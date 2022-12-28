/**
 * Screen.js -- File for managing the game screen.
 */
class Screen
{
	/**
	 * Main constructor for the screen class.
	 */
	constructor(game)
	{
		let self = this;

		self.game = game;
	}

	/**
	 * Function to draw the player info area.
	 */
	drawPlayerInfoArea(player)
	{
		$("#playerdataarea-playericon").html("<img src='" + player.sprite + "' class='ht-100' />");
		$("#playerdataarea-playername").html(player.name + "<br>" + player.level);
	}
};

export {Screen};
