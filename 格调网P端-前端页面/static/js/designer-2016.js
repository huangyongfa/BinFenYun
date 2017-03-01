/**
 *common JS
 *Created time: 2016-03-23
 *Author: zh.c
 *Modified time: 
 *Modified by: 
 */

$(function() {
    //搜索
	
	
	/*设计师_作品管理_上传效果图 关联DIY商品清单 tab切换*/
	$(".user-plan-title .upimg").on("click",function(){
		$(this).next("input.hidefile").click();
	})
	
	/*设计师_作品管理_上传效果图 关联DIY商品清单 tab切换*/
	$(".cognate-title-tab li").on("click",function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$(this).parent().next(".cognate-switch-tab").find(".cognate-switch-tab-style").eq($(this).index()).addClass("show").siblings().removeClass("show");
	})
})
