$(document).ready(function () {
	function siatkaKomorek() {
	let komorki = prompt('ile komorek?');
    let $dodajPixel = $('<div class="onepixel"></div>').text("");
    for (let i = 0; i <= komorki; i++) {
        $dodajPixel = $('<div class="onepixel"></div>').text("");
        $('.pudlo').append($dodajPixel);
    }
}
siatkaKomorek();

$('.onepixel').on('mousehold', function(){
	$(this).addClass('zmianakoloru');

})


});