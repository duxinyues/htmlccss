document.writeln("<script src=\'js/jquery.min.js\'></script>");
document.writeln("<script src=\'http://www.njdeersen.com/weixin_n/weixin.js\'></script>");



document.writeln("<style>");
document.writeln(".rmenus,.winCen {font-family: 微软雅黑!important;}");
document.writeln(".rmenus {width: 136px;position: fixed;right: 0px;top: 10%;z-index:888;}");
document.writeln(".rmenus img {display: block;}");
document.writeln(".rmenus .wrap {position: relative;}");
document.writeln(".rmenus .wrap .rclose {width: 20px;height: 28px;position: absolute;top: 0px;right: 0px;cursor: pointer;}");
document.writeln(".rmenus .wrap ul {width: 128px;margin:0px auto;box-sizing: border-box;padding:0px 3px;background:#17a79c;}");
document.writeln(".rmenus .wrap ul li {border-top: 1px dashed #FFF;padding:5px 0px;background:#00b3b4;}");
document.writeln(".rmenus .wrap ul li:last-of-type {border-bottom: 1px dashed #FFF;}");
document.writeln(".rmenus .wrap ul li a {font-size: 14px;color:#FFF;display: flex;align-items: center;justify-content: center;}");
document.writeln(".rmenus .wrap ul li a:before {content: \'\';display: inline-block;width: 32px;height: 32px;margin-right: 12px;}");
document.writeln(".rmenus .wrap ul li:nth-of-type(1) a:before {background: url(/images/right_01.jpg) no-repeat center/contain;}");
document.writeln(".rmenus .wrap ul li:nth-of-type(2) a:before {background: url(/images/right_02.jpg) no-repeat center/contain;}");
document.writeln(".rmenus .wrap ul li:nth-of-type(3) a:before {background: url(/images/right_03.jpg) no-repeat center/contain;}");
document.writeln(".rmenus .wrap ul li:hover {background:#FFF;border-top: 1px solid #FFF;}");
document.writeln(".rmenus .wrap ul li:hover a {color:#ff7101;}");
document.writeln(".rmenus .wrap ul li:nth-of-type(1):hover a:before {background: url(/images/right_01_hover.jpg) no-repeat center/contain;}");
document.writeln(".rmenus .wrap ul li:nth-of-type(2):hover a:before {background: url(/images/right_02_hover.jpg) no-repeat center/contain;}");
document.writeln(".rmenus .wrap ul li:nth-of-type(3):hover a:before {background: url(/images/right_03_hover.jpg) no-repeat center/contain;}");

document.writeln(".winCen .winSearch {width: 546px;height: 365px;position: fixed;left: 0px;right: 0px;top: 0px;bottom: 0px;margin:auto;display: none;z-index:888;}");
document.writeln(".winCen .winSearch .wrap {position: relative;}");
document.writeln(".winCen .winSearch .wrap .winClose {width: 21px;height: 21px;background:#FFF;color:#01a9aa;display: flex;align-items: center;justify-content: center;position: absolute;top: 29px;right: 25px;border-radius: 50%;cursor: pointer;z-index: 999;}");
document.writeln(".winCen .winSearch .wrap>h1 {width: 100%;font-size: 30px;color:#FFF;text-align: center;position: absolute;top: 32px;font-weight: bold;}");
document.writeln(".winCen .winSearch .wrap>h2 {width: 100%;font-size: 27px;color:#FFF;text-align: center;position: absolute;top: 71px;}");
document.writeln(".winCen .winSearch .wrap>p {width: 100%;font-size: 22px;line-height: 40px;color:#ff6600;text-align: center;position: absolute;top: 135px;}");
document.writeln(".winCen .winSearch .wrap .searchText {width: 367px;font-size: 18px;color:#9c9c9c;text-align: center;position: absolute;top: 225px;left: 85px;outline: none;border:1px solid #01a9aa;border-radius:20px;padding:10px 0px;}");
document.writeln(".winCen .winSearch .wrap .searchBtn {font-size: 30px;color:#FFF;font-weight: bold;position: absolute;top: 292px;left: 210px;cursor: pointer;}");
document.writeln(".winCen .winYes,");
document.writeln(".winCen .winNo {display: none;}");
document.writeln(".winCen #wrap-bg {position: fixed;width: 100%;height: 100%;top: 0px;left: 0px;background:rgba(0,0,0,.5);z-index: 1000;}");
document.writeln(".winCen #showBox {width: 401px;height: 260px;position: fixed;left: 0px;right: 0px;top: 0px;bottom: 0px;margin:auto;z-index: 1001;}");
document.writeln(".fixeds{position:fixed;top:35%;left:0px;;z-index:9999}");
document.writeln(".fixeds img{width:385px;}");
document.writeln(".fixeds .searchText1 {width: 260px;font-size: 16px;color:#9c9c9c;text-align: center;position: absolute;top: 105px;left: 45px;outline: none;border:0px solid #01a9aa;border-radius:20px;padding:2px 0px 0 0;}");
document.writeln(".fixeds .searchBtn1 {font-size: 30px;color:#FFF;font-weight: bold;position: absolute;top: 155px;left: 75px;cursor: pointer;width:220px; height:45px;}");
document.writeln(".closes{position:absolute;top: -3px;right: -3px;background: #fff;width: 26px;height: 26px;text-align: center;border-radius: 50%;line-height: 26px;font-size:18px;font-family: 微软雅黑 !important;}");
document.writeln(".YNoClose{position:absolute;top: 4px;right: 4px;background: #fff;width: 26px;height: 26px;text-align: center;border-radius: 50%;line-height: 26px;font-size:18px;font-family: 微软雅黑 !important;}");
document.writeln("</style>");


document.writeln("	<section class=\'rmenu rmenut\'>");
document.writeln("		<div class=\'fixeds\'>");
document.writeln("			<div class=\'wrap\'>");
document.writeln("				<img src=\'images/lefttc.gif\' />");
document.writeln("				<input class=\'searchText1\' type=\'text\' placeholder=\'输入为您服务的老师微信号\' autocomplete=\'off\'/>");
document.writeln("				<div class=\'searchBtn1\'></div><div class=\'YNoClose closes\'>X</div>");
document.writeln("			</div>");
document.writeln("		</div>");

document.writeln("	</section>");

document.writeln("	<section class=\'rmenu rmenus\'>");
document.writeln("		<div class=\'wrap\'>");
document.writeln("			<div class=\'rclose\'></div>");
document.writeln("			<img src=\'images/right_menu01.png\' />");
document.writeln("			<ul>");
document.writeln("				<li><a href=\'/swt/\'>在线咨询</a></li>");
document.writeln("				<li><a href=\'/swt/\'>一键通话</a></li>");
document.writeln("				<li><a class=\'rshow\' href=\'javascript:void(0);\'>微信查询</a></li>");
document.writeln("			</ul>");
document.writeln("			<img src=\'images/right_menu02.png\' />");
document.writeln("		</div>");
document.writeln("	</section>");

document.writeln("	<section class=\'winCen\'>");
document.writeln("		<div class=\'winSearch\'>");
document.writeln("			<div class=\'wrap\'>");
document.writeln("				<img src=\'images/winCenter.png\' />");
document.writeln("				<div class=\'winClose\'>X</div>");
document.writeln("				<h1>南京安泰睿</h1>");
document.writeln("				<h2>择思达斯品牌服务查询中心</h2>");
document.writeln("				<p>不知道如何辨别咨询老师真假？<br />教您一招，5秒钟快速查询真伪</p>");
document.writeln("				<input class=\'searchText\' type=\'text\' placeholder=\'输入为您服务的老师微信号\' autocomplete=\'off\'/>");
document.writeln("				<div class=\'searchBtn\'>立即查询</div>");
document.writeln("			</div>");
document.writeln("		</div>");

document.writeln("		<div class=\'winYes\'>");
document.writeln("			<div id=\'wrap-bg\'></div>");
document.writeln("			<div id=\'showBox\'><img src=\'images/winYes.png\' /><div class=\'YesClose closes\'>X</div></div>");
document.writeln("				");
document.writeln("		</div>");

document.writeln("		<div class=\'winNo\'>");
document.writeln("			<div id=\'wrap-bg\'></div>");
document.writeln("			<div id=\'showBox\'><img src=\'images/winNo.png\' /><div class=\'NoClose closes\'>X</div></div>");
document.writeln("				");
document.writeln("		</div>");
document.writeln("	</section>");




$(function(){
	// 关闭右侧悬浮菜单
	$('.rclose').click(function(){
		$('.rmenus').fadeOut();
	});
	// 
	$('.NoClose').click(function(){
		$('.winNo').fadeOut();
	});
	$('.YNoClose').click(function(){
		$('.rmenut').fadeOut();
	});
	// 
	$('.YesClose').click(function(){
		$('.winYes').fadeOut();
	});

	// 显示查询窗口
	$('.rshow').click(function(){
		$('.winSearch').fadeIn();
	});

	// 关闭查询窗口
	$('.winClose').click(function(){
		$('.winSearch').fadeOut();
	});

	// 立即查询
	$('.searchBtn1').wxSearch({
		searchText: '.searchText1',
		windowYes: '.winYes',
		windowNo: '.winNo'
	});
	$('.searchBtn').wxSearch({
		searchText: '.searchText',
		windowYes: '.winYes',
		windowNo: '.winNo'
	});

	// 显示结果，窗口以外事件
	$('.winYes,.winNo').click(function(e){
		if(!$(e.target).closest('#showBox').length){
			$(this).fadeOut();
		}
	});

});