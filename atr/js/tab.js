
var jq = $.noConflict();
//ban_qh
jq.fn.banqh = function(can){
	can = jq.extend({
					box:null,
					pic:null,
					pnum:null,
					prev_btn:null,
					next_btn:null,
					prev:null,
					next:null,
					pop_prev:null,
					pop_next:null,
					autoplay:false,
					interTime:5000,
					delayTime:800,
					pop_delayTime:800,
					order:0,
					picdire:true,
					mindire:true,
					min_picnum:null,
					pop_up:false,
					pop_div:null,
					pop_pic:null,
					pop_xx:null,
					mhc:null
				}, can || {});
	var picnum = jq(can.pic).find('ul li').length;
	var picw = jq(can.pic).find('ul li').outerWidth(true);
	var pich = jq(can.pic).find('ul li').outerHeight(true);
	var poppicw = jq(can.pop_pic).find('ul li').outerWidth(true);
	var picminnum = jq(can.pnum).find('ul li').length;
	var picpopnum = jq(can.pop_pic).find('ul li').length;
	var picminw = jq(can.pnum).find('ul li').outerWidth(true);
	var picminh = jq(can.pnum).find('ul li').outerHeight(true);
	var pictime;
	var tpqhnum=0;
	var xtqhnum=0;
	var popnum=0;
	jq(can.pic).find('ul').width(picnum*picw).height(picnum*pich);
	jq(can.pnum).find('ul').width(picminnum*picminw).height(picminnum*picminh);
	jq(can.pop_pic).find('ul').width(picpopnum*poppicw);
	
//鐐瑰嚮灏忓浘鍒囨崲澶у浘
	    jq(can.pnum).find('li').click(function () {
        tpqhnum = xtqhnum = jq(can.pnum).find('li').index(this);
        show(tpqhnum);
		minshow(xtqhnum);
    }).eq(can.order).trigger("click");
//澶у浘寮瑰嚭妗�
if(can.pop_up==true){
	jq(can.pic).find('ul li').click(function(){
		jq(can.mhc).height(jq(document).height()).show();
		jq(can.pop_div).show();
		popnum = jq(this).index();
		var gdjl_w=-popnum*poppicw;
		jq(can.pop_pic).find('ul').css('left',gdjl_w);
		popshow(popnum);
		})
	jq(can.pop_xx).click(function(){
		jq(can.mhc).hide();
		jq(can.pop_div).hide();
	})
}

	if(can.autoplay==true){
//鑷姩鎾斁
		pictime = setInterval(function(){
			show(tpqhnum);
			minshow(tpqhnum)
			tpqhnum++;
			xtqhnum++;
			if(tpqhnum==picnum){tpqhnum=0};	
			if(xtqhnum==picminnum){xtqhnum=0};
					
		},can.interTime);	
		
//榧犳爣缁忚繃鍋滄鎾斁
		jq(can.box).hover(function(){
			clearInterval(pictime);
		},function(){
			pictime = setInterval(function(){
				show(tpqhnum);
				minshow(tpqhnum)
				tpqhnum++;
				xtqhnum++;
				if(tpqhnum==picnum){tpqhnum=0};	
				if(xtqhnum==picminnum){xtqhnum=0};		
				},can.interTime);			
			});
	}
//灏忓浘宸﹀彸鍒囨崲			
	jq(can.prev_btn).click(function(){
		if(tpqhnum==0){tpqhnum=picnum};
		if(xtqhnum==0){xtqhnum=picnum};
		xtqhnum--;
		tpqhnum--;
		show(tpqhnum);
		minshow(xtqhnum);	
		})
	jq(can.next_btn).click(function(){
		if(tpqhnum==picnum-1){tpqhnum=-1};
		if(xtqhnum==picminnum-1){xtqhnum=-1};
		xtqhnum++;
		minshow(xtqhnum)
		tpqhnum++;
		show(tpqhnum);
		})	
//澶у浘宸﹀彸鍒囨崲	
	jq(can.prev).click(function(){
		if(tpqhnum==0){tpqhnum=picnum};
		if(xtqhnum==0){xtqhnum=picnum};
		xtqhnum--;
		tpqhnum--;
		show(tpqhnum);
		minshow(xtqhnum);	
		})
	jq(can.next).click(function(){
		if(tpqhnum==picnum-1){tpqhnum=-1};
		if(xtqhnum==picminnum-1){xtqhnum=-1};
		xtqhnum++;
		minshow(xtqhnum)
		tpqhnum++;
		show(tpqhnum);
		})
//寮瑰嚭妗嗗浘鐗囧乏鍙冲垏鎹�	
	jq(can.pop_prev).click(function(){
		if(popnum==0){popnum=picnum};
		popnum--;
		popshow(popnum);
		})
	jq(can.pop_next).click(function(){
		if(popnum==picnum-1){popnum=-1};
		popnum++;
		popshow(popnum);
		})			
//灏忓浘鍒囨崲杩囩▼
	function minshow(xtqhnum){
		var mingdjl_num =xtqhnum-can.min_picnum+2
		var mingdjl_w=-mingdjl_num*picminw;
		var mingdjl_h=-mingdjl_num*picminh;
		
		if(can.mindire==true){
			jq(can.pnum).find('ul li').css('float','left');
			if(picminnum>can.min_picnum){
				if(xtqhnum<3){mingdjl_w=0;}
				if(xtqhnum==picminnum-1){mingdjl_w=-(mingdjl_num-1)*picminw;}
				jq(can.pnum).find('ul').stop().animate({'left':mingdjl_w},can.delayTime);
				}
				
		}else{
			jq(can.pnum).find('ul li').css('float','none');
			if(picminnum>can.min_picnum){
				if(xtqhnum<3){mingdjl_h=0;}
				if(xtqhnum==picminnum-1){mingdjl_h=-(mingdjl_num-1)*picminh;}
				jq(can.pnum).find('ul').stop().animate({'top':mingdjl_h},can.delayTime);
				}
			}
		
	}
//澶у浘鍒囨崲杩囩▼
		function show(tpqhnum){
			var gdjl_w=-tpqhnum*picw;
			var gdjl_h=-tpqhnum*pich;
			if(can.picdire==true){
				jq(can.pic).find('ul li').css('float','left');
				jq(can.pic).find('ul').stop().animate({'left':gdjl_w},can.delayTime);
				}else{
			jq(can.pic).find('ul').stop().animate({'top':gdjl_h},can.delayTime);
			}//婊氬姩
			//jq(can.pic).find('ul li').eq(tpqhnum).fadeIn(can.delayTime).siblings('li').fadeOut(can.delayTime);//娣″叆娣″嚭
			jq(can.pnum).find('li').eq(tpqhnum).addClass("on").siblings(this).removeClass("on");
		};
//寮瑰嚭妗嗗浘鐗囧垏鎹㈣繃绋�
		function popshow(popnum){
			var gdjl_w=-popnum*poppicw;
				jq(can.pop_pic).find('ul').stop().animate({'left':gdjl_w},can.pop_delayTime);
			//jq(can.pop_pic).find('ul li').eq(tpqhnum).fadeIn(can.pop_delayTime).siblings('li').fadeOut(can.pop_delayTime);//娣″叆娣″嚭
		};					
				
}