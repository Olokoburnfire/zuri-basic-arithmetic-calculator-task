//javascript aritmetic calculator task solution

// Inputing first number
let first_num = parseFloat(window.prompt("Input first number:"));

// Inputing  arithmetic operator
let operators = window.prompt("Select the operator \' +, -, *, / \':");
//inputing secondnumber
let second_num = parseFloat(window.prompt("Input second number:"));

//functions

//addition
function addition(first_num, second_num) {
  return first_num + second_num;
};
//subtraction
function subtraction(first_num, second_num) {
  return first_num - second_num;
}

//multiplication
function multiplication(first_num, second_num) {
  return first_num * second_num;
}

//division
function division(first_num, second_num) {
  return first_num / second_num;
}

//loop and output
while (true) {
   if (operators == "+") {
     alert(first_num + operators + second_num + " = " + addition(first_num, second_num));
     break
   }
   else if (operators == "-") {
     alert(first_num + operators + second_num + " = " + subtraction(first_num, second_num));
     break
   }
   else if (operators == "*") {
     alert(first_num + operators + second_num + " = " + multiplication(first_num, second_num));
     break
   }
   else if (operators == "/") {
     alert(first_num + operators + second_num + " = " + division(first_num, second_num));
     break
   }
   else {
      window.alert("invalid input!!!\n please reload the page:");
      break
   };
}
