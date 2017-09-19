$(function(){
	//根据nav导航切换section
	$(".menu a").each(function(){
		$(this).click(function() {
			var hash = $(this).attr("data-hash");
			$(".main section").each(function(){
				$(this).css("display","none")
				if($(this).attr("data-hash") == hash){
					$(this).css("display","block");
				}
			})
		})
	});
	//导航切换
	$('.menu a').click(function(){
		$('.menu a').removeClass('activeNav');
		$(this).addClass("activeNav");
	})
	//二维码
	$('.Qt').hover(function(){
		$('.hidQt').css('display','block')
	},function(){
		$('.hidQt').css('display','none')
	})

});
	