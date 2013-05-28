var Ship = function() {

	var loaded = false,
		mealPrepared = false,
		plotCourse = false;
	this.crew = {
		Fry: {
			loadDelivery: function(cb) {
				cb = cb || function() {};
				console.log('loading delivery');
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
				console.log('preparing meal');
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
				console.log('plotting course')
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
	ship.crew.Fry.loadDelivery(function(err){
		if (err) {
			throw new Error(err.statusText);
		}
		ship.crew.Bender.prepareMeal(function(err){
			if (err) {
				throw new Error(err.statusText);
			}
			ship.crew.Leela.plotCourse(function(err){
				if (err) {
					throw new Error(err.statusText);
				}
				ship.takeOff();
			});
		});
	});
});