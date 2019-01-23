$(document).ready(function () {
    (function () {
        jq('#timeLine').banqh({
            pic: "#ban_pic1", //大图框架
            pnum: "#ban_num1", //小图框架
            prev_btn: "#prev_btn1", //小图左箭头
            next_btn: "#next_btn1", //小图右箭头
            interTime: 5000, //图片自动切换间隔
            delayTime: 800, //切换一张图片时间
            pop_delayTime: 800, //弹出框切换一张图片时间
            order: 0, //当前显示的图片（从0开始）
            picdire: true, //大图滚动方向（true为水平方向滚动）
            mindire: true, //小图滚动方向（true为水平方向滚动）
            min_picnum: 5, //小图显示数量
            pop_up: true //大图是否有弹出框
        });
        $(".prev_btn1").mouseenter(function () {
            $(".prev_btn1").find("img").attr('src', "img/youf.png");
        }).mouseleave(function () {
            $(".prev_btn1").find("img").attr('src', "img/left.png");
        });
        $(".next_btn1").mouseenter(function () {
            $(".next_btn1").find("img").attr('src', "img/zuof.png");
        }).mouseleave(function () {
            $(".next_btn1").find("img").attr('src', "img/right.png");
        });
    })();
});
