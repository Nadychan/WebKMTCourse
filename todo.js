let TASK_text = []

let openBtn = document.querySelector('.create-task')

let modal = document.querySelector('.task-modal')

let closeLayer = document.querySelector('.close-modal')

let form = document.querySelector('form')

let text_desc = document.querySelector('form textarea')

let task_li = document.querySelector('.task-list')

const openModal = () => {
    modal.classList.add('active')
}

const closeModal = () => {
    modal.classList.remove('active')
}

const create_list = (paratask) => {
    let list = document.createElement('li')


    // list.innerText = paratask//text_desc.value

    list.innerHTML = `
    <p>${paratask}</p>
    <button class='btn close-task'>Done</button>
    `
    task_li.appendChild(list)
}

//open form
openBtn.addEventListener('click', () => {
    text_desc.value = ''
    openModal()
})

//unsave task
closeLayer.addEventListener('click', () => {
    closeModal()
})

//save task
form.addEventListener('submit', (e) => {
    e.preventDefault()//prevent default for function

    let val = text_desc.value

    TASK_text.push(val)

    create_list(val)//()

    closeModal()
})