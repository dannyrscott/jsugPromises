
someAsyncFunction(data)
.then([
	someAsyncFunction2(data),
	anotherAsyncFunction(data)
])
.fail(function(err){
	throw err;
})
.done(function(){
	console.log('we did it');
});