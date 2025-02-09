/**
 * JavaScript Arrays কি? (বাংলায় ব্যাখ্যা)
JavaScript-এ Array (অ্যারে) হলো একধরনের ডাটা স্ট্রাকচার, যেখানে একাধিক মান (value) একসাথে সংরক্ষণ করা যায়। এটি একটি অর্ডারড লিস্ট, যেখানে ইনডেক্স (index) ব্যবহার করে মানগুলো সংরক্ষণ ও অ্যাক্সেস করা হয়।

JavaScript-এ Array কিভাবে কাজ করে?
একটি অ্যারে অনেকগুলো মানকে একসাথে একটি ভেরিয়েবলের মধ্যে সংরক্ষণ করতে দেয়। JavaScript-এ অ্যারেগুলো 0 ভিত্তিক ইনডেক্স (zero-based index) অনুসারে কাজ করে, অর্থাৎ প্রথম উপাদানের (element) ইনডেক্স 0, দ্বিতীয়টির 1, এভাবে ক্রমানুসারে চলতে থাকে।

JavaScript-এ Array ডিক্লেয়ার করার উপায়:
JavaScript-এ অ্যারে তৈরি করার ৩টি সাধারণ উপায় রয়েছে:

1. Square Brackets (সাধারণ ও সর্বাধিক ব্যবহৃত পদ্ধতি)
javascript
Copy
Edit
let fruits = ["Apple", "Mango", "Banana", "Orange"];
console.log(fruits);  // ["Apple", "Mango", "Banana", "Orange"]
2. new Array() কন্সট্রাক্টর ব্যবহার করে
javascript
Copy
Edit
let numbers = new Array(10, 20, 30, 40);
console.log(numbers);  // [10, 20, 30, 40]
3. খালি অ্যারে তৈরি করা (Empty Array)
javascript
Copy
Edit
let emptyArray = [];
console.log(emptyArray);  // []
JavaScript Array-এর কিছু গুরুত্বপূর্ণ বৈশিষ্ট্য
ডাইনামিক সাইজ – অ্যারেতে নতুন উপাদান যোগ করা বা সরানো সহজ।
মিশ্র ডাটা টাইপ – অ্যারেতে বিভিন্ন ধরনের মান সংরক্ষণ করা যায় (সংখ্যা, স্ট্রিং, বুলিয়ান ইত্যাদি)।
ইনডেক্সড অ্যাক্সেস – প্রতিটি উপাদান ইনডেক্স দ্বারা নির্ধারিত হয়।
javascript
Copy
Edit
let mixedArray = ["Hello", 42, true, { name: "John" }];
console.log(mixedArray[0]);  // "Hello"
console.log(mixedArray[3]);  // { name: "John" }
JavaScript Array এর কিছু গুরুত্বপূর্ণ মেথড (Methods)
মেথড	কাজ
push()	অ্যারের শেষে নতুন উপাদান যোগ করে
pop()	অ্যারের শেষ থেকে উপাদান সরিয়ে ফেলে
shift()	অ্যারের শুরু থেকে উপাদান সরিয়ে ফেলে
unshift()	অ্যারের শুরুতে নতুন উপাদান যোগ করে
length	অ্যারের মোট উপাদানের সংখ্যা দেখায়
slice()	নির্দিষ্ট অংশ কপি করে নতুন অ্যারে তৈরি করে
splice()	নির্দিষ্ট অংশ মুছে বা পরিবর্তন করে
উদাহরণ:
javascript
Copy
Edit
let fruits = ["Mango", "Banana", "Apple"];
fruits.push("Orange");  // নতুন উপাদান যোগ করা
console.log(fruits);  // ["Mango", "Banana", "Apple", "Orange"]

fruits.pop();  // শেষ উপাদান মুছে ফেলা
console.log(fruits);  // ["Mango", "Banana", "Apple"]
উপসংহার
JavaScript-এ Array হলো একাধিক উপাদান সংরক্ষণের একটি সহজ ও কার্যকর উপায়। এটি বিভিন্ন মেথড ও ফিচারের মাধ্যমে খুবই শক্তিশালী ডাটা স্ট্রাকচার হিসেবে ব্যবহৃত হয়।

আপনার যদি আরও প্রশ্ন থাকে, জানাতে পারেন!
 */


//1. Square Brackets (সাধারণ ও সর্বাধিক ব্যবহৃত পদ্ধতি)

const nameZ = ["apon", "alamin", "limon", "munna"]

console.log(nameZ)

//new Array() কন্সট্রাক্টর ব্যবহার করে

const arrayNumber = new Array(12, 32434, 454, 455, 55)

console.log(arrayNumber)


const information = ["apon", "age:23", true, { country: 'bangladesh' }]

console.log(information[0])
console.log(information[1])
console.log(information[2])
console.log(information[3].country)