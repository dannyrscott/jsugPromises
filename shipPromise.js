var Ship = function() {

	var loaded = false,
		mealPrepared = false,
		plotCourse = false;
	this.crew = {
		Fry: {
			loadDelivery: function(cb) {
				console.log('loading delivery');
				return $.ajax({
					url: 'fakeDB.cfm',
					type: "GET",
					dataType: "json"
				});
			}
		},
		Bender: {
			prepareMeal: function() {
				console.log('preparing meal');
				return $.ajax({
					url: 'fakeDB.cfm',
					type: "GET",
					dataType: "json"
				});
			}
		},
		Leela: {
			plotCourse: function() {
				console.log('plotting course');
				return $.ajax({
					url: 'fakeDB.cfm',
					type: "GET",
					dataType: "json"
				});
			}
		}
	},

	this.takeOff = function() {
		console.log('Good News Everyone!');
	}
}


$(document).ready(function(){
	var ship = new Ship();

	var countdown = 2;
	ship.crew.Fry.loadDelivery()
	.then(ship.crew.Bender.prepareMeal())
	.then(ship.crew.Leela.plotCourse())
	.fail(function(){
		//Handle the error
		throw new Error(err.statusText);
	})
	.done(function(){
		ship.takeOff();
	});
});