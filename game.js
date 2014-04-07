var direction = ["right", "left", "up", "down"];


function play(index) {
	var start = confirm("This is an adventure, choose the direction you want to take.  Choosing the right way at each turn can either lead you to freedom, or trap you forever!");

	if (start == true) {
		var question1 = prompt("You awake inside a dark room with two doors.  You can take either the right or left door");

		if (question1.toLowerCase() == "right") {
			var question2 = prompt("This room has a ladder that can go either up or down.  Choose to either go up the ladder or down the ladder.");
			if (question2.toLowerCase() == "up") {
				alert("You have made it to freedom! Congratulations!")
			}

		}  if (question2.toLowerCase() == "down") {
				alert("You have reached The Ironyard Academy!  You are stuck doing mock-ups forever!")
		}



		if (question1.toLowerCase() == "left"){
			var question3 = alert("You are trapped!  Try going a different direction next time through.");

		} 






  }	else {
			alert("Maybe another time");
		}
	
	









}