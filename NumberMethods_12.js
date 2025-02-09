/**
 * JavaScript Number Methods (JavaScript সংখ্যার মেথডসমূহ)
JavaScript-এ Number Methods হল বিল্ট-ইন ফাংশন যা সংখ্যা নিয়ে বিভিন্ন ধরণের অপারেশন সম্পাদন করতে ব্যবহৃত হয়। এই মেথডগুলো সংখ্যা পরিবর্তন, রূপান্তর, গাণিতিক গণনা ইত্যাদির জন্য সাহায্য করে।

প্রচলিত কিছু Number Methods:
1. toString() – সংখ্যা থেকে স্ট্রিং রূপান্তর
এই মেথডটি একটি সংখ্যাকে স্ট্রিং হিসাবে রূপান্তর করে।

javascript
Copy
Edit
let num = 100;
console.log(num.toString());  // Output: "100"
2. toFixed() – নির্দিষ্ট দশমিকের পরিমাণ সেট করা
এই মেথডটি একটি সংখ্যা নির্দিষ্ট সংখ্যক দশমিক স্থানে ফিক্সড করে।

javascript
Copy
Edit
let num = 5.6789;
console.log(num.toFixed(2));  // Output: "5.68"
3. toPrecision() – সংখ্যা নির্দিষ্ট দৈর্ঘ্যে রূপান্তর করা
এই মেথডটি সংখ্যাকে একটি নির্দিষ্ট দৈর্ঘ্যের (digits) মধ্যে সীমাবদ্ধ করে।

javascript
Copy
Edit
let num = 123.456;
console.log(num.toPrecision(4));  // Output: "123.5"
4. parseInt() – স্ট্রিং থেকে পূর্ণসংখ্যা (Integer) পাওয়া
এই মেথডটি একটি স্ট্রিং থেকে পূর্ণসংখ্যা বের করে।

javascript
Copy
Edit
let num = "100.99";
console.log(parseInt(num));  // Output: 100
5. parseFloat() – স্ট্রিং থেকে দশমিক সংখ্যা (Float) পাওয়া
এই মেথডটি একটি স্ট্রিং থেকে দশমিক সংখ্যাটি বের করে।

javascript
Copy
Edit
let num = "100.99";
console.log(parseFloat(num));  // Output: 100.99
6. isNaN() – এটি সংখ্যা কিনা চেক করা
isNaN() মেথডটি চেক করে কোনো মান সংখ্যা নয় (NaN - Not a Number) কিনা।

javascript
Copy
Edit
console.log(isNaN(100));    // Output: false
console.log(isNaN("Hello")); // Output: true
7. Number() – স্ট্রিং বা অন্যান্য ডাটাকে সংখ্যা বানানো
এই মেথডটি একটি স্ট্রিং বা অন্য ডাটাকে নম্বরে রূপান্তর করে।

javascript
Copy
Edit
console.log(Number("123"));   // Output: 123
console.log(Number("123.45"));// Output: 123.45
console.log(Number("Hello"));// Output: NaN
8. Math.round() – নিকটতম পূর্ণসংখ্যা বের করা
javascript
Copy
Edit
console.log(Math.round(4.6));  // Output: 5
console.log(Math.round(4.4));  // Output: 4
9. Math.ceil() – উপরের দিকে পূর্ণসংখ্যায় রূপান্তর করা
javascript
Copy
Edit
console.log(Math.ceil(4.2));  // Output: 5
console.log(Math.ceil(7.8));  // Output: 8
10. Math.floor() – নিচের দিকে পূর্ণসংখ্যায় রূপান্তর করা
javascript
Copy
Edit
console.log(Math.floor(4.9));  // Output: 4
console.log(Math.floor(7.1));  // Output: 7
উপসংহার
JavaScript-এ Number Methods ব্যবহার করে আমরা সহজেই সংখ্যা নিয়ে বিভিন্ন অপারেশন করতে পারি, যেমন দশমিক সংখ্যা সীমিত করা, স্ট্রিং থেকে সংখ্যা বের করা, এবং সংখ্যা গোল করা।
 */

//toString()
let num1 = 1000;

console.log(num1.toString())

//toFixed() – নির্দিষ্ট দশমিকের পরিমাণ সেট করা

let num2 = 70.8987

console.log(num2.toFixed(2))

//toPrecision() – সংখ্যা নির্দিষ্ট দৈর্ঘ্যে রূপান্তর করা

let num3 = 90000.786

console.log(num3.toPrecision(6))

//parseInt() – স্ট্রিং থেকে পূর্ণসংখ্যা (Integer) পাওয়া

let num4 = "200202"

console.log(parseInt(num4))

// parseFloat() – স্ট্রিং থেকে দশমিক সংখ্যা (Float) পাওয়া

let nums5 = "2020440.102828"

console.log(parseFloat(nums5))

//isNaN() – এটি সংখ্যা কিনা চেক করা

let num = 100

console.log(isNaN(num))

//Number() – স্ট্রিং বা অন্যান্য ডাটাকে সংখ্যা বানানো

let ABC = "19990"

console.log(Number(ABC))

//Math.round() – নিকটতম পূর্ণসংখ্যা বের করা

let mr = 7.9

console.log(Math.round(mr))

//Math.ceil() – উপরের দিকে পূর্ণসংখ্যায় রূপান্তর করা

let mc = 3.7

console.log(Math.ceil(mc))

// Math.floor() – নিচের দিকে পূর্ণসংখ্যায় রূপান্তর করা

let mf = 5.8

console.log(Math.floor(mf))