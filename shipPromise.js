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

	ship.crew.Fry.loadDelivery()
	.then(function(){
		return ship.crew.Bender.prepareMeal()
	})
	.then(function(){
		return ship.crew.Leela.plotCourse()
	})
	.fail(function(){
		//Handle the error
		throw new Error(err.statusText);
	})
	.done(function(){
		ship.takeOff();
	});

	// $.when(
	// 	ship.crew.Bender.prepareMeal(),
	// 	ship.crew.Leela.plotCourse(),
	// 	ship.crew.Fry.loadDelivery()
	// )
	// .fail(function(){
	// 	//Handle the error
	// 	throw new Error(err.statusText);
	// })
	// .done(function(){
	// 	ship.takeOff();
	// });
});