/**
 * JavaScript-এ ডাটা টাইপ হলো ভেরিয়েবলে যে ধরনের মান রাখা যায়, তার ধরন বা প্রকৃতি। JavaScript হল dynamically typed language, যার মানে আপনি ভেরিয়েবলের ধরন (data type) নির্দিষ্টভাবে উল্লেখ না করেও সেটাতে বিভিন্ন ধরনের মান রাখতে পারেন।

JavaScript-এর প্রধান Data Types (ডাটা টাইপ)
JavaScript-এ দুটি প্রধান ডাটা টাইপ রয়েছে:

Primitive Data Types (প্রিমিটিভ ডাটা টাইপ)
Non-Primitive (Reference) Data Types (নন-প্রিমিটিভ/রেফারেন্স ডাটা টাইপ)
1. Primitive Data Types (প্রিমিটিভ ডাটা টাইপ)
এগুলি immutable (পরিবর্তনযোগ্য নয়) এবং সরাসরি মান সংরক্ষণ করে।

Data Type	বর্ণনা	উদাহরণ
String	টেক্সট বা অক্ষরের সংগ্রহ	"Hello", 'Bangladesh'
Number	সব ধরনের সংখ্যা (integer, float)	10, 3.14
Boolean	সত্য (true) বা মিথ্যা (false)	true, false
Undefined	যখন কোনো ভেরিয়েবলে মান দেওয়া হয়নি	let x; (x হল undefined)
Null	ইচ্ছাকৃতভাবে খালি মান সেট করা	let y = null;
BigInt	বড় সংখ্যা সংরক্ষণ করতে ব্যবহৃত হয়	BigInt(9007199254740991)
Symbol	ইউনিক মান তৈরি করতে ব্যবহৃত হয়	Symbol("id")
2. Non-Primitive (Reference) Data Types (নন-প্রিমিটিভ/রেফারেন্স ডাটা টাইপ)
এগুলি mutable (পরিবর্তনযোগ্য) এবং reference (স্মৃতির ঠিকানা) হিসেবে সংরক্ষণ করা হয়।

Data Type	বর্ণনা	উদাহরণ
Object	এক বা একাধিক মান সংরক্ষণ করে key-value আকারে	{ name: "Rahim", age: 25 }
Array	একাধিক মানকে লিস্ট আকারে রাখে	[1, 2, 3, 4]
Function	কোডের ব্লক যা একাধিকবার ব্যবহার করা যায়	function hello() { return "Hello World"; }
JavaScript Data Type চেক করার উপায়
JavaScript-এ typeof অপারেটর ব্যবহার করে ডাটা টাইপ চেক করা যায়।

javascript
Copy
Edit
console.log(typeof "Hello");   // Output: string
console.log(typeof 10);        // Output: number
console.log(typeof true);      // Output: boolean
console.log(typeof undefined); // Output: undefined
console.log(typeof null);      // Output: object (Bug in JavaScript!)
console.log(typeof {name: "John", age: 30}); // Output: object
console.log(typeof [1, 2, 3]); // Output: object (Array is a type of object)
console.log(typeof function(){}); // Output: function
সংক্ষেপে
Primitive Data Types: String, Number, Boolean, Undefined, Null, BigInt, Symbol
Non-Primitive Data Types: Object, Array, Function
এই হলো JavaScript-এর Data Types (ডাটা টাইপ) সম্পর্কে বিস্তারিত ব্যাখ্যা। 😊
 *
 */


//data types of javaScript


//string

const name = "minhazul abedin apon"

console.log(name)

//number

const number = 1950374409

console.log(number)

//boolean 

const isAponMuslim = true

console.log(isAponMuslim)

//undefined 

const WhatTrue = undefined

console.log(WhatTrue)

//null 

const weAreWhat = null

console.log(weAreWhat)

//function 

let bangladesh = (a, b) => {
    let X = a + b
    console.log(X)
}

bangladesh(20, 30)

//object

const address = {

    name: 'minhaz',
    number: 1950374409,
    country: 'jhenaidah',
    company: 'toptal'

}
console.log(address.company, address.country, address.name, address.number)

//array 
const DoMath = [12, 234, 34, 35, 56, 3566, 35]

console.log(DoMath)