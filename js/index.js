$(document).ready(function () {
	$(".box_button").on("click", function () {
			$(".cookie").animate({opacity: "0"}, 0) .promise().then(function(){
				$(".cookie2").delay(700).animate({opacity: "0"}, 0)}).promise().then(function(){
				$(".cookie3").delay(1200).animate({opacity: "0"}, 0)}).promise().then(function(){
				$(".cookie4").delay(1600).animate({opacity: "0"}, 0)}).promise().then(function(){
				$(".cookie5").delay(1900).animate({opacity: "0"}, 0)}).promise().then(function(){
					$(".poster").delay(4000).animate({opacity: "1"}, 5000)}).promise().then(function(){
					$(".cookiecloud").delay(5000).animate({width: "700px", hight:"700px", top: "40%", left: "73%"}, 2000)})
	})
})


$("lans").css("background-position-x", )

