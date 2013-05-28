<html>

	<head>

	</head>

	<body>

		<ul>
			<cfoutput>
			<cfloop from="1" to="10" index="i">
				<li>Item #i# -- <a href="" class="_delete">Delete</a></li>
			</cfloop>
			</cfoutput>
		</ul>
	</body>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

	<script>
		(function($){
			$('._delete').on('click',function(e){
				e.preventDefault();

				var $this = $(this).parent();



				var prom = $.when(
					$.ajax({
						url: 'fakeDB.cfm',
						type: "GET",
						dataType: "json"
					}),
					$this.fadeOut("slowest")
				);
				prom.done(function(){
					console.log('delete successful');
					$this.remove();
				});
				prom.fail(function(){
					$this.fadeIn();
					console.log('on noes :(');
				});

			});
		})(jQuery);
	</script>
</html>