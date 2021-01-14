let openModal = document.querySelector('.modal-open')

let closeModal = document.querySelector('.modal-close')

let disableModal = document.querySelector('.modal-disable')

let enableModal = document.querySelector('.modal-enable')

let modal_box = document.querySelector('#modal')

//add class modal
openModal.addEventListener('click', function(){
    // modal_box.classList.add('active')
    toggle_modal()
})

//remove class modal
closeModal.addEventListener('click', function (){
    // modal_box.classList.remove('active')
    toggle_modal()
})

//Disabled modal
disableModal.addEventListener('click', () => {
    openModal.setAttribute('disabled','true')
})

//Enable Modal
enableModal.addEventListener('click', function (){
    openModal.removeAttribute('disabled')
})

//Toggle modal
// function toggle_modal(){
//     modal_box.classList.toggle('active')
// }

const toggle_modal = () => {
    modal_box.classList.toggle('active')
}

//Get Attribute modal
console.log(document.querySelector('html').getAttribute('lang'))
