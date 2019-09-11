/*
Project game: "Space Rangers" based on MVC concept.
*/

/* ---------------------------- begin view ----------------------------- */

var view = {
	showCount: function (count) {
		var elCount = document.getElementById("area_game__user_count--total");
		elCount.innerHTML = count;
	},
	showMsg: function (msg) {
		var elMassage = document.getElementById("area_game__user_message-msg");
		elMassage.innerHTML = msg;
	},
	showShip: function (id, color) {
		var elShip = document.getElementById(id);
		if (color == "red") {
			elShip.setAttribute("class", "ship-red")
		} else if (color == "blue") {
			elShip.setAttribute("class", "ship-blue")
		}
	},

		showAsteroid: function (id) {
			var elAsteroid = document.getElementById(id);
			elAsteroid.setAttribute("class", "asteroid");
		},
	soundShot: function () {
		var audio = document.getElementsByTagName("audio")[0];
		audio.pause();
		audio.currentTime =0;
		audio.play();
	}


}

/* ----------------------------- end view ------------------------------ */


/* ---------------------------- begin model ---------------------------- */



/* ----------------------------- end model ----------------------------- */


/* -------------------------- begin controller ------------------------- */



/* --------------------------- end controller -------------------------- */




/* --------------------- anonymous initialize function ----------------- */

/* --------------------- anonymous initialize function ----------------- */