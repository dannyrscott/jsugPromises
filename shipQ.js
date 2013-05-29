var Ship = function() {

	this.crew = {
		Fry: {
			loadDelivery: function(cb) {
				console.log('loading delivery');
				return Q.when($.ajax({
					data: {error:false,wait:1},
					url: 'fakeDB.cfm',
					type: "GET",
					dataType: "json"
				}));
			}
		},
		Bender: {
			prepareMeal: function() {
				console.log('preparing meal');
				return Q.when($.ajax({
					data: {error:true,wait:2},
					url: 'fakeDB.cfm',
					type: "GET",
					dataType: "json"
				}));
			}
		},
		Leela: {
			plotCourse: function() {
				console.log('plotting course');
				return Q.when($.ajax({
					data: {error:false,wait:1},
					url: 'fakeDB.cfm',
					type: "GET",
					dataType: "json"
				}));
			}
		}
	},

	this.takeOff = function() {
		console.log('Good News Everyone!');
	}
}


