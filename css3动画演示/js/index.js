$(document).ready(function() {
    var animatedName = ["bounce", "flash", "pulse", "rubberBand", "shake", "headShake", "swing", "tada", "wobble", "jello", "heartBeat", "bounceIn", "bounceInUp", "bounceInLeft", "bounceInRight", "bounceInDown", "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "flip", "flipInX", "flipInY", "flipOutX", "flipOutY", "lightSpeedIn", "lightSpeedOut", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "hinge", "jackInTheBox", "rollIn", "rollOut", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp", "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp", "slideInDown", "slideInLeft", "slideInRight", "slideInUp", "slideOutDown", "slideOutLeft", "slideOutRight", "slideOutUp","puffIn","rotate","shock","shaken","puffOut"];
    for (var i = 0; i < animatedName.length; i++) {
        $(".wrap ul").append(
            `
            <li>
                <div class="animated ` + animatedName[i] + `">
                    <img src="http://gfs11.gomein.net.cn/T1W_xgBQhT1RCvBVdK.png" alt="">
                </div>
                <h2>动画
                    <span>` + (i + 1) + `</span>:
                    <p>` + animatedName[i] + `</p>
                </h2>
            </li>
            `
        );
    }
    $(".wrap ul li").mousemove(function() {
        $(this).addClass("bg").siblings("li").removeClass("bg");
        $(this).children("div").addClass("active").parent("li").siblings("li").children("div").removeClass("active");
    })

    $(".open").click(function() {
        $(".wrap ul li div").toggleClass("active");
    })
})