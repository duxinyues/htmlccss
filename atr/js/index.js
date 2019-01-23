$(function() {

					var c2_f = function() {

						var win_width = $(window).width();

						var wh_c2 = 390 / 1423;

						var w_c2_t = 1162 / 1423;

						if(win_width > 1300) {

							$(".c2").width(win_width);

							$(".c2").height(win_width * wh_c2);

							$(".c2_t").width(win_width * w_c2_t);

							$(".c2_t").height($(".c2").height() * (190 / 390));

							$(".c2_t").css({

								"padding": " 20px",

								"margin-top": win_width * wh_c2 * 166 / 390

							});

						} else {

							$(".c2").width(1300);

							$(".c2").height(1300 * wh_c2);

							$(".c2_t").width(1300 * w_c2_t);

							$(".c2_t").height($(".c2").height() * (190 / 390));

							$(".c2_t").css({

								"margin-top": 1300 * wh_c2 * 166 / 390

							});

						}

						return win_width;

					};

					c2_f();

					$(window).resize(function() {

						c2_f();

					});

					var page_width=$(".list_content .page").width();

					var page_margin=(840-page_width)/2+"px";

					$(".list_content .page").css("margin-left",page_margin);

					

					/* $(".cc1").mouseenter(function(){

						$(".cicle1").show().siblings().hide();

						$(".gzyl_p1").show().siblings().hide();

					});

					$(".cc2").mouseenter(function(){

						$(".cicle2").show().siblings().hide();

						$(".gzyl_p2").show().siblings().hide();

					});

					$(".cc3").mouseenter(function(){

						$(".cicle3").show().siblings().hide();

						$(".gzyl_p3").show().siblings().hide();

					});

					$(".cc4").mouseenter(function(){

						$(".cicle4").show().siblings().hide();

						$(".gzyl_p4").show().siblings().hide();

					});

					$(".cc5").mouseenter(function(){

						$(".cicle5").show().siblings().hide();

						$(".gzyl_p5").show().siblings().hide();

					}); */

					for(var n=1;n<6;n++){

						(function (j) {

							$('.cc'+j).hover(function () {

								$(".cicle"+j).show(200).siblings().hide();

								$(".gzyl_p"+j).show(200).siblings().hide();

								$(".gzyl_p"+j).css({"background":"rgba(1,169,170,.5)"});

							},function(){

								$(".cicle"+j).hide(200);

								$(".gzyl_p"+j).hide(200);

								$(".gzyl_p"+j).css({"background":"rgba(1,169,170,0)"});

							})

						})(n)

					}

					

				$(".totop").hide();

					$(".totop").click(function(){

						$('body,html').animate({scrollTop:0},500);

					});

					

				$(".xuanfukuang .exit").click(function(){

						$('.xuanfukuang').fadeOut();

				});

				

					

		})

				

				$(window).scroll(function(){

						if($(window).scrollTop()<600){

							$(".totop").fadeOut();

						}else{

							$(".totop").fadeIn();

						}

					})