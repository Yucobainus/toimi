let inputs = document.querySelectorAll('.form-contact__content_input-text')
let submitButton = document.getElementById('submitButton')

submitButton.addEventListener('click', () => {

    submitButton.classList.add('clicked')

})


inputs.forEach(el => {
    el.addEventListener('click', (e) => {
        el.children[0].classList.add('hide')
    })
    el.addEventListener('focusout', (e) => {
        if (el.children[1].value == '') {
            el.children[0].classList.remove('hide')
        }
    })
})