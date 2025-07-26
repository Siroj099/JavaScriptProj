const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert("random number is greater that 0.7");
}

const arrayOfNum = [0, 1, 2, 3, 4, 5];

for (let num of arrayOfNum) {
  console.log(num);
}

for (let i = arrayOfNum.length; i > 0; i--) {
  console.log(arrayOfNum[i - 1]);
}

const randomNumber2 = Math.random();

if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber < 0.2 ||
  randomNumber2 < 0.2
) {
  alert("lol");
  console.log(randomNumber);
  console.log(randomNumber2);
}
