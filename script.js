let streak = 0;

function addNumbers() {
  const valueOne = parseFloat(document.getElementById('valueOne').value);
  const valueTwo = parseFloat(document.getElementById('valueTwo').value);
  const resultEl = document.getElementById('result');
  const streakEl = document.getElementById('streak');

  resultEl.classList.remove('show-result');

  if (isNaN(valueOne) || isNaN(valueTwo)) {
    resultEl.textContent = 'Please enter valid numbers.';
    return;
  }

  const valueThree = valueOne + valueTwo;
  let roast = '';
  let roasted = false;

  if ((valueOne === 0 && valueTwo === 0) || (valueOne === 1 && valueTwo === 1)) {
    roast = ' Seriously? You trying to flex on adding baby numbers? 😏';
    roasted = true;
  } else if (valueOne === valueTwo && valueOne < 5) {
    roast = ` ${valueOne} + ${valueTwo}? You sure you're not training for toddler Olympics? 🍼`;
    roasted = true;
  }

  if (roasted) {
    streak = 0;
  } else {
    streak++;
  }

  resultEl.textContent = `The sum of ${valueOne} and ${valueTwo} is ${valueThree}.${roast}`;
  streakEl.textContent = `🔥 Streak: ${streak}`;
  void resultEl.offsetWidth;
  resultEl.classList.add('show-result');
}

function resetGame() {
  document.getElementById('valueOne').value = '';
  document.getElementById('valueTwo').value = '';
  document.getElementById('result').textContent = '';
  streak = 0;
  document.getElementById('streak').textContent = '🔥 Streak: 0';

}

}
