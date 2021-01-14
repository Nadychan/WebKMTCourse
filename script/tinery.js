let openModal = document.querySelector('.modal-open')

let closeModal = document.querySelector('.modal-close')

let switchModal = document.querySelector('.switch')

let modal_box = document.querySelector('#modal')

const disc_btn = () => {
    openModal.setAttribute('disabled','true')
    switchModal.innerText = 'Enable Modal'
}

const enable_btn = () => {
    openModal.removeAttribute('disabled')
    switchModal.innerText = 'Disable Modal'
}

switchModal.addEventListener('click', function (){
    let text = switchModal.innerText

    // text === 'Disable Modal' ? disc_btn() : enable_btn()

    if (text === 'Disable Modal'){
        disc_btn()
    }else {
        enable_btn()
    }
})