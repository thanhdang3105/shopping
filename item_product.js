const $ = document.querySelector.bind(document)
var topa = 0
$('#pagination_up').onclick = () => {
    if (topa >= 1360) {
        $('#pagination_up').style.opacity = '0.2'
    } else {
        topa = topa + 85
        $('.img_item .swiper .swiper-pagination').scrollTop = `${topa}`
        $('#pagination_down').style.opacity = '1'
    }
}

$('#pagination_down').onclick = () => {
    if (topa <= 0) {
        $('#pagination_down').style.opacity = '0.2'
    } else {
        topa = topa - 85
        $('.img_item .swiper .swiper-pagination').scrollTop = `${topa}`
        $('#pagination_up').style.opacity = '1'
    }
}



