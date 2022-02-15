const btnPass = document.querySelector('.eye-icon')
const input = document.getElementById('password')
console.log(btnPass, input)

btnPass.addEventListener('click', () => {
    if(input.type === 'password'){
        input.type = 'text'
    } else {
        input.type = 'password'
    }
})
