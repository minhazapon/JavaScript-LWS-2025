/**
 * JavaScript Strings (স্ট্রিং) কী?
JavaScript-এ String (স্ট্রিং) হল অক্ষরের (character) একটি ক্রম যা উদ্ধৃতি চিহ্নের (" " বা ' ') মধ্যে রাখা হয়। এটি মূলত টেক্সট ডাটা সংরক্ষণ এবং পরিচালনার জন্য ব্যবহৃত হয়।

JavaScript-এ String ডিক্লারেশন
স্ট্রিং তৈরি করার জন্য তিনটি পদ্ধতি রয়েছে:

Single quotes (' ')
Double quotes (" ")
Backticks (Template literals - )
উদাহরণ:
javascript
Copy
Edit
let name1 = "Hello, World!";  // Double quotes
let name2 = 'Hello, JavaScript!';  // Single quotes
let name3 = `Hello, ${name1}`;  // Backticks (Template literals)
String এর গুরুত্বপূর্ণ বৈশিষ্ট্য
ইমিউটেবল (Immutable):
একবার স্ট্রিং তৈরি হলে তার মান পরিবর্তন করা যায় না।
ইনডেক্সড (Indexed):
স্ট্রিং-এর প্রতিটি ক্যারেক্টার ০ থেকে গণনা করা হয়।
javascript
Copy
Edit
let text = "JavaScript";
console.log(text[0]); // "J"
console.log(text[4]); // "S"
String Methods (কিছু গুরুত্বপূর্ণ মেথড)
JavaScript স্ট্রিং ম্যানিপুলেশনের জন্য অনেক বিল্ট-ইন মেথড প্রদান করে।

length → স্ট্রিং-এর দৈর্ঘ্য নির্ধারণ করতে
javascript
Copy
Edit
let str = "Hello World!";
console.log(str.length); // 12
toUpperCase() & toLowerCase() → বড় বা ছোট হাতের অক্ষরে রূপান্তর করতে
javascript
Copy
Edit
console.log(str.toUpperCase()); // "HELLO WORLD!"
console.log(str.toLowerCase()); // "hello world!"
trim() → স্ট্রিং-এর শুরু ও শেষের ফাঁকা স্থান (whitespace) সরাতে
javascript
Copy
Edit
let str2 = "   Hello!   ";
console.log(str2.trim()); // "Hello!"
slice(start, end) → নির্দিষ্ট অংশ কেটে বের করতে
javascript
Copy
Edit
console.log(str.slice(0, 5)); // "Hello"
replace(old, new) → স্ট্রিং-এর নির্দিষ্ট অংশ পরিবর্তন করতে
javascript
Copy
Edit
console.log(str.replace("World", "JavaScript")); // "Hello JavaScript!"
split() → স্ট্রিংকে ভাগ করে অ্যারে বানাতে
javascript
Copy
Edit
let words = "apple,banana,grape";
console.log(words.split(",")); // ["apple", "banana", "grape"]
Template Literals (ব্যাকটিক্স ব্যবহার)
Template literals ব্যবহার করে স্ট্রিং-এর মধ্যে ভেরিয়েবল ও এক্সপ্রেশন যোগ করা যায়।

javascript
Copy
Edit
let name = "John";
let age = 25;
let info = `My name is ${name} and I am ${age} years old.`;
console.log(info);
// Output: "My name is John and I am 25 years old."
সংক্ষেপে JavaScript Strings
✔️ স্ট্রিং হল টেক্সট ডাটা।
✔️ এটি Single (' '), Double (" "), বা Backticks ( ) দিয়ে লেখা যায়।
✔️ বিভিন্ন মেথড ব্যবহার করে স্ট্রিং পরিবর্তন ও বিশ্লেষণ করা যায়।
✔️ Template literals ব্যবহার করে স্ট্রিং আরও শক্তিশালী করা যায়।

কোনো প্রশ্ন থাকলে বলুন! 😊 🚀
 */

const name1 = 'minhazul abedin apon';
const name2 = "farzana moutushi ponny";
const name3 = ` minhazul abedin apon is a software developer of toptal based in jheniadah bangladesh `

console.log(name1)
console.log(name2)
console.log(name3)