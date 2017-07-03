
$(document).ready(function () {
	$('body').fadeIn(1000);

	$('.ustawliczbe').click(function(){
		$('.pudlo').empty();

		function siatkaKomorek() {

			let komorki = prompt('ile komorek?');
			$('.pudlo').show(1000);
			$('.kolorki').show(1000);
			let iloscKomorek = komorki * komorki;
			let $dodajPixel = $('<div class="onepixel"></div>').text("");
			for (let i = 0; i < iloscKomorek; i++) {
				$dodajPixel = $('<div class="onepixel"></div>').text("");
				$('.pudlo').append($dodajPixel);
			}
			let szerokosc = 500 / komorki;
			$('.onepixel').css('width',szerokosc+"px")

		}
		siatkaKomorek();

			$('.czerwony').on('click', function(){
				$('.onepixel').on('mouseenter', function(){
					$(this).removeClass('zmianakoloruniebieski zmianakoloruzielony').addClass('zmianakoloruczerwony');


				})
			});
$('.niebieski').on('click', function(){
	$('.onepixel').on('mouseenter', function(){
		$(this).removeClass('zmianakoloruczerwony zmianakoloruzielony').addClass('zmianakoloruniebieski');


	})
});
$('.zielony').on('click', function(){
	$('.onepixel').on('mouseenter', function(){
		$(this).removeClass('zmianakoloruczerwony zmianakoloruniebieski').addClass('zmianakoloruzielony');


	})
});
$('.wyczysc').click(function(){
	$('.onepixel').removeClass('zmianakoloruczerwony zmianakoloruniebieski zmianakoloruzielony');
})

});
});

