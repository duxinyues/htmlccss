$(document).ready(function(){
	(function () {
		var newNav = $(".page4-news .new-nav div");
		var newCon = $(".page4-news .news-con");
		var leftList = $(".page4-news .news-con .left .left-list div");
		var leftCon = $(".page4-news .news-con .left .left-con");
		var rightList = $(".page4-news .news-con #c-right .left-list div");
		var rightCon = $(".page4-news .news-con #c-right .left-con");
		var rightD = $(".page4-news .news-con .right .right-con .right-description");
		var rightRightD = $(".page4-news .news-con #right-con .right-con .right-description");
		var pageControl = $(".page-control div");
		newNav.click(function () {
			newNav.eq($(this).index()).addClass("active").siblings().removeClass("active");
			newCon.eq($(this).index()).addClass("new-show").siblings().removeClass("new-show");
		});
		leftList.click(function () {
			leftList.eq($(this).index()).addClass("on").siblings().removeClass("on");
			leftCon.eq($(this).index()).addClass("left-show").siblings().removeClass("left-show");
		});
		rightList.click(function () {
			rightList.eq($(this).index()).addClass("on").siblings().removeClass("on");
			rightCon.eq($(this).index()).addClass("left-show").siblings().removeClass("left-show");
		});
		rightD.mouseenter(function () {
			rightD.eq($(this).index()).addClass("mouse").siblings().removeClass("mouse");
		});
		rightRightD.mouseenter(function () {
			rightRightD.eq($(this).index()).addClass("mouse").siblings().removeClass("mouse");
		});
		pageControl.mouseenter(function () {
			pageControl.eq($(this).index()).addClass("on").siblings().removeClass("on");
		}).mouseleave(function () {
			pageControl.eq($(this).index()).removeClass("on");
		});
		
	})()
});