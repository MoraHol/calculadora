let screen = document.getElementById('screen')
let firstNumber = document.getElementById('firstNumber')
let secondNumber = document.getElementById('secondNumber')

document.getElementById('sum').addEventListener('click', function () {
  screen.value = sum(parseFloat(firstNumber.value), parseFloat(secondNumber.value))
})
document.getElementById('sub').addEventListener('click', function () {
  screen.value = subtract(parseFloat(firstNumber.value), parseFloat(secondNumber.value))
})
document.getElementById('clean').addEventListener('click', function () {
  firstNumber.value = " "
  secondNumber.value = " "
})

function sum(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}

function multiply(x, y) {
  if (x == 0 || y == 0) {
    return 0
  } else {
    return x * y
  }
}

function divide(x, y) {
  if (y == 0) {
    return 'error'
  }
  return x / y
}