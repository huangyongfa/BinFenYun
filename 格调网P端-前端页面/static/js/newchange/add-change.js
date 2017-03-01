//兼容滚轮事件
    $(".user-plan-list-ul li .planlabel").on("mouseover", function () {
        $(window).on("mousewheel DOMMouseScroll", function (e) {
            scrollFunc(e);
        })

        $(".user-plan-list-ul li .planlabel").on("mousewheel DOMMouseScroll", function (e) {
            var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
		                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));// firefox	    
            // 当前滚动条的滚动的高度
            var lineTop=0;
            lineTop = parseInt($(this).find(".line").css("top"));
            // 当前内容滚动的高度
            var contentMar=0;
            contentMar = parseInt($(this).find(".planlabel-content").css("marginTop"));
            var changeTop=0, changeMar=0;
            // 内容的高度
            var contentH = ($(this).find("span").length) * 30 / 3;
            // 内容最终移动的距离
            console.log(contentH)
            var endMar = 100 - contentH;
            // 内容移动的距离
            var movedis = contentH * 0.05;
            if (delta > 0) {
                // 向上滚
                changeTop = lineTop - 4;//滚动条滚动过后的top
                changeMar = contentMar + movedis;//内容滚动后的margin-top
                if (changeTop < 0) { changeTop = 0; }
                if (changeMar > 0) { changeMar = 0; }
                $(this).find(".line").css("top", changeTop + "px");
                $(this).find(".planlabel-content").css("marginTop", changeMar + "px")
                console.log(changeTop);
            } else if (delta < 0) {
                // 向下滚
                changeTop = lineTop + 4;
                changeMar = contentMar - movedis;
                if (changeTop > 80) { changeTop = 80; }
                if (changeMar < endMar) { changeMar = endMar; }
                $(this).find(".line").css("top", changeTop + "px");
                $(this).find(".planlabel-content").css("marginTop", changeMar + "px")
                console.log(changeTop)
            }
        });
    }).on("mouseout", function () {
        $(window).off();
    })
    // 阻止默认事件
    function scrollFunc(e) {
        e = e || window.event;
        if (e && e.preventDefault) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.returnvalue = false;

            return false;
        }
    }
    // 选中效果（最多能选中5个）
    $(".user-plan-list-ul li .planlabel span").on("click", function () {
        if ($(this).parent().find("span.on").length == 5) {
            $(this).removeClass("on");
        } else {
            $(this).toggleClass("on");
        }

    })

    //关联DIV商品清单  弹出框
    $(".next-relevancy").on("click", function () {
        layer.open({
            type: 1,
            title: false,
            content: $(".layout-relevancy"),
            area: '930px',
            closeBtn: 0,
            fix: false
        })
        $(".ico_clos1e").on("click", function () {
            layer.closeAll();
        })
    });



// 滚动公告
$(function () {
    var settime;
    $(".sign-msg-content-body").hover(function () {
        clearInterval(settime);
    }, function () {
        settime = setInterval(function () {
            var $first = $(".sign-msg-content-body ul");     //选取div下的第一个li；
            var height = $first.find("li:first").height();      //获取第一个li的高度，为ul向上移动做准备；
            if($(".sign-msg-content-body ul li").length>6){
                $(".sign-msg-content-body ul li:first").animate({ "marginTop": (-height - 30) + "px" }, 500, function () {
                    $(".sign-msg-content-body ul li:first").css({ marginTop: 0 }).appendTo($first); //设置上边距为零，为了下一次移动做准备
                });
            }else{
                clearInterval();
            }
        }, 2000);
    }).trigger("mouseleave");       //trigger()方法的作用是触发被选元素的制定事件类型
});
