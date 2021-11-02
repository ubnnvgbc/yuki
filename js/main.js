$(document).ready(function () {


	//小城新聞(新聞滑過去字顏色變)-----------------------------------------------------------------------------------------


	$(".news-list-inner").mouseenter(function () {
		$(this).find(".news_info").find("h3").css("color","#ae191c");
		$(this).find(".news_info").find("p").css("color","#ae191c");
	});
	$(".news-list-inner").mouseleave(function () {
		$(this).find(".news_info").find("h3").css("color","#000");
		$(this).find(".news_info").find("p").css("color","#000");
	});

	//往下的箭頭，滑按-----------------------------------------------------------------------------------------
	$(".page-arrow-icon").click(function () {
		$("html,body").animate({
			scrollTop: $('#arrowpage').offset().top - 100
		}, 500);
		return false;
	});


	//.navbar上面選單滑下加底色-----------------------------------------------------------------------------------------

	$(window).scroll(function () {
		var Yoffset = window.pageYOffset || document.documentElement.scrollTop;
		var Xoffset = window.pageXOffset;

		if (Yoffset > 50 && $(window).width() > 1199) {

			$(".navbar").addClass("navbarDecline");
		}
		// else if(Yoffset>=0  &&  $(window).width()<1199){
		// 	$(".navbar").removeClass("navbarDecline");
		// }
		else {
			$(".navbar").removeClass("navbarDecline");

		};
	});


	// PERFORMANCE興城業績
	// $(".chang-performance-pic").find("img:nth-child(2)").hide();

	// $(".chang-performance-pic").mouseenter(function () {
	// 	$(this).find("img:nth-child(1)").hide();
	// 	$(this).find("img:nth-child(2)").show();
	// });
	// $(".chang-performance-pic").mouseleave(function () {
	// 	$(this).find("img:nth-child(2)").hide();
	// 	$(this).find("img:nth-child(1)").show();
	// });

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



	//下雪動畫-----------------------------------------------------------------------------
	// let c = init("canvas"),
	// 	w = (canvas.width = window.innerWidth),
	// 	h = (canvas.height = window.innerHeight);
	// //initiation

	// class firefly {
	// 	constructor() {
	// 		this.x = Math.random() * w;
	// 		this.y = Math.random() * h;
	// 		this.s = Math.random() * 2;
	// 		this.ang = Math.random() * 2 * Math.PI;
	// 		this.v = this.s * this.s / 4;
	// 	}
	// 	move() {
	// 		this.x += this.v * Math.cos(this.ang);
	// 		this.y += this.v * Math.sin(this.ang);
	// 		this.ang += Math.random() * 20 * Math.PI / 180 - 10 * Math.PI / 180;
	// 	}
	// 	show() {
	// 		c.beginPath();
	// 		c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
	// 		c.fillStyle = "#fff";
	// 		c.fill();
	// 	}
	// }

	// let f = [];

	// function draw() {
	// 	if (f.length < 100) {
	// 		for (let j = 0; j < 10; j++) {
	// 			f.push(new firefly());
	// 		}
	// 	}
	// 	//animation
	// 	for (let i = 0; i < f.length; i++) {
	// 		f[i].move();
	// 		f[i].show();
	// 		if (f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h) {
	// 			f.splice(i, 1);
	// 		}
	// 	}
	// }

	// let mouse = {};
	// let last_mouse = {};

	// canvas.addEventListener(
	// 	"mousemove",
	// 	function (e) {
	// 		last_mouse.x = mouse.x;
	// 		last_mouse.y = mouse.y;

	// 		mouse.x = e.pageX - this.offsetLeft;
	// 		mouse.y = e.pageY - this.offsetTop;
	// 	},
	// 	false
	// );

	// function init(elemid) {
	// 	let canvas = document.getElementById(elemid),
	// 		c = canvas.getContext("2d"),
	// 		w = (canvas.width = window.innerWidth),
	// 		h = (canvas.height = window.innerHeight);
	// 	c.fillStyle = "rgba(30,30,30,1)";
	// 	c.fillRect(0, 0, w, h);
	// 	return c;
	// }

	// window.requestAnimFrame = (function () {
	// 	return (
	// 		window.requestAnimationFrame ||
	// 		window.webkitRequestAnimationFrame ||
	// 		window.mozRequestAnimationFrame ||
	// 		window.oRequestAnimationFrame ||
	// 		window.msRequestAnimationFrame ||
	// 		function (callback) {
	// 			window.setTimeout(callback);
	// 		}
	// 	);
	// });

	// function loop() {
	// 	window.requestAnimFrame(loop);
	// 	c.clearRect(0, 0, w, h);
	// 	draw();
	// }

	// window.addEventListener("resize", function () {
	// 	(w = canvas.width = window.innerWidth),
	// 	(h = canvas.height = window.innerHeight);
	// 	loop();
	// });

	// loop();
	// setInterval(loop, 1000 / 60);




});