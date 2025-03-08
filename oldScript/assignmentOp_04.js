/**
 * JavaScript Assignment Operators (জাভাস্ক্রিপ্ট অ্যাসাইনমেন্ট অপারেটরসমূহ)
JavaScript-এ Assignment Operators ব্যবহার করা হয় ভেরিয়েবলের মধ্যে মান সংরক্ষণ বা আপডেট করার জন্য।

১. Basic Assignment (=)
👉 এটি একটি ভেরিয়েবলে মান সেট করতে ব্যবহৃত হয়।

js
Copy
Edit
let x = 10;  // x এর মান 10
২. Addition Assignment (+=)
👉 এটি একটি ভেরিয়েবলের বর্তমান মানের সাথে একটি নির্দিষ্ট মান যোগ করে এবং ফলাফল সংরক্ষণ করে।

js
Copy
Edit
let x = 5;
x += 3;  // x = x + 3  (এখন x এর মান 8)
৩. Subtraction Assignment (-=)
👉 এটি বর্তমান মান থেকে একটি নির্দিষ্ট মান বিয়োগ করে এবং সংরক্ষণ করে।

js
Copy
Edit
let x = 10;
x -= 4;  // x = x - 4  (এখন x এর মান 6)
৪. Multiplication Assignment (*=)
👉 এটি বর্তমান মানের সাথে একটি নির্দিষ্ট মান গুণ করে এবং সংরক্ষণ করে।

js
Copy
Edit
let x = 6;
x *= 2;  // x = x * 2  (এখন x এর মান 12)
৫. Division Assignment (/=)
👉 এটি বর্তমান মানকে একটি নির্দিষ্ট মান দ্বারা ভাগ করে এবং ফলাফল সংরক্ষণ করে।

js
Copy
Edit
let x = 20;
x /= 5;  // x = x / 5  (এখন x এর মান 4)
৬. Modulus Assignment (%=)
👉 এটি বর্তমান মানকে নির্দিষ্ট মান দ্বারা ভাগ করার পর অবশিষ্টাংশ সংরক্ষণ করে।

js
Copy
Edit
let x = 17;
x %= 3;  // x = x % 3  (এখন x এর মান 2)
৭. Exponentiation Assignment (**=)
👉 এটি বর্তমান মানকে নির্দিষ্ট শক্তিতে (power) উন্নীত করে এবং ফলাফল সংরক্ষণ করে।

js
Copy
Edit
let x = 4;
x **= 3;  // x = x ** 3  (এখন x এর মান 64)
৮. Bitwise Assignment Operators
👉 Bitwise অপারেটরের জন্যও অ্যাসাইনমেন্ট অপারেটর রয়েছে, যেমন:

&= (AND)
|= (OR)
^= (XOR)
>>= (Right Shift)
<<= (Left Shift)
>>>= (Unsigned Right Shift)
js
Copy
Edit
let x = 5; // 0101 (Binary)
x &= 3;    // x = x & 3 (Binary: 0101 & 0011 = 0001)
console.log(x); // 1
✅ সংক্ষেপে:
অ্যাসাইনমেন্ট অপারেটর ব্যবহার করে আমরা ভেরিয়েবলের মান পরিবর্তন বা আপডেট করতে পারি সহজেই।

তোমার কি কোনো নির্দিষ্ট অপারেটর সম্পর্কে আরও বিস্তারিত জানতে চাই? 😊
 */

let n = 10

n += 90

console.log(n)

let x = 20

x -= 100

console.log(x)

let y = 80

y /= 30

console.log(y)

let z = 1000

z *= 2000
console.log(z)


let v = 300

v %= 400

console.log(v)