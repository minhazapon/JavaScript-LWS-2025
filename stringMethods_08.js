/**
 * JavaScript String Methods (জাভাস্ক্রিপ্ট স্ট্রিং মেথডস)
JavaScript-এ string methods হল বিভিন্ন বিল্ট-ইন ফাংশন, যা স্ট্রিং নিয়ে কাজ করতে ব্যবহার করা হয়। নিচে কিছু গুরুত্বপূর্ণ string methods বাংলা ব্যাখ্যাসহ দেওয়া হলো—

🔹 1. length
👉 ব্যবহার: স্ট্রিং-এর দৈর্ঘ্য (length) বা অক্ষরের সংখ্যা বের করতে।

javascript
Copy
Edit
let text = "Hello, World!";
console.log(text.length); // Output: 13
🔹 2. toUpperCase()
👉 ব্যবহার: স্ট্রিং-এর সব অক্ষর বড় হাতের (UPPERCASE) করতে।

javascript
Copy
Edit
let text = "hello";
console.log(text.toUpperCase()); // Output: "HELLO"
🔹 3. toLowerCase()
👉 ব্যবহার: স্ট্রিং-এর সব অক্ষর ছোট হাতের (lowercase) করতে।

javascript
Copy
Edit
let text = "HELLO";
console.log(text.toLowerCase()); // Output: "hello"
🔹 4. slice(start, end)
👉 ব্যবহার: নির্দিষ্ট অংশ কেটে বের করতে।

javascript
Copy
Edit
let text = "JavaScript";
console.log(text.slice(0, 4)); // Output: "Java"
🔹 5. substring(start, end)
👉 ব্যবহার: slice() এর মতোই, কিন্তু নেগেটিভ ইনডেক্স সাপোর্ট করে না।

javascript
Copy
Edit
let text = "JavaScript";
console.log(text.substring(0, 4)); // Output: "Java"
🔹 6. replace("old", "new")
👉 ব্যবহার: কোনো অংশ পরিবর্তন করতে।

javascript
Copy
Edit
let text = "Hello World";
console.log(text.replace("World", "Bangladesh")); // Output: "Hello Bangladesh"
🔹 7. trim()
👉 ব্যবহার: স্ট্রিং-এর শুরু এবং শেষের ফাঁকা (whitespace) অংশ সরাতে।

javascript
Copy
Edit
let text = "   Hello World   ";
console.log(text.trim()); // Output: "Hello World"
🔹 8. split()
👉 ব্যবহার: স্ট্রিংকে আলাদা করে array-তে রূপান্তর করতে।

javascript
Copy
Edit
let text = "Hello,World";
console.log(text.split(",")); // Output: ["Hello", "World"]
🔹 9. includes("text")
👉 ব্যবহার: কোনো নির্দিষ্ট শব্দ আছে কিনা চেক করতে।

javascript
Copy
Edit
let text = "I love JavaScript";
console.log(text.includes("love")); // Output: true
🔹 10. charAt(index)
👉 ব্যবহার: নির্দিষ্ট ইনডেক্সের অক্ষর বের করতে।

javascript
Copy
Edit
let text = "Hello";
console.log(text.charAt(1)); // Output: "e"
💡 সংক্ষেপে গুরুত্বপূর্ণ JavaScript String Methods
Method	কাজ
length	স্ট্রিং-এর দৈর্ঘ্য
toUpperCase()	বড় হাতের অক্ষরে রূপান্তর
toLowerCase()	ছোট হাতের অক্ষরে রূপান্তর
slice(start, end)	স্ট্রিং থেকে নির্দিষ্ট অংশ বের করা
replace("old", "new")	নির্দিষ্ট অংশ পরিবর্তন করা
trim()	ফাঁকা স্থান সরানো
split(separator)	স্ট্রিংকে অ্যারেতে রূপান্তর
includes("text")	নির্দিষ্ট শব্দ আছে কিনা চেক করা
charAt(index)	নির্দিষ্ট ইনডেক্সের অক্ষর বের করা
👉 এখন আপনি JavaScript-এ স্ট্রিং নিয়ে সহজেই কাজ করতে পারবেন! 🚀
আরও কিছু জানতে চাইলে বলুন! 😊
 */
//lenght

const nameZ = 'minhazulabedinaponfarzanamoutushiponny'

console.log(nameZ.length)

// toUpperCase()

const name2 = 'farzana moutushi'

console.log(name2.toUpperCase())

//toLowerCase()

const name3 = 'PONNY'

console.log(name3.toLowerCase())

// slice(start, end)

const name4 = 'bangladesh'

console.log(name4.slice(5, 9))

//substring(start, end)

const name5 = 'reactjsjavascript'

console.log(name5.substring(0, 7))

// replace("old", "new")

const name6 = 'farzana moutushi'

console.log(name6.replace("farzana", "minhaz"))

//trim()

const name7 = "     moutushi     "

console.log(name7.trim())

// split()

const name8 = 'minhaz,moutushi'

console.log(name8.split(","))

//includes("text")

const name9 = 'apon love moutushi'

console.log(name9.includes("love"))

// charAt(index)

const name10 = "ponny"

console.log(name10.charAt(4))
