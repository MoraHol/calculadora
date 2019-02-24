// Get all the keys from document
var keys = document.querySelectorAll('#calculator span')
var inputVal = ''
// Add onclick event to all the keys and perform operations
for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function () {
    // Get the input and button values
    var input = document.querySelector('.screen')
    var btnVal = this.innerHTML

    // Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
    // If clear key is pressed, erase everything
    if (btnVal == 'C') {
      input.innerHTML = ''
      inputVal = input.innerHTML
    } else if (btnVal == 'x') {
      inputVal += '*'
      input.innerHTML += btnVal
    } else if (btnVal == '÷') {
      inputVal += '/'
      input.innerHTML += btnVal
    }
    // If eval key is pressed, calculate and display the result
    else if (btnVal == '=') {
      var equation = inputVal;
      calculate(equation, input)
      inputVal = input.innerHTML
    } else {
      input.innerHTML += btnVal
      inputVal += btnVal
    }
  }
}

function calculate(equation, input) {
  let xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      input.innerHTML = this.responseText
    }
    if (this.status === 400) {
      input.innerHTML = 'eror: ha escrito mal la expresion'
    }
  }
  xhttp.open("GET", 'http://api.mathjs.org/v4/?expr=' + encodeURIComponent(equation), false)
  xhttp.send()
}