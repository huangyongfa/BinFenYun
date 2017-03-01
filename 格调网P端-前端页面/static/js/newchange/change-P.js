/**
 * Created by Administrator on 2016/9/7.
 */
/*******设计师——作品管理——管理效果图-切换********/
$('.public-switch-tab>div>div>span').click(function () {
    $(this).addClass('cur').siblings('span').removeClass('cur');
});
$('.planlabel span').click(function(){
    if($(this).hasClass('planlabel-active'))$(this).removeClass('planlabel-active')
    else $(this).addClass('planlabel-active');

});


//公告滚动效果
$(function () {
    var settime;

    $(".scrollNews").hover(function () {
        clearInterval(settime);
    }, function () {
        settime = setInterval(function () {
            if( $(".scrollNews ul li").length>3) {
                var $first = $(".scrollNews ul");     //选取div下的第一个ul 而不是li；
                var height = $first.find("li:first").height();      //获取第一个li的高度，为ul向上移动做准备；
                $(".scrollNews ul li:first").animate({"marginTop": (-height - 10) + "px"}, 500, function () {
                    $(".scrollNews ul li:first").css({marginTop: 0}).appendTo($first); //设置上边距为零，为了下一次移动做准备
                });
            }else{
                clearInterval(settime);
            }
        }, 2000);
    }).trigger("mouseleave");       //trigger()方法的作用是触发被选元素的制定事件类型
});
$(function () {
    var settime2;
    $(".scrollNews-2").hover(function () {
        clearInterval(settime2);
    }, function () {
        settime2 = setInterval(function () {
            if( $(".scrollNews-2 ul li").length>3) {
                var $first = $(".scrollNews-2 ul");     //选取div下的第一个ul 而不是li；
                var height = $first.find("li:first").height();      //获取第一个li的高度，为ul向上移动做准备；
                $(".scrollNews-2 ul li:first").animate({"marginTop": (-height - 10) + "px"}, 600, function () {
                    $(".scrollNews-2 ul li:first").css({marginTop: 0}).appendTo($first); //设置上边距为零，为了下一次移动做准备
                })
            }else{
                clearInterval(settime2);
            }
        }, 3000);
    }).trigger("mouseleave");       //trigger()方法的作用是触发被选元素的制定事件类型
});

//抢单成功  招标成功
$('.tender-design-screen-hand-list-click-1 .screen-hand').click(function () {
    $(this).removeClass('screen-hand').addClass('screen-end').text('已抢单');
   // $('.tender-design-screen-hand-list-click-1').append(' <div class="tender-design-screen-hand-list-click-1-div"> <img src="static/images/img/images/sy_43.jpg" alt=""><span>抢单成功！</span></div>');
    $('.tender-design-screen-hand-list-click-1-div').animate({'opacity':'1'},1000).show();
    aa();
});
$('.tender-design-screen-hand-list-click-2 .screen-hand').click(function () {
    $(this).removeClass('screen-hand').addClass('screen-end').text('已投标');
    // $('.tender-design-screen-hand-list-click-1').append(' <div class="tender-design-screen-hand-list-click-1-div"> <img src="static/images/img/images/sy_43.jpg" alt=""><span>抢单成功！</span></div>');
    $('.tender-design-screen-hand-list-click-1-div-2').animate({'opacity':'1'},1000).show();
    aa();
});
function aa(){
    setTimeout("bb()",3000);

}
function bb(){
    $(".tender-design-screen-hand-list-click-1-div").hide().css('opacity','0');
    $(".tender-design-screen-hand-list-click-1-div-2").hide().css('opacity','0');

}

//切换
$('.sy-tribune-top p a').click(function (e) {
    e.preventDefault();
    $(this).addClass('sy-tribune-top-active').siblings().removeClass('sy-tribune-top-active');
    if($(this).index()==0){
        $('.sy-tribune div:nth-child(2)').show().siblings('.sy-tribune-center').hide();
    }else{
        $('.sy-tribune div:nth-child(3)').show().siblings('.sy-tribune-center').hide();
    }
});

//ainimate动画
// $('.sy-tribune-center img').hover(function () {
//         $(this).siblings('div').animate({'height':'181px','opacity':'0.5'},500);
//         $(this).siblings('b').animate({'opacity':'1','transform':'rotate(50deg)'},500);
//         $(this).siblings('span').animate({'backgroundColor':'transparent'})
// },function () {
//     $(this).siblings('div').animate({'height':'0px'},500)
//     $(this).siblings('b').animate({'opacity':'0'},500)
// });

//
$(function(){
    var $banner=$('.banner');
    var $banner_ul=$('.banner-img');
    var $btn=$('.banner-btn');
    var $btn_a=$btn.find('a')
    var v_width=$banner.width();

    var page=1;

    var timer=null;
    var btnClass=null;

    var page_count=$banner_ul.find('li').length;//把这个值赋给小圆点的个数

    var banner_cir="<li class='selected'><a href='#'></a></li>";
    for(var i=1;i<page_count;i++){
        //动态添加小圆点
        banner_cir+="<li><a href='#'></a></li>";
    }
    $('.banner-circle').append(banner_cir);

    var cirLeft=$('.banner-circle').width()*(-0.5);
    $('.banner-circle').css({'marginLeft':cirLeft});

    $banner_ul.width(page_count*v_width);

    function move(obj,classname){
        //手动及自动播放
        if(!$banner_ul.is(':animated')){
            if(classname=='prevBtn'){
                if(page==1){
                    $banner_ul.animate({left:-v_width*(page_count-1)});
                    page=page_count;
                    cirMove();
                }
                else{
                    $banner_ul.animate({left:'+='+v_width},"slow");
                    page--;
                    cirMove();
                }
            }
            else{
                if(page==page_count){
                    $banner_ul.animate({left:0});
                    page=1;
                    cirMove();
                }
                else{
                    $banner_ul.animate({left:'-='+v_width},"slow");
                    page++;
                    cirMove();
                }
            }
        }
    }

    function cirMove(){
        //检测page的值，使当前的page与selected的小圆点一致
        $('.banner-circle li').eq(page-1).addClass('selected')
            .siblings().removeClass('selected');
    }

    $banner.mouseover(function(){
        $btn.css({'display':'block'});
        clearInterval(timer);
    }).mouseout(function(){
        $btn.css({'display':'none'});
        clearInterval(timer);
        timer=setInterval(move,3000);
    }).trigger("mouseout");//激活自动播放

    $btn_a.mouseover(function(){
        //实现透明渐变，阻止冒泡
        $(this).animate({opacity:0.6},'fast');
        $btn.css({'display':'block'});
        return false;
    }).mouseleave(function(){
        $(this).animate({opacity:0.3},'fast');
        $btn.css({'display':'none'});
        return false;
    }).click(function(){
        //手动点击清除计时器
        btnClass=this.className;
        clearInterval(timer);
        timer=setInterval(move,3000);
        move($(this),this.className);
    });

    $('.banner-circle li').on('click',function(e){
        e.preventDefault();
        var index=$('.banner-circle li').index(this);
        $banner_ul.animate({left:-v_width*index},'slow');
        page=index+1;
        cirMove();
    });
});


//户型图点击
//$('.house-screen tr .td3 span').click(function () {
//        $(this).toggleClass('house-screen-span');
//});
//$('.model-screen tr .td3 span').click(function () {
//    $(this).toggleClass('house-screen-span');
//});
//$(".model-screen .td4 span").on("click",function(){
//    $(this).toggleClass("house-screen-span");
//});
$('.nav-top-l a').click(function(e){
    e.preventDefault();
    $(this).addClass('nav-top-l-a-active').siblings().removeClass('nav-top-l-a-active');
    //console.log($(this).hasClass('nav-top-l-a1'));
    if($(this).text()=='贴图素材'){
        $('.first-active').hide();
        $('.last-active').show();
        $('.nav-top-r-span2').text('贴图素材')
    }else{
        $('.first-active').show();
        $('.last-active').hide();
        $('.nav-top-r-span2').text('3D模型')
    }
});

/*添加合作商*/
$(".user-right .partner").click(function() {
    layer.open({
        type: 1,
        title: ['添加成员', 'font-size:18px;'],
        shade: .5,
        shift: 2,
        move: false,
        area: ["850px", '320px'],
        content: $(".append-partner")
    })
});

$('.partner-table td a:first-child').click(function(e){
    e.preventDefault();
   $(this).parents('tr').remove();
});
