
//图片效果
$(function(){
    var total=$('.tab_pic ul li').length;
    $('.tab_pic ul li').eq(0).addClass('on');
    $('.tab_txt ul li').eq(0).addClass('on');
    $('.tab_pic ul').width(total*340);
    $('.tab_txt ul').width(total*413);
    $('.next').click(function next(){
        var num=$('.tab_pic ul li').length;
        var index=$('.tab_pic ul li.on').index('.tab_pic ul li');
        var on=index+1<num?index+1:0;
        var pwidth=parseInt(on*340);
        var twidth=parseInt(on*413);
        $('.tab_pic ul li').eq(on).addClass('on').siblings().removeClass('on');
        $('.tab_pic ul').stop().animate({left: -pwidth}, "slow");
        $('.tab_txt ul li').eq(on).addClass('on').siblings().removeClass('on');
        $('.tab_txt ul').stop().animate({left: -twidth}, "slow");
    });
    $('.prev').click(function(){
        var num=$('.tab_pic ul li').length;
        var index=$('.tab_pic ul li.on').index('.tab_pic ul li');
        var on=index==0?num-1:index-1;
        var pwidth=parseInt(on*340);
        var twidth=parseInt(on*413);
        $('.tab_pic ul li').eq(on).addClass('on').siblings().removeClass('on');
        $('.tab_pic ul').stop().animate({left: -pwidth}, "slow");
        $('.tab_txt ul li').eq(on).addClass('on').siblings().removeClass('on');
        $('.tab_txt ul').stop().animate({left: -twidth}, "slow");
    });
    setInterval(function(){$('.next').trigger('click')},3000);
})


//滚动
var t = getid("demo"),
    t1 = getid("demo1"),
    t2 = getid("demo2"),
    sh = getid("show"),
    timer;
t2.innerHTML = t1.innerHTML;

function mar() {
    if (t2.offsetTop <= t.scrollTop)
        t.scrollTop -= t1.offsetHeight;
    else
        t.scrollTop++;
}
timer = setInterval(mar, 30);

function getid(id) {
    return document.getElementById(id);
}
