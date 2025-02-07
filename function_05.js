
/**
 * JavaScript Function কী?
JavaScript-এ function হলো একধরনের ব্লক যা নির্দিষ্ট একটি কাজ সম্পন্ন করতে ব্যবহৃত হয়। একবার function তৈরি করলে, সেটিকে বারবার ব্যবহার করা যায়, ফলে কোড পুনরায় লেখার প্রয়োজন হয় না।

Function লেখার নিয়ম
একটি function লেখার জন্য নিম্নলিখিত ধাপ অনুসরণ করতে হয়:

function কীওয়ার্ড ব্যবহার করতে হয়।
function-এর নাম দিতে হয়।
() ব্র্যাকেটের মধ্যে প্যারামিটার (যদি থাকে) দিতে হয়।
{} ব্রেসের মধ্যে function-এর কাজ (কোড) লিখতে হয়।
function-কে কল (invoke) করতে হয়, না হলে এটি কাজ করবে না।
উদাহরণ ১: সহজ একটি Function
javascript
Copy
Edit
function sayHello() {
    console.log("Hello, World!");
}

// Function কল করা
sayHello(); 
📌 ব্যাখ্যা:

sayHello নামের একটি function তৈরি করা হয়েছে।
এটি কল করা হলে Hello, World! প্রিন্ট করবে।
উদাহরণ ২: প্যারামিটারসহ Function
javascript
Copy
Edit
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Function কল করা
greet("Rahim"); 
greet("Karim");
📌 ব্যাখ্যা:

name নামে একটি প্যারামিটার আছে।
যখন function কল করা হয়, তখন name-এর মান প্রদান করা হয়।
আউটপুট:
Copy
Edit
Hello, Rahim!
Hello, Karim!
উদাহরণ ৩: Return যুক্ত Function
javascript
Copy
Edit
function add(a, b) {
    return a + b;
}

// Function কল করে ফলাফল সংরক্ষণ করা
let result = add(5, 10);
console.log(result); // আউটপুট: 15
📌 ব্যাখ্যা:

add function দুটি সংখ্যা যোগ করে return করে।
result ভেরিয়েবলে এটি সংরক্ষণ করে console.log() দ্বারা আউটপুট দেখানো হয়েছে।
উদাহরণ ৪: Arrow Function (সংক্ষিপ্তভাবে Function লেখা)
javascript
Copy
Edit
const multiply = (x, y) => x * y;

console.log(multiply(4, 5)); // আউটপুট: 20
📌 ব্যাখ্যা:

=> (arrow) ব্যবহার করে ছোট করে function লেখা হয়েছে।
এটি x ও y-এর গুণফল রিটার্ন করবে।
উপসংহার
JavaScript-এর function প্রোগ্রামিংকে আরও সহজ ও পুনরায় ব্যবহারযোগ্য করে তোলে। এগুলোর মাধ্যমে বড় বড় প্রোগ্রামকে ছোট ছোট অংশে ভাগ করে ম্যানেজ করা যায়।

আপনি কি Function নিয়ে আরও বিস্তারিত জানতে চান? 😊
 */


function Money(x, y, z) {

    let allMoney = x + y + z
    let m1 = 300000 * allMoney
    let m2 = 10 * m1
    let allAcc = m2
    console.log(allAcc)

}

Money(100, 200, 300)