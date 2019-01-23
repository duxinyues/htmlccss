$(document).ready(function () {
    (function () {
            var left = $('#page2 .cont .lishi-con .lft'),
                right = $('#page2 .cont .lishi-con .rght'),
                $ul = $('#page2 .cont .lishi-con .show ul'),
                $li = $('#page2 .cont .lishi-con .show ul li'),
                $wrap = $('#page2 .cont .lishi-con'),
                xbtn = $("#page2 .cont .lishi-con .xbtn"),
                clickTime = 0,
                timer = null,
                index = 0;
            left.click(function () {
                if (new Date() - clickTime > 500) {
                    if (index == 1) index = 0;
                    $ul.stop().animate({
                        marginLeft: 1330 * index + 'px'
                    }, 500);
                }
            });
            right.click(function () {
                if (new Date() - clickTime > 500) {
    
                    if (index == 0) {
                        index = 1;
                    };
                    $ul.stop().animate({
                        marginLeft: index * -1330 + 'px'
                    }, 500);
                }
            });
        })();
})
