/**
 *common JS
 *Created time: 2016-03-23
 *Author: zh.c
 *Modified time: 
 *Modified by: 
 */

$(function() {
	$(".site-top-user div").hover(function() {
		$(this).find(".downlist").show();
	}, function() {
		$(this).find(".downlist").hide();
	});
	 $(".site-top-search-select li").click(function() {
		$(".site-top-search-select span").html($(this).text());
	 })
	$(".tender-infor-list .screen-hand").on("click",function(){
		$(".tender-infor-list li .screen-popup").remove();
		$(this).parents("span").append('<div class="screen-popup">其保证金等级不足，不满足投标资格。满足所有条件则提示投标成功。</div>');
	})
	
	/*点击全选反选*/
		$("#checkall").on("click",function(){
			if(this.checked)
			{
				$("input[name='checkname']").each(function() {
                    this.checked=true;
                });
			}else
			{
				$("input[name='checkname']").each(function() {
                    this.checked=false;
                });
			}
		})
	
	/*清除帖子内容*/
	$("#P_Section_Card_Clear").on("click",function(){
		$(".txt-section-mes").val("");
	})
	
	// 回复
    $("#P_Forum_section_reply").click(function() {
        var popWidth = 600; //弹框宽度
        var $select = $(".forum-detail-reply");
        layer.open({
            type: 1,
            shade: .5,
            title: false,
            closeBtn: 0,
            shadeClose: true,
            area: [popWidth + 'px'],
            content: $select,
            success: function(layero, index) {
                $select.find(".close").one("click", function() {
                        layer.close(index);
                    })
				 $select.find(".show-close").one("click", function() {
                        layer.close(index);
                    })
            }
        });
    })
	
	// 举报
    $(".detail-infor-time > a").click(function() {
        var popWidth = 300; //弹框宽度
        var $select = $(".forum-detail-report");
        layer.open({
            type: 1,
            shade: .5,
            title: false,
            closeBtn: 0,
            shadeClose: true,
            area: [popWidth + 'px'],
            content: $select,
            success: function(layero, index) {
                $select.find(".close").one("click", function() {
                        layer.close(index);
                    })
				 $select.find(".show-close").one("click", function() {
                        layer.close(index);
                    })
            }
        });
    })
	
	/*发帖*/
	$("#P_Forum_section_issued").click(function() {
		if($("#P_Forum_section_title").val()==""||$("#P_Forum_section_title").val()==null)
		{
			layer.msg('请填写标题');
			return flase;
		}
		if($("#P_Forum_section_txt").val()==""||$("#P_Forum_section_txt").val()==null)
		{
			layer.msg('请填写内容');
			return flase;
		}
		layer.msg('帖子发表成功');
	})
	
	
	
	
    $(".section-infor-box  .select").click(function() {
        var popWidth = 400; //弹框宽度
        var $select = $("#P_Forum_section_infor");
        layer.open({
            type: 1,
            shade: .5,
            title: false,
            closeBtn: 0,
            shadeClose: true,
            area: [popWidth + 'px'],
            content: $select,
            success: function(layero, index) {
                $select.find(".close").one("click", function() {
                        layer.close(index);
                    })
				 $select.find(".show-close").one("click", function() {
                        layer.close(index);
                    })
            }
        });
    })
})
