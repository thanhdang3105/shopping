import {
    attach
} from './store.js'
import header from '../app/header.js'
import footer from '../app/footer.js'
import body_product from '../product/body.js'

const $ = document.querySelector.bind(document);

// attach(header,document.querySelector('.header'))
attach(footer, document.querySelector('.footer'))
if (document.querySelector('.body_product')) {
    attach(body_product, document.querySelector('.body_product'))
}


document.getElementById('search').onclick = () => {
    const input_search = document.querySelector('.nav_item-search')
    if (input_search.value == 0) {
        if (input_search.style.display == 'none') {
            input_search.style.display = 'block'
        } else {
            input_search.style.display = 'none'
        }
    } else {
        console.log('tìm kiếm')
        input_search.value = ''
    }
}

var isList_link = false

$('.click_list').onclick = () => {
    isList_link = !isList_link
    $('.mobile_link-list').style.display = isList_link ? 'block' : 'none'
}

var isMenu = false

$('.menu_mobile .bars.icon').onclick = () => {
    isMenu = !isMenu
    $('.menu_mobile-list').style.display = isMenu ? 'block' : 'none'
}

$('.click_list').onblur = () => {
    isList_link = !isList_link
    console.log(isList_link)
    $('.mobile_link-list').style.display = isList_link ? 'block' : 'none'
}

(function () {

    let number = 1
    let price = 200000
    $('.number').innerText = number
    $('.price').innerText = `${price.toLocaleString('en-GB')}Đ`
    $('#less').onclick = () => {
        number = number - 1
        let totalPrice = price * number
        $('.number').innerText = number
        $('.price').innerText = `${totalPrice.toLocaleString('en-GB')}Đ`
        if (number == 0) {
            document.
            $('.cart_item').innerHTML = ''
        }
    }
    $('#up').onclick = () => {
        number = number + 1
        let totalPrice = price * number
        $('.number').innerText = number
        $('.price').innerText = `${totalPrice.toLocaleString('en-GB')}Đ`
    }
})()