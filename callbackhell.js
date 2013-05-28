someAsyncFunction(data, function(err,result) {
	if (err) {
		throw err;
	}
	someAsyncFunction2(data,function(err,result) {
		if (err) {
			throw err;
		}
		anotherAsyncFunction(data,function(err,results) {
			if (err) {
				throw err;
			}
		});
	});
});