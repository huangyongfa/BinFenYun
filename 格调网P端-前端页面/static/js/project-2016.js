/**
 *common JS
 *Created time: 2016-08-25
 *Author: yw
 *Modified time: 
 *Modified by: 
 */

$(function() {
	/*添加栏目*/
	$("#U_D_Materiel_Choice li").click(function(){
		$(this).addClass("cur");
	})
	/*显示隐藏部分栏目*/
	function SwitchColumn(){
		$("#U_D_Materiel_Choice li").each(function(){
			if($(this).hasClass("cur"))
			{
				$(this).addClass("dn").removeClass("cur");
				$(".offer-detail-constr-materiel-leftcolumn li").eq($(this).index()).removeClass("dn");
				$(".offer-detail-constr-materiel-right .offer-detail-constr-materiel-list").eq($(this).index()).addClass("cur");
				
			}
		})
	}
	/*栏目选择弹出*/
	$(".btn-constr-materiel-add").click(function() {
		layer.open({
			type: 1,
			shade: .5,
			title: ["栏目选择","text-align:center;height:40px; line-height:40px;font-size:14px;"],
			shift: 2,
			move: false,
			area: ["400px"],
			content: $("#U_D_Materiel_Choice"),
			success: function(layero, index) {
                $("#U_D_Materiel_Choice .bgGradient").one("click", function() {
					SwitchColumn();
                    layer.close(index);
                    formReset();
                })
            },
			end: function() {
                formReset();
			}
		});
		return false;
	})
})
