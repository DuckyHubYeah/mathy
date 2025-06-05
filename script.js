function addNumbers() {
  const valueOne = parseFloat(document.getElementById('valueOne').value);
  const valueTwo = parseFloat(document.getElementById('valueTwo').value);
  const resultEl = document.getElementById('result');

  // Clear previous animation class
  resultEl.classList.remove('show-result');

  if (isNaN(valueOne) || isNaN(valueTwo)) {
    resultEl.textContent = 'Please enter valid numbers.';
    return;
  }

  const valueThree = valueOne + valueTwo;

  let roast = '';
  if ((valueOne === 0 && valueTwo === 0) || (valueOne === 1 && valueTwo === 1)) {
    roast = ' Seriously? You trying to flex on adding baby numbers? 😏';
  } else if (valueOne === valueTwo && valueOne < 5) {
    roast = ` ${valueOne} + ${valueTwo}? You sure you're not training for toddler Olympics? 🍼`;
  }

  resultEl.textContent = `The sum of ${valueOne} and ${valueTwo} is ${valueThree}.${roast}`;
  
  // Trigger animation
  void resultEl.offsetWidth;
  resultEl.classList.add('show-result');
}

function resetGame() {
  document.getElementById('valueOne').value = '';
  document.getElementById('valueTwo').value = '';
  document.getElementById('result').textContent = '';
}
