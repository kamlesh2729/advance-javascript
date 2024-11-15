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
const vowels = ["a", "e", "i", "o", "u"];
let vowelscount = 0;
for (let char of senTence) {   
    if (vowels.includes(char)) {
        console.log(vowelscount++);
    }
}

//Q7. write a function to find the longest number in an array?
const Numbers = [12, 10, 2, 4, 6, 64, 8, 9, 1, 7];

//Q8. write a function to check if a given number is prime or not?

//Q9. write a function to calculate the factorial of a number?

//Q10. write a program to remove all whitespace characters from a string?