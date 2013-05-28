var Ship = function() {

	var loaded = false,
		mealPrepared = false,
		plotCourse = false;
	this.crew = {
		Fry: {
			loadDelivery: function(cb) {
				cb = cb || function() {};
				$.ajax({
					url: 'fakeDB.cfm',
					type: "GET",
					dataType: "json",
					error: function(err) {
						cb(err);
					},
					success:function() {
						loaded = true;
						cb(null);
					}
				});
			}
		},
		Bender: {
			prepareMeal: function(cb) {
				cb = cb || function() {};
				$.ajax({
					url: 'fakeDB.cfm',
					type: "GET",
					dataType: "json",
					error: function(err) {
						cb(err);
					},
					success:function() {
						mealPrepared = true;
						cb(null);
					}
				});
			}
		},
		Leela: {
			plotCourse: function(cb) {
				cb = cb || function() {};
				$.ajax({
					url: 'fakeDB.cfm',
					type: "GET",
					dataType: "json",
					error: function(err) {
						cb(err);
					},
					success:function() {
						plotCourse = true;
						cb(null);
					}
				});
			}
		}
	},

	this.takeOff = function() {
		if (!loaded || !mealPrepared || !plotCourse) {
			throw new Error('Oh noes, we crashed!');
		}

		console.log('Good News Everyone!');
	}
}


$(document).ready(function(){
	var ship = new Ship();

	var countdown = 2;
	ship.crew.Fry.loadDelivery();
	ship.crew.Bender.prepareMeal();
	ship.crew.Leela.plotCourse();


	ship.takeOff();
});