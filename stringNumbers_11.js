/**
 * JavaScript Numbers (জাভাস্ক্রিপ্ট সংখ্যা)
JavaScript-এ Numbers (সংখ্যা) হলো একটি ডাটা টাইপ যা সংখ্যাসূচক মান সংরক্ষণ ও গণনা করার জন্য ব্যবহৃত হয়। JavaScript-এ সংখ্যা দুটি ফরম্যাটে থাকতে পারে:

Integer (পূর্ণসংখ্যা) → যেমন: 10, -25, 1000
Floating Point (দশমিক সংখ্যা) → যেমন: 3.14, -0.99, 2.5
JavaScript-এ সংখ্যা ঘোষণা
javascript
Copy
Edit
let num1 = 25;       // পূর্ণসংখ্যা (Integer)
let num2 = 12.5;     // দশমিক সংখ্যা (Floating Point)
JavaScript Number-এর বৈশিষ্ট্য
একই টাইপ: JavaScript-এ Integer এবং Floating Point উভয়ই number টাইপ হিসাবে গণ্য হয়।
Infinity: অনেক বড় বা ছোট সংখ্যার জন্য Infinity এবং -Infinity ব্যবহার করা হয়।
NaN (Not a Number): যখন কোনো সংখ্যা গণনা সম্ভব নয়, তখন এটি NaN দেখায়।
উদাহরণ:
javascript
Copy
Edit
console.log(10 / 0);   // Infinity
console.log("abc" / 5); // NaN
Number Methods (সংখ্যা সম্পর্কিত মেথড)
JavaScript-এ সংখ্যা নিয়ে কাজ করার জন্য কিছু বিল্ট-ইন মেথড রয়েছে:

toFixed(n): দশমিকের পরে নির্দিষ্ট সংখ্যক সংখ্যা দেখায়।
toString(): সংখ্যা থেকে স্ট্রিং-এ রূপান্তর করে।
parseInt(): পূর্ণসংখ্যা (Integer) রূপান্তর করে।
parseFloat(): দশমিক সহ সংখ্যা রূপান্তর করে।
উদাহরণ:
javascript
Copy
Edit
let num = 10.5678;

console.log(num.toFixed(2));   // "10.57"
console.log(num.toString());   // "10.5678"
console.log(parseInt("100px")); // 100
console.log(parseFloat("3.14test")); // 3.14
সংখ্যার সাথে গণিত (Math Operations)
JavaScript-এ বিভিন্ন গাণিতিক অপারেশন করা যায়, যেমন:

+ (যোগ)
- (বিয়োগ)
* (গুণ)
/ (ভাগ)
% (মডুলো - ভাগশেষ)
উদাহরণ:
javascript
Copy
Edit
let a = 20;
let b = 5;

console.log(a + b);  // 25
console.log(a - b);  // 15
console.log(a * b);  // 100
console.log(a / b);  // 4
console.log(a % b);  // 0
সংখ্যার জন্য Math অবজেক্ট
JavaScript-এ Math Object ব্যবহার করে উন্নত গাণিতিক অপারেশন করা যায়:

Math.round(2.6) → ৩ এ পরিণত করবে।
Math.ceil(2.3) → উপরের পূর্ণসংখ্যা (3) নিবে।
Math.floor(2.9) → নিচের পূর্ণসংখ্যা (2) নিবে।
Math.random() → 0 থেকে 1 এর মধ্যে একটি র্যান্ডম সংখ্যা তৈরি করবে।
Math.max(10, 20, 30) → সর্বোচ্চ সংখ্যা দিবে।
Math.min(10, 20, 30) → সর্বনিম্ন সংখ্যা দিবে।
উদাহরণ:
javascript
Copy
Edit
console.log(Math.round(2.6));  // 3
console.log(Math.ceil(2.3));   // 3
console.log(Math.floor(2.9));  // 2
console.log(Math.random());    // 0.0 - 1.0 এর মধ্যে র্যান্ডম সংখ্যা
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10
JavaScript-এ সংখ্যা সংক্রান্ত কিছু গুরুত্বপূর্ণ তথ্য
✅ JavaScript-এ শুধুমাত্র একটি সংখ্যা টাইপ আছে (Integer এবং Float আলাদা নয়)।
✅ 64-bit floating point format ব্যবহার করা হয়, যা বড় সংখ্যাও সংরক্ষণ করতে পারে।
✅ সংখ্যা সংক্রান্ত গণনায় Infinity, NaN এবং Math অবজেক্ট ব্যবহার করা যায়।
 */



const number1 = 1000;
const num2 = 3000;
const num3 = 4000;
const num5 = 1000000;

const allNumbers = number1 + num2 + num3 + num5
const n = allNumbers * 1000

const nz = n / 2000
const allZ = nz - 100000;

console.log(allZ)


if (allZ > 1000) {

    console.log('math operation is successfull')

} else {

    console.log('math operation is !successfull')

}
