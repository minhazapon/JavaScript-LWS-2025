/**
 * JavaScript এর Array Methods (জাভাস্ক্রিপ্ট অ্যারে মেথড)
JavaScript-এ Array Methods হলো বিল্ট-ইন ফাংশন যা অ্যারের উপর বিভিন্ন অপারেশন করতে সাহায্য করে, যেমন অ্যারের মান পরিবর্তন করা, নতুন মান যোগ করা, ফিল্টার করা, সাজানো ইত্যাদি। নিচে কিছু গুরুত্বপূর্ণ JavaScript Array Methods দেওয়া হলো:

১. push() – নতুন এলিমেন্ট যোগ করা (শেষে)
এই মেথড অ্যারের শেষে নতুন একটি বা একাধিক এলিমেন্ট যোগ করে এবং নতুন অ্যারের দৈর্ঘ্য রিটার্ন করে।

javascript
Copy
Edit
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits); // ["Apple", "Banana", "Mango"]
২. pop() – শেষের এলিমেন্ট মুছে ফেলা
এই মেথড অ্যারের শেষের এলিমেন্টকে সরিয়ে ফেলে এবং সেটি রিটার্ন করে।

javascript
Copy
Edit
let fruits = ["Apple", "Banana", "Mango"];
fruits.pop();
console.log(fruits); // ["Apple", "Banana"]
৩. unshift() – শুরুতে নতুন এলিমেন্ট যোগ করা
এই মেথড অ্যারের শুরুতে নতুন এলিমেন্ট যোগ করে এবং নতুন অ্যারের দৈর্ঘ্য রিটার্ন করে।

javascript
Copy
Edit
let fruits = ["Banana", "Mango"];
fruits.unshift("Apple");
console.log(fruits); // ["Apple", "Banana", "Mango"]
৪. shift() – শুরু থেকে এলিমেন্ট মুছে ফেলা
এই মেথড অ্যারের প্রথম এলিমেন্ট সরিয়ে ফেলে এবং সেটি রিটার্ন করে।

javascript
Copy
Edit
let fruits = ["Apple", "Banana", "Mango"];
fruits.shift();
console.log(fruits); // ["Banana", "Mango"]
৫. splice() – নির্দিষ্ট স্থানে এলিমেন্ট যোগ বা মুছে ফেলা
এই মেথড দিয়ে নির্দিষ্ট পজিশনে এলিমেন্ট যোগ বা মুছে ফেলা যায়।

javascript
Copy
Edit
let numbers = [1, 2, 3, 4, 5];
// ২য় ইন্ডেক্স থেকে ২টি এলিমেন্ট মুছে ফেলবে এবং "10" যোগ করবে
numbers.splice(2, 2, 10);
console.log(numbers); // [1, 2, 10, 5]
৬. slice() – নতুন অ্যারে তৈরি করা (পুরাতনটি পরিবর্তন না করে)
এই মেথড নির্দিষ্ট অংশ কেটে নিয়ে নতুন অ্যারে তৈরি করে।

javascript
Copy
Edit
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.slice(1, 4);
console.log(newNumbers); // [2, 3, 4]
৭. concat() – দুটি অ্যারে একত্রিত করা
এই মেথড দুটি বা একাধিক অ্যারে একত্রিত করে নতুন অ্যারে তৈরি করে।

javascript
Copy
Edit
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]
৮. indexOf() – নির্দিষ্ট মানের ইন্ডেক্স খুঁজে বের করা
এই মেথড দিয়ে কোনো মানের ইন্ডেক্স (স্থান) খুঁজে বের করা যায়।

javascript
Copy
Edit
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.indexOf("Orange")); // -1 (পাওয়া যায়নি)
৯. includes() – কোনো মান আছে কিনা চেক করা
এই মেথড নির্দিষ্ট মান অ্যারেতে আছে কিনা তা true বা false হিসেবে রিটার্ন করে।

javascript
Copy
Edit
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.includes("Mango")); // true
console.log(fruits.includes("Orange")); // false
১০. forEach() – প্রতিটি এলিমেন্টের উপর লুপ চালানো
এই মেথড প্রতিটি এলিমেন্টের উপর আলাদা আলাদা অপারেশন চালাতে সাহায্য করে।

javascript
Copy
Edit
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
  console.log(num * 2);
});
// আউটপুট: 2, 4, 6, 8, 10
১১. map() – প্রতিটি এলিমেন্টের উপর পরিবর্তন করে নতুন অ্যারে তৈরি করা
এই মেথড প্রতিটি এলিমেন্টের উপর নির্দিষ্ট অপারেশন চালিয়ে নতুন অ্যারে তৈরি করে।

javascript
Copy
Edit
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]
১২. filter() – নির্দিষ্ট শর্ত অনুযায়ী নতুন অ্যারে তৈরি করা
এই মেথড নির্দিষ্ট কন্ডিশন অনুযায়ী কিছু এলিমেন্ট নিয়ে নতুন অ্যারে তৈরি করে।

javascript
Copy
Edit
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
১৩. reduce() – সব এলিমেন্টকে একত্রিত করে একটি মান তৈরি করা
এই মেথড অ্যারের সমস্ত এলিমেন্টকে একত্র করে একটি মান রিটার্ন করে।

javascript
Copy
Edit
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15
১৪. sort() – অ্যারে সাজানো (বড় থেকে ছোট বা ছোট থেকে বড়)
এই মেথড অ্যারের এলিমেন্টগুলোকে সাজায় (ডিফল্টভাবে স্ট্রিং অনুযায়ী)।

javascript
Copy
Edit
let numbers = [4, 2, 9, 1, 5];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 4, 5, 9]
১৫. reverse() – অ্যারের ক্রম উল্টে দেওয়া
এই মেথড অ্যারের এলিমেন্টগুলোর ক্রম উল্টে দেয়।

javascript
Copy
Edit
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]
উপসংহার
JavaScript-এ Array Methods অনেক গুরুত্বপূর্ণ এবং কার্যকরী। এগুলো ব্যবহার করে ডাটা ম্যানিপুলেশন খুব সহজে করা যায়। আপনি যদি JavaScript অ্যারে ভালোভাবে শিখতে চান, তাহলে এই মেথডগুলো বেশি বেশি অনুশীলন করুন।
 */

//১. push() – নতুন এলিমেন্ট যোগ করা (শেষে)

const skills = ['javaScript', 'react.js', 'next.js', 'DSA', 'problem solving']

const s1 = skills.push("web development")

console.log(skills)

//২. pop() – শেষের এলিমেন্ট মুছে ফেলা

const names = ["apon", "sabbir", "sopnil", "anas", "nahid"]

const allNames = names.pop();

console.log(allNames)

//৩. unshift() – শুরুতে নতুন এলিমেন্ট যোগ করা

let products = ["chal", "dal", 'ghee', 'butter', 'panir', 'ruti']

products.unshift("tel")

console.log(products)

//৪. shift() – শুরু থেকে এলিমেন্ট মুছে ফেলা

let taka = ["1taka", '2taka', '3taka', '500taka']

taka.shift()

console.log(taka)

//৫. splice() – নির্দিষ্ট স্থানে এলিমেন্ট যোগ বা মুছে ফেলা

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.splice(5, 5, 200)

console.log(numbers)

//৬. slice() – নতুন অ্যারে তৈরি করা (পুরাতনটি পরিবর্তন না করে)

let allNumbers = [2, 3, 5, 6, 8]

let slicenumber = allNumbers.slice(2, 8)

console.log(slicenumber)

//৭. concat() – দুটি অ্যারে একত্রিত করা

let a = [12, 34, 55, 5]

let b = [65, 345, 35, 5]

let ab = a.concat(b)

console.log(ab)

//৮. indexOf() – নির্দিষ্ট মানের ইন্ডেক্স খুঁজে বের করা

let fruts = ["apple", 'orange', 'jack', 'mango']

console.log(fruts.indexOf("jack"))

//৯. includes() – কোনো মান আছে কিনা চেক করা 

let ins = ["apon", "minhaz", "moutushi", "ponny"]

console.log(ins.includes("ponny"))

//১০. forEach() – প্রতিটি এলিমেন্টের উপর লুপ চালানো 

let nums = [2, 4, 6, 8, 10, 12, 14, 16, 18]

nums.forEach(a => { console.log(a + 9) })


