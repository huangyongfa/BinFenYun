
/**
 *common JS
 *Created time: 2016-05-21
 *Author: yw
 *Modified time: 
 *Modified by: 
 */

	var 
		 indexs=0;
		 timers = null ;//声明自动滚动变量秒
		 group=null;//ID
		Swidths = 0	 ;//每次移动宽度
		rolltimes=4000;//每次间隔时间 单位毫秒 1000为1秒
		num=0;
		//下一个 函数       
		function NextPages(group)
		{	
			var indexnum=GetIndex(group);
			indexnum+=1;
			if(indexnum>$("#"+group+" .switch-reception-list li").length-num)
			{
				indexnum = 0 ;
			}
			/*判断当前是否处于运动状态*/
			if(!$("#"+group+" .switch-reception-list").is(":animated")){
				$("#"+group+" .switch-reception-list").stop(true, false).animate({left: -indexnum*Swidths+"px"},600)
			}
		}
		//上一个 函数
		function PrevPages(group)
		{	
			var indexnum=GetIndex(group);
			indexnum-=1;
			if(indexnum<0)
			{
				indexnum = $("#"+group+" .switch-reception-list li").length-num;
			}
			/*判断当前是否处于运动状态*/
			if(!$("#"+group+" .switch-reception-list").is(":animated")){
				$("#"+group+" .switch-reception-list").stop(true, false).animate({left: -indexnum*Swidths+"px"},600)		
			}
		}
		//下一页
		function NextCilcks(id){
			group=$(id).parent().attr("id");
			num=$(id).parent().attr("num");
			Swidths=$(id).parent().attr("switch");
			NextPages(group);
		}
		function PrevCilcks(id){
			group=$(id).parent().attr("id");
			num=$(id).parent().attr("num");
			Swidths=$(id).parent().attr("switch");
			PrevPages(group);
		}
		//自动滚动
		function Timers(group,change)
		{
			num=$("#"+group).attr("num");
			Swidths=$("#"+group).attr("switch");
			if(change==true)
			{
				var timers = setInterval(function(){
					NextPages(group);
				},rolltimes);
				//当鼠标移动到相册及上一页下一页按钮上  停止自动滚动  鼠标移走时开始自动滚动
				$("#"+group+" .next , "+"#"+group+" .switch-reception-list ,"+"#"+group+" .prev").mouseover(function(){
					clearInterval(timers);
				});
				$("#"+group+" .next , "+"#"+group+" .switch-reception-list ,"+"#"+group+" .prev").mouseleave(function(){
					timers = setInterval(function(){
						indexs++ ;
						NextPages(group);
					},rolltimes);	
				});
			}
		}
		
		function GetIndex(group){
			var left=$("#"+group+" .switch-reception-list").position().left;
			return -(left/Swidths);
		}