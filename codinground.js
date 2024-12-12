//Q1. write a function that returns the reverse of a string?
const worD = "Kamlesh";
    const resWord = worD.toLowerCase().split("").reverse().join("");
    console.log(resWord);

//Q2. write a function that returns the longest word in the sentence?
const sentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit Provident temporibus."

let longWord = '';
let sentenceword = sentence.split(" ");

for (let i = 0; i < sentenceword.length; i++) {
    if (sentenceword[i].length > longWord.length) {
        longWord = sentenceword[i];
    }
}

console.log(longWord);

//Q3. write a function that checks whether a given string is a palindrome or not?
//*word is palindrom or notpalindrom
function Checkpalindrom() {
    const word = document.getElementById("inputText").value;
    const Result = document.querySelector("[data-result]");

    let Resword = word.toLowerCase().split("").reverse().join("");
    if (word == Resword) {
        
        Result.append(`${word} word is palindrome`);
    } else {
        Result.append(`${word} word is not palindrome`);
    }
}

const Word = "scss"
    const resword = Word.toLowerCase().split("").reverse().join("");
    console.log(resword);

    if (Word == resword) {
        console.log(`${Word}"word is palindrome"`);

    } else {
        console.log(`${Word} "word is not palindrome"`);
    }

//Q4. write a function to remove duplicate elements from an array?
//*remove duplicate 
const fruties = ["apple", "orange", "grape", "watermelan","mango", "apple", "banana", "grape", "kiwi", "apple" ]
let uniarr = [];

for (let item of fruties) {
    if (!uniarr.includes(item)) {
        uniarr.push(item);
    }
}
console.log(uniarr);
// fruties.forEach((fruti, index) => {
//     console.log(fruti);
// })

//Q5. write a function that checks whether two strings are anagrams or not ?

//Q6. write a function that returns of vowels in string?

const senTence = "Lorem ipsum dolor sit amet consectetur adipisicing elit";
const vowels = "aeiou";
let vowelscount = 0;
for (let i = 0; i < senTence.length; i++) {
    if (vowels.includes(senTence[i])) {
    vowelscount++;
    }
    console.log(vowelscount);
}

//Q7. write a function to find the largest number in an array?

function LongestNum() {
    const array = [10, 13, 2, 4, 6, 64, 8, 9, 1, 7];
    let num = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[1] > num) {
        console.log(array[1]);
        // console.log(num);
        }
        
    }
}
LongestNum();

//Q8. write a function to check if a given number is prime or not?
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

    if (number === 1) {
      console.log("1 is neither prime nor composite number.");
    }
    // check if number is greater than 1
    else if (number > 1) {
      // looping through 2 to number/2
      for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        console.log(`${number} is a prime number`);
      } else {
        console.log(`${number} is a not prime number`);
      }
    }

    // check if number is less than 1
    else {
      console.log("The number is not a prime number.");
    }


//Q9. write a function to calculate the factorial of a number?
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(6));


//Q10. write a program to remove all whitespace characters from a string?