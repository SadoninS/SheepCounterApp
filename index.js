const INCREASE_BTN = document.querySelector('.js-increase-value')
const RESET_BTN = document.querySelector('.js-reset-value')
const CLOSE_APP_BTN = document.querySelector('.js-close-app')
const COUNTER_VALUE = document.querySelector('.js-value')

const COUNTER_INITIAL_VALUE = 0

let counter = COUNTER_INITIAL_VALUE
COUNTER_VALUE.innerHTML = 0

INCREASE_BTN.addEventListener('click', function() {
    counter = counter + 1
    COUNTER_VALUE.innerHTML = counter
})

RESET_BTN.addEventListener('click', function() {
    counter = COUNTER_INITIAL_VALUE
    COUNTER_VALUE.innerHTML = 0
})

CLOSE_APP_BTN.addEventListener('click', function() {
    window.close()
})