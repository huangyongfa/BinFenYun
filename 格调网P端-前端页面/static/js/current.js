/**
 * Created by Administrator on 2016/8/26.
 */
$(function(){
    $(".showChose").click(function(){
        $(".showChose").each(function(){
            if($(this).is(':checked')){
                $(this).next().css("border-color","#e61d4c");
            }else{
                $(this).next().css("border-color","#e5e5e5");

            }
        })


    });
});


$(".recharge-bank-more a").click(function() {
    layer.open({
        type: 1,
        shade: .5,
        title: ["选择银行","text-align:center;height:40px; line-height:40px"],
        shift: 2,
        move: false,
        area: ["700px",'500px'],
        content: $("#U_D_ShowBank"),
        offset:'20px',
        success: function(layero, index) {
            $("#U_D_ShowBank .btn-bank-next").one("click", function() {
                layer.close(index);
                formReset();
            })
        },
        end: function() {
            formReset();
        }
    });

    return false;
});
$(".btn-bank-next").on("click",function(){
    $("#rechargeMethod").hide();
    $("#rechargebalance").show();
});

$(".btn-balance-ok").on("click",function(){
    $(".wallet-user-recharge-pay").hide();
    $("#rechargesucess").show();
});
/*图片上传弹出*/
$(".btn-withdraw-next").on("click",function(){
    $("#withdrawbalance").hide();
    $("#withdrawconfirm").show();
});
$("btn-bank-next").on("click",function(){
    $("#withdrawbalance").hide();
    $("#withdrawconfirm").show();
});
$(".btn-withdraw-ok").on("click",function(){
    $("#withdrawconfirm").hide();
    $("#rechargesucess").show();
});

$(".wallet-user-recharge-type>li").click(function(e){
    e.preventDefault();
    $(this).addClass("cur").siblings().removeClass('cur');
    if($(this).children('a').text()=='支付宝'){
        $('.wallet-user-wx,#rechargeMethod,#rechargebalance,#rechargesucess').hide();
        $('.wallet-user-zfb').show();
    }else if($(this).children('a').text()=='微信'){
        $('.wallet-user-zfb,#rechargeMethod,#rechargebalance,#rechargesucess').hide();
        $('.wallet-user-wx').show();
    }else{
        $('.wallet-user-zfb,.wallet-user-wx,#rechargebalance,#rechargesucess').hide();
        $('#rechargeMethod').show();
    }
});