someAsyncFunction(data, function(err,result) {
    if (err) {
    	return handleErr(err);
    }
    someAsyncFunction2(result.data, function(err,result) {
        if (err) {
        	return handleErr(err);
        }
        anotherAsyncFunction(results.data, function(err,result) {
            if (err) {
            	return handleErr(err);
            }
            //Do something with results
        });
    });
});