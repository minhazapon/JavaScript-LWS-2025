
/**
 * JavaScript let কীওয়ার্ড
let হলো JavaScript-এর একটি কীওয়ার্ড, যা ভেরিয়েবল ডিক্লেয়ার করতে ব্যবহৃত হয়। এটি var এর মতো কাজ করলেও কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

🔹 let এর বৈশিষ্ট্য:
Block Scope:
let ব্লকের মধ্যে সীমাবদ্ধ থাকে, যার মানে হলো এটি {} ব্র্যাকেটের বাইরে অ্যাক্সেস করা যায় না।
Redeclaration সম্ভব নয়:
একই স্কোপের মধ্যে let দিয়ে একই নামের ভেরিয়েবল আবার ডিক্লেয়ার করা যায় না।
Hoisting কিন্তু Initialization নেই:
let hoisting হয়, কিন্তু এটি undefined সেট হয় না, বরং ReferenceError দেয়।
Reassign করা যায়:
আপনি let দিয়ে ডিক্লেয়ার করা ভেরিয়েবলের মান পরিবর্তন করতে পারবেন।
🎯 উদাহরণ:
javascript
Copy
Edit
let name = "Rahim";
console.log(name); // Output: Rahim

name = "Karim"; 
console.log(name); // Output: Karim
🔹 Block Scope Example

javascript
Copy
Edit
if (true) {
    let age = 25;
    console.log(age); // Output: 25
}
console.log(age); // Error: age is not defined
🔹 Redeclaration Error Example

javascript
Copy
Edit
let x = 10;
let x = 20; // Error: Identifier 'x' has already been declared
🚀 কেন var এর পরিবর্তে let ব্যবহার করা উচিত?
✅ let ব্লক স্কোপ মেনে চলে, তাই এটি নিরাপদ।
✅ এটি পুনরায় ডিক্লেয়ার করা যায় না, ফলে বাগ ধরা সহজ হয়।
✅ var এর মতো hoisting সমস্যা তৈরি করে না।

সারসংক্ষেপ: let আধুনিক JavaScript-এ বেশি ব্যবহৃত হয়, কারণ এটি নিরাপদ, স্কোপ-নির্ভর, এবং বাগ-মুক্ত কোড লিখতে সহায়ক। 🚀
 * 
 */

let name1 = "minhazul abedin apon"
console.log(name1)

let number = 1950374409
console.log(number)

let isJavaScriptDeveloperApon = true
console.log(isJavaScriptDeveloperApon)

let OneMan = (a, b) => {

    let all = a + b
    let X = 10 + all
    console.log(X)

}

OneMan(12, 20)


