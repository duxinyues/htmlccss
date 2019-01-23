var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var bl = 1;
bl = width / 1920;
var xz = "";
function adjustImg(className, width) {
    var w = parseInt($("." + className).css("width"));
    var h = parseInt($("." + className).css("height"));
    var l = parseInt($("." + className).css("left"));
    var t = parseInt($("." + className).css("top"));
    bl = width / 1920;
    $("." + className).css({
        "width": w * bl,
        "height": h * bl,
        "left": l * bl,
        "top": t * bl
    })
}
var page = 1;
var adjustAuto = new Array();
var adjustAutoText = new Array();
$(document).ready(function (e) {
    //侧导航
    (function () {
        //导航特效 
        var navList = $(".epage");
		navList.mouseenter(function(){
			navList.eq($(this).index()).addClass("on").siblings().removeClass("on");
			navList.eq($(this).index()).find(".up_menu").slideDown();
		}).mouseleave(function(){
			navList.removeClass("on");
			navList.eq($(this).index()).find(".up_menu").slideUp("");
		});
    })();
    //关于我们
    
    (function () {
        var photoBtn = $("#page5 #new-photo .pageImg")
        var imgDialog = $("#page5 .imgDialog");
        var dialogImg = $("#page5 .imgDialog .imgbox");
        var imgtext = $("#page5 .imgDialog .imgbox .img-text");
        var index = $(this).index();
		var aboutNav = $("#page5 .about-nav div");
		var aboutCon = $("#page5 .about-con");
		aboutNav.click(function () {
			aboutCon.eq($(this).index()).addClass("show").siblings().removeClass("show");
		});
		aboutNav.mouseenter(function () {
			aboutNav.eq($(this).index()).addClass("on").siblings().removeClass("on");
			aboutCon.eq($(this).index()).addClass("show").siblings().removeClass("show");
		});
        for (let i = 0; i < photoBtn.length; i++) {
            photoBtn.eq(i).click(function () {
                imgDialog.eq(i).fadeIn("slow");
            });
        }
        imgDialog.click(function () {
            imgDialog.fadeOut("slow");
        });
        dialogImg.mouseenter(function () {
            imgtext.slideDown(1000);
        }).mouseleave(function () {
            imgtext.slideUp(1000);
        });
        imgtext.mouseenter(function () {
            imgtext.slideDown(1000);
        });
    })();
    //招聘
    (function () {
        var $next = $('#next'),
            $prev = $('#prev'),
            $ul = $('#job .show ul'),
            $li = $('#job .show ul li'),
            $wrap = $('#job'),
            clickTime = 0,
            timer = null,
            index = 0;
        $next.click(function () {
            if (new Date() - clickTime > 500) {
                clickTime = new Date();
                index++;
                $ul.stop().animate({
                    marginLeft: -420 * index + 'px'
                }, 500, function () {
                    if (index == 13) {
                        index = 12;
                    }
                });
            }
        });
        $prev.click(function () {
            if (new Date() - clickTime > 500) {
                clickTime = new Date();
                if (index == 0) {
                    index = 1;
                };
                index--;
                $ul.stop().animate({
                    marginLeft: index * -420 + 'px'
                }, 500);
            }
        });
    })();
    //当浏览器窗口大小改变时，设置显示内容的高度  
    window.onresize = function () {
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
        bl = width / 1920;
        adjustHeight();
        $(".indexPage").css({
            top: -(page - 1) * height
        });
    }
    document.onreadystatechange = subSomething;
    function subSomething() {
        if (document.readyState == "complete") {
            $("#jiazai").remove();
            bl = width / 1920;
            $("p").css({
                "margin-top": 10 * bl
            });
            $("p").css({
                "margin-bottom": 10 * bl
            });
        }
    }
   
    adjustHeight();
    function adjustHeight() {
        $("#indexDiv").css("height", height);
        $(".indexPage").css("height", height);
        $("#page6").css("height", height);
        var pageChoseHeight = parseInt($("#index_pageChose").css("height"));
        $("#index_pageChose").css("top", (height - pageChoseHeight) / 2)
    }
    function changePage() {
        $(".indexPage").animate({
            top: -(page - 1) * height
        }, 500);
        $(".pageChose").removeClass("on");
        $(".pageChose").find("span").removeClass("on");
        $("#" + page + "pageChose").addClass("on");
        $("#" + page + "pageChose").find("span").addClass("on");
    }
    function animateOutPage(num) {
        switch (num) {
            case 1:
                moveOutPage1();
                break;
            case 2:
                moveOutPage2();
                break;
            case 3:
                moveOutPage3();
                break;
            case 4:
                moveOutPage4();
                break;
            case 5:
                moveOutPage5();
                break;
            case 6:
                moveOutPage6();
                break
        }
    }
    function moveOutPage1() {
        setTimeout(function () {
            changePage()
        }, 500);
    }
    function moveOutPage2() {
        setTimeout(function () {
            changePage()
        }, 250);
    }

    function moveOutPage3() {
        setTimeout(function () {
            changePage()
        }, 250);
    }

    function moveOutPage4() {
        setTimeout(function () {
            changePage()
        }, 500)
    }

    function moveOutPage5() {
        setTimeout(function () {
            changePage()
        }, 500)
    }

    function moveOutPage6() {
        setTimeout(function () {
            changePage()
        }, 100)
    }
});
