$(function(){
    var usedCar_details_slide = new Swiper( '.car-details-swiper', {
        loop: true,
        autoplay: 5000,
        pagination : '.swiper-pagination',
        paginationType : 'fraction',
        paginationFractionRender: function (swiper, currentClassName, totalClassName) {
  		      return '<span class="_img_count_bg"></span><span class="' + currentClassName + '"></span>' +
  		             '&nbsp;/&nbsp;' +
  		             '<span class="' + totalClassName + '"></span>';
  	  		}
    });
    //配置参数进入
  	$('div._info_base_more').tap(function(){
  		$('.hidden_part').hide();
  		$('div.car_parameter').show();
  	})
  	//配置参数退出
  	$('div.car_parameter_head>a').tap(function(){
  		$(this).parents('div.car_parameter').hide();
  		$('.hidden_part').show();
  	})
})
