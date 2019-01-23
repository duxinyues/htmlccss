$(document).ready(function(){
	var swidth;
	    var dwidth;
	    if (width == 1920) {
	        dwidth = 509;
	        swidth = 161.4;
	    } else if (width == 1366) {
	        dwidth = 509;
	        swidth = 106;
	    } else if (width == 1440) {
	        dwidth = 509;
	        swidth = 105;
	    } else if (width == 1680) {
	        dwidth = 509;
	        swidth = 118.8;
	    } else if (width == 1280) {
	        dwidth = 509;
	        swidth = 105;
	    }
	    var bannerPic = $("#pic .list-div");
	    bannerPic.eq(0).stop().animate({
	        width: dwidth
	    }, 200);
	    bannerPic.eq(0).find(".unfold").stop().show();
	    bannerPic.eq(0).find(".fold").stop().hide();
	    bannerPic.mouseenter(function () {
	        $(this).stop().animate({
	            width: dwidth
	        }, 200);
	        $(this).find(".unfold").stop().show();
	        $(this).find(".fold").stop().hide();
	        $(this).siblings().stop().animate({
	            width: swidth
	        }, 200);
	        $(this).siblings().find(".unfold").stop().hide();
	        $(this).siblings().find(".fold").stop().show();
	    });
})
