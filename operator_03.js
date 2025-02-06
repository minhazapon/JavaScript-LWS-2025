/**
 * JavaScript Operators (জাভাস্ক্রিপ্ট অপারেটর) বাংলা টিউটোরিয়াল
জাভাস্ক্রিপ্টে Operators (অপারেটর) হলো এমন কিছু চিহ্ন বা শব্দ যা ভেরিয়েবল এবং মানগুলোর (Values) উপর নির্দিষ্ট কিছু কাজ সম্পাদন করে। অপারেটর ব্যবহার করে আমরা গাণিতিক হিসাব, তুলনা, লজিক্যাল অপারেশন, অ্যাসাইনমেন্ট, এবং আরও অনেক কিছু করতে পারি।

1. Arithmetic Operators (গাণিতিক অপারেটর)
এই অপারেটর গুলো গাণিতিক হিসাব করতে ব্যবহৃত হয়।

অপারেটর	নাম	উদাহরণ	ফলাফল
+	যোগ (Addition)	5 + 2	7
-	বিয়োগ (Subtraction)	5 - 2	3
*	গুণ (Multiplication)	5 * 2	10
/	ভাগ (Division)	5 / 2	2.5
%	ভাগশেষ (Modulus)	5 % 2	1
**	ঘাত (Exponentiation)	5 ** 2	25
📌 উদাহরণ:

javascript
Copy
Edit
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333
console.log(a % b); // 1
console.log(a ** b); // 1000
2. Assignment Operators (অ্যাসাইনমেন্ট অপারেটর)
এই অপারেটর গুলো ভেরিয়েবলে মান সংরক্ষণ করতে ব্যবহৃত হয়।

অপারেটর	নাম	উদাহরণ	সমতুল্য
=	সরাসরি মান সেট করা	x = 5	x = 5
+=	যোগ করে মান সংরক্ষণ	x += 3	x = x + 3
-=	বিয়োগ করে মান সংরক্ষণ	x -= 3	x = x - 3
*=	গুণ করে মান সংরক্ষণ	x *= 3	x = x * 3
/=	ভাগ করে মান সংরক্ষণ	x /= 3	x = x / 3
%=	ভাগশেষ সংরক্ষণ	x %= 3	x = x % 3
📌 উদাহরণ:

javascript
Copy
Edit
let x = 10;
x += 5;  // x = x + 5 (এখন x এর মান 15)
x -= 2;  // x = x - 2 (এখন x এর মান 13)
console.log(x);
3. Comparison Operators (তুলনামূলক অপারেটর)
এই অপারেটর গুলো দুটি মানের মধ্যে তুলনা করার জন্য ব্যবহৃত হয়।

অপারেটর	নাম	উদাহরণ	ফলাফল
==	সমান কিনা (Equal)	5 == 5	true
===	কড়াভাবে সমান (Strict Equal)	5 === '5'	false
!=	সমান না (Not Equal)	5 != 4	true
!==	কড়াভাবে সমান না (Strict Not Equal)	5 !== '5'	true
>	বড় কিনা (Greater Than)	5 > 2	true
<	ছোট কিনা (Less Than)	5 < 2	false
>=	বড় বা সমান কিনা (Greater Than or Equal)	5 >= 5	true
<=	ছোট বা সমান কিনা (Less Than or Equal)	5 <= 2	false
📌 উদাহরণ:

javascript
Copy
Edit
console.log(10 > 5);  // true
console.log(10 < 5);  // false
console.log(5 == '5');  // true (তবে টাইপ চেক হয়নি)
console.log(5 === '5');  // false (টাইপও চেক হয়)
4. Logical Operators (লজিক্যাল অপারেটর)
এই অপারেটর গুলো লজিক্যাল (যুক্তিবাদী) শর্ত যাচাই করতে ব্যবহৃত হয়।

অপারেটর	নাম	উদাহরণ	ফলাফল
&&	এবং (AND)	true && false	false
`		`	অথবা (OR)
!	বিপরীত (NOT)	!true	false
📌 উদাহরণ:

javascript
Copy
Edit
let a = true;
let b = false;

console.log(a && b); // false (কারণ একটি false)
console.log(a || b); // true (কারণ একটি true)
console.log(!a); // false (কারণ a এর মান উল্টো হয়ে গেছে)
5. Bitwise Operators (বিটওয়াইজ অপারেটর)
এই অপারেটর গুলো বাইনারি মান (0 এবং 1) এর উপর কাজ করে।

অপারেটর	নাম	উদাহরণ
&	AND	5 & 1
`	`	OR
^	XOR	5 ^ 1
~	NOT	~5
<<	Left Shift	5 << 1
>>	Right Shift	5 >> 1
6. Ternary Operator (টার্নারি অপারেটর)
টার্নারি অপারেটর হলো ? :, এটি সংক্ষিপ্তভাবে if-else এর কাজ করে।

📌 উদাহরণ:

javascript
Copy
Edit
let age = 18;
let message = (age >= 18) ? "আপনি ভোট দিতে পারবেন" : "আপনি ভোট দিতে পারবেন না";
console.log(message);
7. typeof Operator (টাইপ চেক অপারেটর)
এই অপারেটর ব্যবহার করে কোন ভেরিয়েবলের টাইপ জানা যায়।

📌 উদাহরণ:

javascript
Copy
Edit
console.log(typeof 10); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof undefined); // "undefined"
সংক্ষেপে গুরুত্বপূর্ণ অপারেটর গুলো
✅ গাণিতিক অপারেটর: +, -, *, /, %, **
✅ অ্যাসাইনমেন্ট অপারেটর: =, +=, -=, *=, /=
✅ তুলনামূলক অপারেটর: ==, ===, !=, !==, >, <, >=, <=
✅ লজিক্যাল অপারেটর: &&, ||, !
✅ টার্নারি অপারেটর: ? :
✅ টাইপ চেক অপারেটর: typeof

এই ছিল JavaScript-এর অপারেটর নিয়ে বাংলা ভাষায় একটি সহজ ব্যাখ্যা। যদি আরও জানতে চান, বলুন!
 */

let nums = 10 + 10;

let nums1 = 10 - 10;

let nums3 = 10 * 10;

let nums4 = 10 % 10;

let nums5 = 20 / 20;

let allNums = { nums, nums1, nums3, nums4, nums5 }

console.log(allNums)

let BigNumber = 100;

if (BigNumber > 200) {
    console.log('code is right')
} else {

    console.log('code is not right')
}

if (BigNumber > 70) {
    console.log('javaScript is the best programming language in this world')
} else {
    console.log('not okay')
}

if (BigNumber = 70) {
    console.log('Good')
} else {
    console.log('not good okay')
}

if (BigNumber === 70) {
    console.log('isBest')
} else {
    console.log('not best')
}

if (BigNumber <= 70) {
    console.log('all are okay')
} else {
    console.log('all not okay')
}
if (BigNumber => 70) {
    console.log('comparison is good')
} else {
    console.log('comparison is not good okay')
}



