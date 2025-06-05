function addNumbers() {
  const valueOne = parseFloat(document.getElementById('valueOne').value);
  const valueTwo = parseFloat(document.getElementById('valueTwo').value);

  if (isNaN(valueOne) || isNaN(valueTwo)) {
    document.getElementById('result').textContent = 'Please enter valid numbers.';
    return;
  }

  const valueThree = valueOne + valueTwo;

  document.getElementById('result').textContent =
    `The sum of ${valueOne} and ${valueTwo} is ${valueThree}.`;
}
