
$(".main-menu__toggle").click(function() {
   $(".main-menu").toggleClass("main-menu--closed");
    $(this).toggleClass("main-menu__toggle--burger");
})


var sliderItemWidth = 320;

$(".slider__input").click(function() {
	sliderItemWidth = $('.slider__item').width();
	$(".slider__input").removeClass("slider__input--active")
	$(this).addClass("slider__input--active");
});

$(".slider__input:first-child").click(function(){
	$(".slider__items").css("left", "0px");
	$(".advantages__table").css("left","20px");
});

$(".slider__input:nth-child(2)").click(function(){
	$(".slider__items").css("left", -sliderItemWidth + "px");
	$(".advantages__table").css("left","-260px");
});

$(".slider__input:last-child").click(function(){
	$(".slider__items").css("left", -sliderItemWidth*2 + "px");
	$(".advantages__table").css("left","-540px");
});