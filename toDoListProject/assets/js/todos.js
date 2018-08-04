// Check off specific to-dos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete To-Do item
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// Grab new to do text from input
		var toDoText = ($(this).val());
		$(this).val("");
		// Create a new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + toDoText + "</li>")
	}
});

$("#toggle").click(function(){
	$("input[type='text']").fadeToggle();
});