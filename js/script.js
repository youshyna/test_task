let num1;
let num2;
let selectValue;
let result;


function btnClick() {
  num1 = parseInt(document.getElementById('input1').value);
  console.log(num1);
  num2 = parseInt(document.getElementById('input2').value);

  if (selectValue === "+") {
    result = parseInt(num1 + num2);
    
  } else if (selectValue === "-") {
    result = parseInt(num1 - num2);

  } else if (selectValue === "*") {
    result = parseInt(num1 * num2);
    
  } else {
    result = parseInt(num1 / num2);
  }
  
  if (isNaN(result)) {
    result = 'incorrect data :(';
  }

  var output = document.getElementById("result");
  output.value = result;
}


function setValue() {
  selectValue = document.getElementById("math").value;
}


function init() {
  var button = document.getElementById("submit");
  button.onclick = btnClick;
}


window.onload = init;


