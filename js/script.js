function btnClick() {
  let num1;
  let num2;
  let result;

  num1 = parseInt(document.getElementById('input1').value);
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

  let output = document.getElementById("result");
  output.value = result;
}

function setValue() {
  selectValue = document.getElementById("math").value;
}

function init() {
  const button = document.getElementById("submit");
  button.onclick = btnClick;
}
window.onload = init;


function invalidMsg(textbox) {
  if (textbox.value === '') {
    textbox.setCustomValidity('Please, enter integer number!');
  } else {
    textbox.setCustomValidity('');
  }
}

function isNumberKey(evt){
  let charCode = (evt.which) ? evt.which : evt.keyCode;
  return !((charCode == 46));
}


