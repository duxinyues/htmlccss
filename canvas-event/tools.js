//获取鼠标位置的函数封装
//把tools定义为windows对象的属性,该属性的值是一个对象

window.tools = {};

//获取鼠标的位置
window.tools.getMouse = function (element) {
    //定义一个mouse的对象
    var mouse = { x: 0, y: 0 };

    //给传入的元素添加mousemove 事件
    addEvent(element, "mousemove", function(e) {
        var x, y;
        //在IE中，event对象是作为window对象的一个属性存在的
        var e = e || window.event;
        //获取鼠标当前的位置，并做兼容处理
        if (e.pageX || e.pageY) {
            x = e.pageX;
            y = e.pageY;
        } else {
            x = e.clientX + document.body.scrollLeft || document.documentElement.scrollLeft;
            y = e.clinetY + document.body.scrollTop || document.documentElement.scrollTop;
        }
        //当前鼠标的坐标减去Canvas元素的偏移位置，则x,y为鼠标在Canvas中的相对坐标
        x -= element.offsetLeft;
        y -= element.offsetTop;

        mouse.x = x;
        mouse.y = y;
    })
    //返回mouse对象
    return mouse
}
function addEvent(obj, type, handle) {
    try {  // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
        obj.addEventListener(type, handle, false);
    } catch (e) {
        try {  // IE8.0及其以下版本
            obj.attachEvent('on' + type, handle);
        } catch (e) {  // 早期浏览器
            obj['on' + type] = handle;
        }
    }
}

//获取按键的keyCode

window.tools.getKey = function(){
    var key = {};

    window.addEventListener("keydown",function(e){
        if (e.keyCode == 38 || e.keyCode == 87) {
            key.direction = "up";
        }else if(e.keyCode == 39 || e.keyCode == 68){
            key.direction = "right";
        }else if (e.keyCode == 40 || e.keyCode == 83) {
            key.direction = "down";
        }else if(e.keyCode == 37 || e.keyCode == +65){
            key.direction = "left";
        }else{
            key.direction = "";
        }
    },false);
    return key
}