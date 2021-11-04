//抽獎結果
var isShaked = false;
var result = 1; // 0:未中獎 1:一般獎項 2:LINE點數 3:序號
result = Math.floor(Math.random() * 4);
$(function () {
    light(0, 700);
    light(1, 800);
    light(2, 900);
    setTimeout(function () {
        $('.hand').addClass('tada');
    }, 800);
    setInterval(function () {
        $('.hand').removeClass('tada');
        setTimeout(function () {
            $('.hand').addClass('tada');
        }, 100);
    }, 2500);
    $('#shake').on('click', function () {
        if (!isShaked) {
            showPrize();
            isShaked = true;
        }
    });
    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', deviceMotionHandler, false);
    }
    else {
        alert('不支援的設備，請用手機觀看。');
    }
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        setTimeout(function () {
            $('#detect-modal').modal();
        }, 1000);
        // $('#ios13').on('click',function(){
        // 	onClick();
        // });
    }
    else {
        // $('.ios13').hide();
    }
    $('#btn').on('click', function () {
        onClick();
        $('#detect-modal').modal('hide');
    });
});





$('#popbtn-back').on('click', function () {
    $('.popup').addClass('d-none');
});


//抽獎
function showPrize() {
    if (!isShaked) {
        switch (result) {
            case 0:// 未中獎
                $('#prize-title').text('您未中獎…');
                $('#prize-img').attr('src', 'img/prize_noprize.jpg');
                $('#prize-text').text('下次再接再勵！');
                $('#popbtn-up,.cong1,.cong2').hide();
                $('.light').hide();
                break;
            case 1:// 一般獎項
                $('#prize-img').attr('src', 'img/prize_01.jpg');
                $('#popbtn-up').text('使用優惠券(店員專用按鈕)');
                break;
            // case 2:// LINE點數
            //     $('#prize-img').attr('src', 'img/prize_02.jpg');
            //     $('#prize-text').text('10點 LINE POINTS');
            //     $('#popbtn-down').hide();
            //     break;
            // case 3:// 序號
            //     $('#popbtn-up').addClass('d-none');
            //     $('#popbtn-copy').removeClass('d-none');
            //     $('.image-area').addClass('d-none');
            //     $('.serial-area').removeClass('d-none');
            //     break;
        }
        ;
        $('.hand').removeClass('animated tada');
        $('.hand').addClass('shake-crazy shake-constant');
        drop();
        setTimeout(function () {
            $('.hand').removeClass('shake-crazy shake-constant');
        }, 3000);
        setTimeout(function () {
            $('.popup').removeClass('d-none');
            $('.info').css('z-index', '110');
        }, 2400);
        isShaked = true;
    }
}
//手機搖動判定
var SHAKE_THRESHOLD = 800;
var last_update = 0;
var x, y, z, last_x = 0, last_y = 0, last_z = 0;
function deviceMotionHandler(eventData) {
    var acceleration = eventData.accelerationIncludingGravity;
    var curTime = +new Date();
    if ((curTime - last_update) > 300) {
        var diffTime = curTime - last_update;
        last_update = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
        if (speed > SHAKE_THRESHOLD) {
            showPrize();
        }
        last_x = x;
        last_y = y;
        last_z = z;
    }
}
//要求搖動權限
function onClick() {
    // feature detect
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
            .then(function (permissionState) {
            if (permissionState === 'granted') {
                window.addEventListener('devicemotion', function () { });
            }
        })
            .catch(console.error);
    }
    else {
        // handle regular non iOS 13+ devices
    }
}
//紅包掉落效果
function drop() {
    var wh = $(window).height();
    var f = $(window).width();
    var html = "<img class='drop' src='img/drop.png'>";
    var dropInterval = setInterval(function () {
        var e = Math.random() * f - 100; //紅包的定位left值
        var fon = 80 + Math.random() * 60; //紅包大小
        var l = e - 100 + 200 * Math.random(); //紅包的横向位移
        var k = 2000 + 2500 * Math.random();
        $(html).clone().appendTo('body').css({
            left: e + "px",
            "width": fon,
        }).animate({
            top: (wh * 2) + "px",
            left: l + "px",
        }, k, "linear", function () { $(this).remove(); });
    }, 120);
    setTimeout(function () {
        clearInterval(dropInterval);
    }, 2800);
}
//閃光
function getRandom(x) {
    return Math.floor(Math.random() * x) + 1;
}
;
function light(i, t) {
    setInterval(function () {
        $('.light>img').eq(i).removeClass('blink');
        setTimeout(function () {
            $('.light>img').eq(i).css('top', getRandom(80) + 10 + 'vh').css('left', getRandom(100) + '%').addClass('blink');
        }, 10);
    }, t);
}
;
//複製序號
function CopyTextToClipboard(id) {
    var TextRange = document.createRange();
    TextRange.selectNode(document.getElementById(id));
    sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(TextRange);
    document.execCommand("copy");
    Swal.fire({
        position: 'center-center',
        toast: true,
        type: 'success',
        title: '複製完成!',
        showConfirmButton: false,
        timer: 1500
    });
}
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map

