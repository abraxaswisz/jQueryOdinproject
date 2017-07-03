
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
	
// czerwony
	$('.czerwony').on('click', function(){
	$('.onepixel').on('mouseenter', function(){
		$(this).removeClass('zmianakoloruniebieski zmianakoloruzielony').addClass('zmianakoloru');


	})
});
//
// niebieski
	$('.niebieski').on('click', function(){
	$('.onepixel').on('mouseenter', function(){
		$(this).removeClass('zmianakoloru zmianakoloruzielony').addClass('zmianakoloruniebieski');


	})
});
// zielony 
	$('.zielony').on('click', function(){
	$('.onepixel').on('mouseenter', function(){
		$(this).removeClass('zmianakoloru zmianakoloruniebieski').addClass('zmianakoloruzielony');


	})
});
//


	$('.wyczysc').click(function(){
			$('.onepixel').removeClass('zmianakoloru zmianakoloruniebieski zmianakoloruzielony');


	})

});
});