/**
 *common JS
 *Created time: 2016-03-23
 *Author: zh.c
 *Modified time: 
 *Modified by: 
 */

$(function() {
    //搜索

    //导航    
    $("#J_mainNav > li").hover(function() {
        $(this).addClass("hasSubMenu").find(".mainNav-item-subMenu").before($('<div class="mask"></div>'));
    }, function() {
        $(this).removeClass("hasSubMenu").children('.mask').remove();
    });
    $("#J_mainNav .mainNav-item-subMenu li:nth-last-child(1)").css("border-bottom", "none");
	$(".site-top-search-select a").hover(function() {
		$(this).find(".downlist").show();
	}, function() {
		$(this).find(".downlist").hide();
	});
	$(".site-top-user div").hover(function() {
		$(this).find(".downlist").show();
	}, function() {
		$(this).find(".downlist").hide();
	});
	
	 $(".site-top-search-select li").click(function() {
		$(".site-top-search-select span").html($(this).text());
	 })
	
	// 公共弹窗
    $("#public").click(function() {
        var popWidth = 400; //弹框宽度
        var $select = $(".public-box");
        layer.open({
            type: 1,
            shade: .5,
            title: false,
            closeBtn: 0,
            shadeClose: true,
            area: [popWidth + 'px'],
            content: $select,
            success: function(layero, index) {
                $select.find(".btn-close").one("click", function() {
                        layer.close(index);
                    })
            }
        });
    })
	
	
	/*公用tab切换*/
	$(".public-title-tab li").on("click",function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$(this).parent().next(".public-switch-tab").find(".public-switch-tab-style").eq($(this).index()).addClass("show").siblings().removeClass("show");
	});
	
	/*tab切换*/
	$(".tender-design-title-ul li").on("click",function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$(this).parents(".tender-design-title").next().find("div.tender-design-screen-style").eq($(this).index()).addClass("show").siblings().removeClass("show");
	});
	
	/*首页查看更多*/
	$("#Index_pro_more").on("click",function(){
		$("#Index_pro_list").toggleClass("index-pro-default");	
	})
	
	/*全选反选check*/
	$("#AllCheck").on("click",function(){
		if(this.checked){
				$(".check-list input[name='subBox']").prop('checked', true)
			}else{
				$(".check-list input[name='subBox']").prop('checked', false)
			}
	})
	/*分页选择*/
	$(".paging").on("click","a.num",function(){
		$(this).addClass("current").siblings().removeClass("current");
	})
})
