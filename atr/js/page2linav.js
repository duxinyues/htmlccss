$(document).ready(function () {
//     $("#page2 ul .li-nav").click(function () {
//         $(this).addClass("cur").siblings().removeClass("cur");
//         $(".cont").eq($(this).index()).show().siblings(".cont").hide();
//         $(".list ul li").eq($(this).index()).addClass("on").siblings().removeClass("on");
//     });
    //第二页 鼠标滑过更换图片
    var $centerImg = $(".cont1 .culture img");
    for (let i = 0; i < $centerImg.length; i++) {
        $centerImg.eq(i).mouseenter(function () {
            $centerImg.eq(i).attr('src', "img/center" + (i + 1) + ".png");
        }).mouseleave(function () {
            $centerImg.eq(i).attr('src', "img/c" + (i + 1) + ".png");
        });
    }
})
