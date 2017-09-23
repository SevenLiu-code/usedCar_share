$(function(){
    var usedCar_details_slide = new Swiper( '.car-details-swiper', {
        loop: true,
        pagination : '.swiper-pagination',
        paginationType : 'fraction',
        paginationFractionRender: function (swiper, currentClassName, totalClassName) {
  		      return '<span class="_img_count_bg"></span><span class="' + currentClassName + '"></span>' +
  		             '&nbsp;/&nbsp;' +
  		             '<span class="' + totalClassName + '"></span>';
  	  		}
    });
    $('div._info_base_more').tap(function(){
  		$('.hidden_part').hide();
  		$('div.car_parameter').scrollTop();
  		$('div.car_parameter').show();
  	});
  	//配置参数退出
  	$('div.car_parameter_head>a').on('touchstart', function(e){
  		$(this).parents('div.car_parameter').hide();
  		$('.hidden_part').show();
  		if(e.type == "touchstart") e.preventDefault();//阻止默认事件，防止点透
  	});
    $('div.details_push_btn>button').tap(function(){
  		$('section.details_push_tip').show();
  	})

    //推荐app切换
    $('.details_push_change span.close').tap(function(){
  				$(this).addClass('hidden');
  				$('section.car_detail_info').animate({'padding-bottom': '0rem'});
  				$(this).parents('.details_push').animate({'right': '-100%'}, 300, function(){
  					$(this).parent().find('span.open').removeClass('hidden').addClass('details_push_change_fixed');
  				});
  	});
  	$('.details_push_change span.open').tap(function(){
  				$(this).addClass('hidden');
  				$(this).parents('.details_push').css({'right': 0});
  				$(this).parent().find('span.close').removeClass('hidden details_push_change_fixed');
  				$('section.car_detail_info').css({'padding-bottom': '4rem'});
  	})
})
