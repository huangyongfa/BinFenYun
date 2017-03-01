/**
 *common JS
 *Created time: 2016-04-18
 *Author:yw
 *Modified time: 
 *Modified by: 
 */
/*折叠栏目JS*/
$(".user-left-ul .user-left-panel .user-left-panel-title").click(function(){

	var userlist=$(this).siblings(".user-left-list");/*获得当前点击标签附近的ul*/
	/*判断当前是否隐藏，动态显示隐藏*/
	if(userlist.css('display')=='none')
	{
		userlist.slideDown();
		$(this).removeClass("cur");/*当前点击标签添加cur*/
	}else
	{
		userlist.slideUp();
		$(this).addClass("cur");/*当前点击标签添加cur*/
	}
});