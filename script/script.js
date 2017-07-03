
$(document).ready(function () {
	$('body').fadeIn(1000);

	$('.ustawliczbe').click(function(){
	$('.pudlo').empty();

	function siatkaKomorek() {

	let komorki = prompt('ile komorek?');
		$('.pudlo').show(1000);
		let iloscKomorek = komorki * komorki;
		let $dodajPixel = $('<div class="onepixel"></div>').text("");
		for (let i = 0; i < iloscKomorek; i++) {
			$dodajPixel = $('<div class="onepixel"></div>').text("");
			$('.pudlo').append($dodajPixel);
		}
		let szerokosc = 800 / komorki;
		$('.onepixel').css('width',szerokosc+"px")

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
			$('.onepixel').removeClass('zmianakoloru');


	})

});
});