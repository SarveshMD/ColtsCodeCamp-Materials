// let score = 90;

// if (score >= 90) {
// 	console.log("You got an A grade !");
// } else if (score >= 80) {
// 	console.log("You got a B grade !");
// } else if (score >= 70) {
// 	console.log("You got a C grade !");
// } else if (score >= 60) {
// 	console.log("You got a D grade !");
// } else if (score >= 50) {
// 	console.log("You got a E grade !");
// } else if (score >= 40) {
// 	console.log("You got a F grade !");
// } else if (score >= 33) {
// 	console.log("You got a G grade !");
// } else {
// 	console.log("You Failed in your Test!");
// }

// let randomNumber = Math.random();

// if (randomNumber < 0.5) {
// 	console.log(`Heads : randomNumber is ${randomNumber}`);
// } else if (randomNumber === 0.5) {
// 	console.log(`Nothing: randomNumber is ${randomNumber}`);
// } else {
// 	console.log(`Tails : randomNumber is ${randomNumber}`);
// }

// for (let i = 1; i <= 20; i++) {
// 	console.log(`${i}*${i} is ${i ** 2}`);
// }

// let i = 50;
// while (i >= 40) {
// 	console.log(i);
// 	i--;
// }

// let password = "lol";
// var guess = prompt("Enter the password: ");

// while (guess !== password) {
// 	console.log("Incorrect");
// 	guess = prompt("Enter the password: ");
// 	console.log(guess);
// }
// alert("Correct !");

const answer = Math.floor(Math.random() * 10);
let guess = parseInt(prompt("Please guess a number !"));

if (Number.isNaN(guess)) {
	guess = parseInt(prompt("Please enter a VALID Number"));
}

while (guess !== answer) {
	if (guess > answer + 1) {
		console.log(`${guess} is too high`);
	} else if (guess < answer - 1) {
		console.log(`${guess} is too low`);
	} else if (guess === answer + 1) {
		console.log(`${guess} is high`);
	} else if (guess === answer - 1) {
		console.log(`${guess} is low`);
	}
	guess = parseInt(prompt("Please guess a number !"));
	if (Number.isNaN(guess)) {
		guess = parseInt(prompt("Please enter a VALID Number"));
	}
}
alert(`YOU WIN !`);
