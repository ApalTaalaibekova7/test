//burger
const burger = document.querySelector('.mobile-btn')
const nav = document.querySelector('.nav')
const backdrop = document.querySelector('.backdrop')

burger.addEventListener('click', () => {
    burger.classList.toggle('show-mobile-btn')
    nav.classList.toggle('show-nav')
    backdrop.classList.toggle('show-backdrop')
})

// modal

const apply = document.querySelector('.apply')
const modalBackDrop = document.querySelector('.modalBackDrop')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modalContent')
const modalApplyButton = document.querySelector('.modalApplyButton')
const massage = document.querySelector('.massage')
const modalCloseButton = document.querySelector('.modalCloseButton')

let timer

const remover = () => {
    if(timer) {
        clearTimeout(timer)
    }
    modalBackDrop.classList.remove('modalBackdropActive')
    modal.classList.remove('modalActive')
}

apply.addEventListener('click', () => {
    modalBackDrop.classList.add('modalBackdropActive')
    modal.classList.add('modalActive')
})

modalBackDrop.addEventListener('click', remover)
modalCloseButton.addEventListener('click', remover)

modal.addEventListener('click', (e) => {
    console.dir(e);
    e.stopPropagation()
})


modalApplyButton.addEventListener('click', () => {
    modalContent.classList.add('hideContent')
    massage.innerHTML = `
    <div class="massege">
        <h2>Thank You</h2>
        <p>Our operator will call you back</p>
    </div>
    `
    timer = setTimeout(remover, 2000)
})


apply.addEventListener('click', () => {
    modalContent.classList.remove('hideContent')
    // очищение поля
    massage.innerHTML = ''
})





