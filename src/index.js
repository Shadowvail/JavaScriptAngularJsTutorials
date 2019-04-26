/**Function that finds the values of the input fields in a form and adds them together to output the **/
function sumOfFormInputFields() {
  var input1 = Number(document.getElementById('input1').value);
  var input2 = Number(document.getElementById('input2').value);
  addValues(input1, input2);
}

/** Function to add to values together **/
function addValues(value1, value2) {
  var sum = value1 + value2;
  printResultsToPage(sum);
}

/** Function that takes a value an writes it to the page **/
function printResultsToPage(valueToPrint) {
  document.getElementById('additionResult').innerHTML = input1+input2;
}