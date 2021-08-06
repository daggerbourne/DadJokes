const jokeButton = document.querySelector('.getJoke');
const jokeButtonSpan = jokeButton.querySelector('.jokeText');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
  'Even Ezra rolled his eyes',
  'Streeeeeetch. Like a Bungie',
  'Britnie is funnier and cooler than you',
  '🙄️',
];

async function fetchJoke() {
  // turn loader on
  loader.classList.remove('hidden');
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
  const data = await response.json();
  loader.classList.add('hidden');
  jokeButton.classList.remove('hidden');
  return data;
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log('we used that one before');
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  console.log(joke);
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}

jokeButton.addEventListener('click', handleClick);
