
$(".main-menu__toggle").click(function() {
    $(".main-menu").toggleClass("main-menu--closed");
    $(this).toggleClass("main-menu__toggle--burger");
})


var sliderItemWidth = 320;

$(".slider__input--reviews").click(function() {
	sliderItemWidth = $('.slider__item').width();
	$(".slider__input--reviews").removeClass("slider__input--active")
	$(this).addClass("slider__input--active");
});

$(".slider__input--advantages").click(function() {
	sliderItemWidth = $('.slider__item').width();
	$(".slider__input--advantages").removeClass("slider__input--active")
	$(this).addClass("slider__input--active");
});

$(".slider__input--reviews:first-child").click(function(){
	$(".slider__items").css("left", "0px");
});

$(".slider__input--reviews:nth-child(2)").click(function(){
	$(".slider__items").css("left", -sliderItemWidth + "px");

});

$(".slider__input--reviews:last-child").click(function(){
	$(".slider__items").css("left", -sliderItemWidth*2 + "px");

});

$(".slider__input--advantages:first-child").click(function(){

	$(".advantages__table").css("left","20px");
});

$(".slider__input--advantages:nth-child(2)").click(function(){

	$(".advantages__table").css("left","-260px");
});

$(".slider__input--advantages:last-child").click(function(){
	$(".advantages__table").css("left","-540px");
});