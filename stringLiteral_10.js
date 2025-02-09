/**
 * JavaScript Template Literals (ব্যাকটিক স্ট্রিং) কি?
JavaScript Template Literals হল একটি নতুন স্ট্রিং সিনট্যাক্স যা ES6 (ECMAScript 2015) এ চালু হয়েছে। এটি ব্যাকটিক (``) চিহ্ন ব্যবহার করে লেখা হয় এবং স্বাভাবিক স্ট্রিংয়ের চেয়ে বেশি সুবিধাজনক।

Template Literals এর সুবিধা:
স্ট্রিং এর মধ্যে ভেরিয়েবল ইন্টারপোলেশন করা যায়
মাল্টি-লাইন স্ট্রিং সহজে ব্যবহার করা যায়
এক্সপ্রেশন ইনসার্ট করা যায়
১. স্ট্রিং এর মধ্যে ভেরিয়েবল যোগ করা (Interpolation)
আমরা সাধারণত প্লাস (+) অপারেটর ব্যবহার করে ভেরিয়েবলকে স্ট্রিং-এর সাথে যোগ করি। কিন্তু Template Literals ব্যবহার করলে ${} সিম্বল ব্যবহার করে সহজেই ভেরিয়েবল ইনসার্ট করা যায়।

🔹 পুরনো পদ্ধতি (Concatenation)

js
Copy
Edit
let name = "Rahim";
let age = 25;
let message = "My name is " + name + " and I am " + age + " years old.";
console.log(message);
আউটপুট:

pgsql
Copy
Edit
My name is Rahim and I am 25 years old.
🔹 Template Literals ব্যবহার করে (Modern way)

js
Copy
Edit
let name = "Rahim";
let age = 25;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
আউটপুট:

pgsql
Copy
Edit
My name is Rahim and I am 25 years old.
২. মাল্টি-লাইন স্ট্রিং (Multi-line String)
সাধারণভাবে মাল্টি-লাইন স্ট্রিং লিখতে হলে \n ব্যবহার করতে হয়, কিন্তু Template Literals ব্যবহার করলে এটি সহজ হয়ে যায়।

🔹 পুরনো পদ্ধতি:

js
Copy
Edit
let text = "This is line 1\n" +
           "This is line 2\n" +
           "This is line 3";
console.log(text);
🔹 Template Literals ব্যবহার করে:

js
Copy
Edit
let text = `This is line 1
This is line 2
This is line 3`;
console.log(text);
এখানে ব্যাকটিক (``) ব্যবহার করায় নতুন লাইন অটোমেটিক নেওয়া হয়, \n ব্যবহার করার দরকার নেই।

৩. এক্সপ্রেশন ইনসার্ট করা (Expression Evaluation)
Template Literals এর মাধ্যমে সরাসরি এক্সপ্রেশন লেখা যায়।

js
Copy
Edit
let a = 10;
let b = 20;
console.log(`The sum of ${a} and ${b} is ${a + b}`);
আউটপুট:

python
Copy
Edit
The sum of 10 and 20 is 30
উপসংহার
Template Literals ব্যাকটিক (``) ব্যবহার করে লেখা হয়।
এটি ভেরিয়েবল ইন্টারপোলেশন, মাল্টি-লাইন স্ট্রিং, এবং এক্সপ্রেশন ইনসার্ট করতে পারে।
এটি পুরনো স্ট্রিং কনক্যাটেনেশনের চেয়ে সহজ ও আধুনিক।
💡 সারসংক্ষেপ:

ফিচার	আগের পদ্ধতি	Template Literals
ভেরিয়েবল ইন্টারপোলেশন	+ ব্যবহার করে	${} ব্যবহার করে
মাল্টি-লাইন স্ট্রিং	\n ব্যবহার করতে হয়	সরাসরি নতুন লাইন দেওয়া যায়
এক্সপ্রেশন ইনসার্ট	+ ব্যবহার করতে হয়	${expression} ব্যবহার করা যায়
🚀 এখন আপনি JavaScript Template Literals ব্যবহার করে স্ট্রিং ম্যানিপুলেশন আরো সহজে করতে পারবেন! 🎉
 */

const Info = 'south asia'
const years = 1971;
const countryHelping = 'india'

const countryInfo = ` bangladesh is a best country in this 
world and this country is a super power in clothingText tiles 
this located in ${Info} and this country got in dependent
 in ${years} and for independent ${countryHelping} had help us `

console.log(countryInfo)
