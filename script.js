
const burger = document.querySelector('.mobile-btn')
const nav = document.querySelector('.nav')
const backdrop = document.querySelector('.backdrop')

burger.addEventListener('click', () => {
    burger.classList.toggle('show-mobile-btn')
    nav.classList.toggle('show-nav')
    backdrop.classList.toggle('show-backdrop')
})


const apply = document.querySelector('.apply')
const modalBackDrop = document.querySelector('.modalBackDrop')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modalContent')
const modaApplyButton = document.querySelector('.modaApplyButton')
const massage = document.querySelector('.massage')
const modalCloseButton = document.querySelector('.modalCloseButton')

let timer

const remover = () => {
    if (timer) {
        clearTimeout(timer)
    }
    modalBackDrop.classList.remove('modalBackDropActive')
    modal.classList.remove('modalActive')
}

apply.addEventListener('click', () => {
    modalBackDrop.classList.add('modalBackDropActive')
    modal.classList.add('modalActive')
})
modalBackDrop.addEventListener('click', remover)
modalCloseButton.addEventListener('click', remover)

modal.addEventListener('click', (e) => {
    console.dir(e);
    e.stopPropagation()
})


// ////////////////////////////////////////////////////////////

const row = () =>{
        const accordion = document.querySelectorAll('.accrodion__wrap')
    
            accordion.forEach(el=>{
                el.addEventListener('click',()=>{
                    el.classList.toggle('accordion__active')
                 })
            })
            }
    row()


    
    


