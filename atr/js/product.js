$(document).ready(function(){
		(function () {
	        var $next = $('.next'),
	            $prev = $('.prev'),
	            $ul = $('.show ul'),
	            $li = $('.show ul li'),
	            $wrap = $('.product-con'),
	            clickTime = 0,
	            timer = null,
	            index = 0,
				sdwidth;
				if (width == 1920) {
					sdwidth = 420;
				} else if (width == 1366) {
					sdwidth = 275;
				} else if (width == 1440) {
					sdwidth = 289;
				} else if (width == 1680) {
					sdwidth = 351;
				}
	        $next.click(function () {
	            if (new Date() - clickTime > 500) {
	                clickTime = new Date();
	                index++;
	                $ul.stop().animate({
	                    marginLeft: -sdwidth * index + 'px'
	                }, 500, function () {
	                    if (index == 6) {
	                        index = 5;
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
	                    marginLeft: index * -sdwidth + 'px'
	                }, 500);
	            }
	        });
	    })();
});
