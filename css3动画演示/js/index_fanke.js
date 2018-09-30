$(document).ready(function() {
    var animatedName = ["textflash","textshake","translationLeft","translationRight","translationUp","translationDown","textfloat","textemphashake","textbounce","textemphabounce","texttada","textemphatada","textswing","textwobble","textemphawobble","textpulse","textemphapulse","textflip","textflipInX","textflipOutX","textflipInY","textflipOutY","textfadeIn","textfadeInUp","textfadeInDown","textfadeInLeft","textfadeInRight","textfadeInUpBig","textfadeInDownBig","textfadeInLeftBig","textfadeInRightBig","textfadeOut","textfadeOutUp","textfadeOutDown","textfadeOutLeft","textfadeOutRight","textfadeOutUpBig","textfadeOutDownBig","textfadeOutLeftBig","textfadeOutRightBig","textbounceIn","textemphabounceIn","textbounceInUp","textbounceInDown","textbounceInLeft","textbounceInRight","textbounceOut","textbounceOutUp","textbounceOutDown","textbounceOutLeft","textbounceOutRight","textrotateIn","textrotateInUpLeft","textrotateInDownLeft","textrotateInUpRight","textrotateInDownRight","textrotateOut","textrotateOutUpLeft","textrotateOutDownLeft","textrotateOutUpRight","textrotateOutDownRight","texthinge","textrollIn","textrollOut","textlightSpeedIn","textlightSpeedOut","textwiggle","expandOpen","rollIn","rollOut","fadeAnimate","likeMoveUp","showLikeIconFull","fadeInNormal","fadeIn","zoomIn","fadeInLeft","fadeInRight","fadeInUp","fadeInDown","amoveRight","moveRight","moveLeft","moveVRLeft","moveUp","moveDown","slideLeft","slideRight","slideUp","slideDown","stretchRight","stretchLeft","pullUp","pullDown","zoomInLeft","zoomInRight","zoomInUp","zoomInDown","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","lightSpeedIn","flipInX","flipInY","rotateIn","rollIn","noeffect","noexiteffect","bounce","flash","pulse","rubberBand","shake","flyerShake","swing","tada","wobble","jello","flipIn","rotating","uniformlyRotating","fadeOut","bounceOut","zoomOut","rotateOut","hinge","lightSpeedOut","flipOutX","flipOutY","fadeOutRight","fadeOutLeft","fadeOutUp","fadeOutDown","fadeOutRightBig","fadeOutLeftBig","fadeOutUpBig","fadeOutDownBig","bounceOutLeft","bounceOutRight","bounceOutUp","bounceOutDown","rotateOutUpRight","rotateOutUpLeft","rotateOutDownRight","rotateOutDownLeft","zoomOutUp","zoomOutDown","zoomOutLeft","zoomOutRight","scaleTopIn","scaleBottomIn","scaleLeftIn","scaleRightIn","scaleOut","pushLeftOut","pushRightOut","pushTopOut","pushBottomOut","pullRightIn","pullLeftIn","pullTopIn","pullBottomIn","pageFadeUp","pageFadeIn","zoomCoverOut","zoomCoverIn","zoomCoverReverseIn","zoomCoverReverseOut","bgFilterTo1","bgFilterTo2","bgFilterTo3","bgFilterTo4","bgFilterTo5","bgFilterTo6","bgFilterTo7","bgFilterBack1","bgFilterBack2","bgFilterBack3","bgFilterBack4","bgFilterBack5","bgFilterBack6","bgFilterBack7","swiper_rotateIn","swiper_rotateOut","flipOutRight","flipInLeft","flipOutLeft","flipInRight","flipOutTop","flipInBottom","flipOutBottom","flipInTop","_flipInY","_flipInX","flipOutY","flipOutX","rotateCubeLeftOut","rotateCubeLeftIn","rotateCubeRightOut","rotateCubeRightIn","rotateCubeTopOut","rotateCubeTopIn","rotateCubeBottomOut","rotateCubeBottomIn","swiper_containerScale","swiper_container_big","gotoBottomAni","gotoFloatAni","startAnimation","ld-heartbeat","ld-float","ld-coin-h","ld-shadow","ld-bounce","ld-wander-h","ld-cycle","ld-jelly","ld-broadcast","ld-jump","ld-blur","ld-tremble","ld-clock","ld-squeeze"];
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