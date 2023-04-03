// const buttons = document.querySelectorAll('.btn')
// const textarea = document.querySelector('textarea')
// const delete_btn = document.querySelectorAll('.delite')
// const shift_btn = document.querySelectorAll('.shift')
// const space_btn = document.querySelectorAll('.space')

// buttons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         textarea.value += btn.innerText
//     })
// })

// let chars = []

// delite_btn.addEventListener('click', () => {
//     chars.pop()
//     textArea.value = chars.join('')
// })

// space_btn.addEventListener('click', () => {
//     chars.push(' ')
//     textArea.value = chars.join('')
// })
// shift_btn.addEventListener('click', () => {
//     buttons.forEach(btn, () => {
//         btn.classList.toggle('upper')
//     })
// })



const buttons = document.querySelectorAll('.btn')
const textarea = document.querySelector('textarea')

const delete_btn = document.querySelector('.delete')
const shift_btn = document.querySelector('.shift')
const space_btn = document.querySelector('.space')

let chars = []

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText
        chars = textarea.value.split('')
    })
})




delete_btn.addEventListener('click', () => {
    chars.pop()
    textarea.value = chars.join('')
})

space_btn.addEventListener('click', () => {
    chars.push(' ')
    textarea.value = chars.join('')
})

shift_btn.addEventListener('click', () => {
    buttons.forEach(btn => {
        btn.classList.toggle('upper')
    })
})