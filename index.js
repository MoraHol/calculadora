let screen = document.getElementById('screen')
let firstNumber = document.getElementById('firstNumber')
let secondNumber = document.getElementById('secondNumber')

document.getElementById('sum').addEventListener('click', function () {
  screen.value = sum(parseFloat(firstNumber.value), parseFloat(secondNumber.value))
})
document.getElementById('sub').addEventListener('click', function () {
  screen.value = subtract(parseFloat(firstNumber.value), parseFloat(secondNumber.value))
})
document.getElementById('mul').addEventListener('click', function () {
  screen.value = multiply(parseFloat(firstNumber.value), parseFloat(secondNumber.value))
})
document.getElementById('div').addEventListener('click', function () {
  screen.value = divide(parseFloat(firstNumber.value), parseFloat(secondNumber.value))
})
document.getElementById('clean').addEventListener('click', function () {
  firstNumber.value = " "
  secondNumber.value = " "
  screen.value = ' '
})
document.getElementById('calculator').addEventListener('click', function () {
  calculator(document.getElementById('expression').value)
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

function calculator(expression) {
  let xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById('test').innerHTML = this.responseText
    }
  }
  xhttp.open('GET', 'http://api.mathjs.org/v4/?expr=' + encodeURIComponent(expression), true)
  xhttp.send()
}