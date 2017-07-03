
$(document).ready(function () {
	$('body').fadeIn(1000);
	$('.ustawliczbe').click(function(){
	$('.pudlo').empty();

	function siatkaKomorek() {

	let komorki = prompt('ile komorek?');
		komorki = komorki * komorki;
		let $dodajPixel = $('<div class="onepixel"></div>').text("");
		for (let i = 0; i < komorki; i++) {
			$dodajPixel = $('<div class="onepixel"></div>').text("");
			$('.pudlo').append($dodajPixel);
		}
	}
	siatkaKomorek();

	$('.onepixel').on('click', function(){
		$(this).addClass('zmianakoloru');
		if($('.onepixel').hasClass('zmianakoloru')) {
			$('.onepixel').on('mouseenter', function(){
				$(this).addClass('zmianakoloru');
			});
		}

	})
	$('.wyczysc').click(function(){
			$('.pudlo').empty();


	})

});
});