$(document).ready(function(e) {
    $('.img-gedui[usemap]').rwdImageMaps();
});

$('area').on('click', function() {
    alert($(this).attr('alt') + ' clicked');
});