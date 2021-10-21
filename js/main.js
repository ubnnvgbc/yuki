$(document).ready(function () {


	//.navbar上面選單滑下加底色

$(window).scroll(function(){
	var Yoffset=window.pageYOffset || document.documentElement.scrollTop;
	var Xoffset=window.pageXOffset;

	if (Yoffset>50  &&  $(window).width()>1199) {  

		$(".navbar").addClass("navbarDecline");
	}
	// else if(Yoffset>=0  &&  $(window).width()<1199){
	// 	$(".navbar").removeClass("navbarDecline");
	// }
	else{
		$(".navbar").removeClass("navbarDecline");

	};
});


// PERFORMANCE興城業績
	$(".chang-performance-pic").find("img:nth-child(2)").hide();

	$(".chang-performance-pic").mouseenter(function(){
		$(this).find("img:nth-child(1)").hide();
		$(this).find("img:nth-child(2)").show();
	  });
	  $(".chang-performance-pic").mouseleave(function(){
		$(this).find("img:nth-child(2)").hide();
		$(this).find("img:nth-child(1)").show();
	  });

//.navbar上面選單滑下加底色------後來改的

// $(window).scroll(function () {
// 	var Yoffset = window.pageYOffset || document.documentElement.scrollTop;
// 	var Xoffset = window.pageXOffset;

// 	if (Yoffset > 50 && $(window).width() > 1199) {

// 		$(".navbar").addClass("navbarDecline");
// 	} else if (Yoffset >= 0 && $(window).width() < 1199) {
// 		$(".navbar").removeClass("navbarDecline");
// 	} else {
// 		$(".navbar").removeClass("navbarDecline");
// 	};


	// if (Yoffset > 1000 && $(window).width() > 1199) {
	// 	$(".navbar").css("opacity", "1")
	// } else if (Yoffset >= 600 && $(window).width() < 1199) {
	// 	$(".navbar").css("opacity", "1")
	// } else {
	// 	$(".navbar").css("opacity", "0")
	// };



// });



//首頁-navbar menu X 收合-------------------------------
$("#menu-btn").click(function () {
	$("#nav-box").slideToggle();
	$(".header-menu-icon").toggleClass('pos');
	$(".menu-icon1").toggleClass('rotate45');
	$(".menu-icon2").toggleClass('click');
	$(".menu-icon3").toggleClass('rotate-45');
});


$(".back-member-phonemenu").click(function () {
	$(".member-phonecontainer").hide();
	$(".member-phonemenu").show();
});

$(".Menu-member li").click(function () {
	$(".member-phonecontainer").show();
	$(".member-phonemenu").hide();
});



//footer ul li 收合---------------------------------------------------
$(".footer-problem-icon").click(function () {
	$(this).parent().parent().find("ul").slideToggle(400);
})

//footer(< 符號上下切換)-------------------------------------------------
$(".footer-problem-icon").click(function () {
	$(this).toggleClass('footer-problem-icon-click');
});



//常見問題-右邊(+- 問題答案出現)-------------------------------------------------
$(".question-answer").hide();

$(".question").click(function () {

	//答案出現
	$(this).find(".question-answer").slideToggle(400);
	//+-符號切換
	$(this).toggleClass("question-in");
});



});