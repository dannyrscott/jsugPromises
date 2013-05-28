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
				$this.fadeOut("slowest");
				$.ajax({
					url: 'fakeDBFast.cfm',
					type: "GET",
					dataType: "json",
					error: function() {
						$this.fadeIn();
						console.log('on noes :(');
					},
					success: function() {
						console.log('delete successful');
						$this.remove();

					}
				});
			});
		})(jQuery);
	</script>
</html>