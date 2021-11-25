const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

Array.from($$('.method_payments:not(.note_cod):not(.note_banking)')).map(method => {
    method.onclick = () => {
        method.children[0].checked = true
        if(method.children[0].id === 'cod'){
            $('.block_info-payments .method_payments.note_cod').style.display = 'block'
            $('.block_info-payments .method_payments.note_banking').style.display = 'none'
        }
        else if(method.children[0].id === 'banking'){
            $('.block_info-payments .method_payments.note_cod').style.display = 'none'
            $('.block_info-payments .method_payments.note_banking').style.display = 'block'
        }
        else{
            $('.block_info-payments .method_payments.note_banking').style.display = 'none'
            $('.block_info-payments .method_payments.note_cod').style.display = 'none'
        }
    }
})