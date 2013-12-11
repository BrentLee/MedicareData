(function($){
	$(document).ready(function(){
		var inputElement = document.getElementById("input");
		inputElement.addEventListener("change", handleFiles, false);

		function handleFiles() {
	  		var file = this.files[0];

	  		var reader = new FileReader();
	  		reader.onload = function(file){
	  			var rows = file.target.result.split(/[\r\n|\n]+/);
	  			var headers = rows[0].split(/,/);
	  		}

	  		reader.readAsText(file);

		}
	});
	
})(jQuery)

