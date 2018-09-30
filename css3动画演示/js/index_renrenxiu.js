$(document).ready(function() {
    var animatedName = ["ani-arrow","ani-music","music-play-rotate","fadeIn","pacman-balls","zfadeIn","copyrightPageAnimShow","copyrightPageAnimHide","rotate","rotateLeft","bounce","flash","pulse","rubberBand","shake","swing","tada","wobble","bounceIn","bounceInUp","bounceInLeft","bounceInRight","bounceInRightUp","bounceInLeftUp","bounceInRightDown","bounceInLeftDown","bounceInDown","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutRightUp","bounceOutLeftUp","bounceOutRightDown","bounceOutLeftDown","bounceOutUp","fadeIn","fadeInDown","fadeInLeftDown","fadeInRightDown","fadeInLeftUp","fadeInRightUp","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeOut","moveInLeft","moveInRight","moveInUp","moveInDown","fadeOutDown","fadeOutLeftDown","fadeOutRightDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutLeftUp","fadeOutRightUp","fadeOutUpBig","moveOutLeft","moveOutRight","moveOutUp","moveOutDown","flip","flipInX","flipInY","flipInHorizontal","boingIn","flipOutX","flipOutY","lightSpeedInRight","lightSpeedInLeft","lightSpeedOut","rotateIn","rotateInRight","rotateInLeft","rotateInLeftDown","rotateInRightDown","rotateInLeftUp","rotateInRightUp","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","hinge","rollIn","rollOut","zoomIn","bigIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","slideInDown","slideInLeft","slideInRight","slideInUp","slideOutDown","slideOutLeft","slideOutRight","slideOutUp","rotateInZoom","rotateInZoom2","flip3d","jello","lightSpeedOut","lightSpeedOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","slideInDown","hinge","twisterInDown","twisterInUp","boingOutDown","perspectiveDownRetourn","perspectiveLeftRetourn","perspectiveRightRetourn","perspectiveUpRetourn","puffOut","puffIn","holeOut","swapRight","swapLeft","slideDown","slideLeft","slideRight","slideUp","dropShake","stretchRight","stretchLeft","pullUp","pullDown","line-spin-fade-loader"];
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