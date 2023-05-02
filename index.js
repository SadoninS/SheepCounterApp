let increaseBtn = document.querySelector('.js-increase-value')
let resetBtn = document.querySelector('.js-reset-value')
let closeAppBtn = document.querySelector('.js-close-app')
let countertext = document.querySelector('.js-value')
counter = 0


increaseBtn.addEventListener('click', function() {
    counter = counter + 1
    countertext.innerHTML = counter
})

resetBtn.addEventListener('click', function() {
    counter = 0
    countertext.innerHTML = 0
})

closeAppBtn.addEventListener('click', function() {
    window. close()
})