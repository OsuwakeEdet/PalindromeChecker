let word = "Madam";
word = word.toLowerCase();


// Remove non-alphanumeric characters and convert to lowercase
let cleanedStr = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

// Reverse the cleaned string
let reversedStr = cleanedStr.split("").reverse().join("");

// Check if the cleaned string is the same as its reverse
if (cleanedStr === reversedStr) {
    console.log(word, "is a palindrome");
} else {
    console.log(word, "is NOT a palindrome");
}