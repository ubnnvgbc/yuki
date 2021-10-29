(function () {
    $(window).scroll(function () { 
        var Num = $(window).scrollTop() / 500;
        var Num2 = $(window).scrollTop() * .0004; // higher number for more zoom
        var Num2mod = Num2 + 1;
        var Num3 = $(window).scrollTop() * .2; // Title speed
        var Num3mod = Num3 + 20;
        return $('.shade').css('opacity', Num),
        $(".performance-animation").css({"transform":"scale(" + Num2mod + ")"}),
        $(".page-PERFORMANCE-text").css({"bottom": Num3mod + "%"});
    });
}.call(this));