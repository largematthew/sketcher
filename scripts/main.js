
$(document).ready(function () {
	var randred = (Math.floor(Math.random() * 255) + 1);
	var randblue = (Math.floor(Math.random() * 255) + 1);
	var randgreen = (Math.floor(Math.random() * 255) + 1);
	var red = "" + randred;
	var blue = "" + randblue;
	var green = "" + randgreen;
	var randomColor = "rgb("+red+","+green+","+blue+")";
	var bred = "" + (255 - randred);
	var bgreen = "" + (255 - randgreen);
	var bblue = "" + (255 - randblue);
	var brandomColor = "rgb("+bred+","+bgreen+","+bblue+")";
	var grid = "<div class='grid'></div>";
	$('body').css('background-color',brandomColor);
	$('.text').css('color',randomColor);
	$('.sketcher').css('border','1px solid '+randomColor);
	$('#reset').css({
		'background-color': randomColor,
		'color': brandomColor
	});
	var size = prompt("Please enter the height and width of your grid", "E.g. '10' will create a 10 x 10 grid");
	
	for (var i = 1; i <= (size * size); i++) {
		$('.sketcher').append(grid)
	};
	$('.grid').css('height', 500/size);
	$('.grid').css('width', 500/size);
	$('.grid').mouseover(function () {$(this).css('background-color',randomColor); });
	$('.grid').click(function () {$(this).css('background-color',brandomColor); });
});