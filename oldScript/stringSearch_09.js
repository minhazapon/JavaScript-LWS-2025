/**
 * JavaScript-এ String Search বলতে বোঝায় কোনো নির্দিষ্ট টেক্সট (string) বা ক্যারেক্টার কোনো স্ট্রিং-এর মধ্যে খুঁজে বের করা। JavaScript-এ স্ট্রিং অনুসন্ধানের জন্য কয়েকটি বিল্ট-ইন মেথড রয়েছে। নিচে গুরুত্বপূর্ণ কিছু মেথডের ব্যাখ্যা দেওয়া হলো:

1. indexOf()
এই মেথডটি নির্দিষ্ট টেক্সটের প্রথম উপস্থিতি খুঁজে বের করে এবং তার index (স্থান) প্রদান করে।
যদি টেক্সটটি পাওয়া না যায়, তবে এটি -1 রিটার্ন করে।

javascript
Copy
Edit
let text = "Hello, welcome to JavaScript!";
let position = text.indexOf("welcome");
console.log(position); // Output: 7
2. lastIndexOf()
এই মেথডটি নির্দিষ্ট টেক্সটের শেষ উপস্থিতি খুঁজে বের করে এবং তার index প্রদান করে।
যদি টেক্সটটি পাওয়া না যায়, তবে এটি -1 রিটার্ন করে।

javascript
Copy
Edit
let text = "Hello, welcome to JavaScript. JavaScript is fun!";
let position = text.lastIndexOf("JavaScript");
console.log(position); // Output: 25
3. search()
এই মেথডটি নির্দিষ্ট টেক্সটের প্রথম উপস্থিতির index প্রদান করে। এটি indexOf()-এর মতোই কাজ করে তবে regular expression (RegEx) সাপোর্ট করে।

javascript
Copy
Edit
let text = "Hello, welcome to JavaScript!";
let position = text.search("JavaScript");
console.log(position); // Output: 19
4. match()
এই মেথডটি RegEx ব্যবহার করে কোনো স্ট্রিং-এর মধ্যে টেক্সট খুঁজে বের করে এবং array আকারে ফলাফল রিটার্ন করে।

javascript
Copy
Edit
let text = "The rain in SPAIN stays mainly in the plain";
let result = text.match(/ain/g);
console.log(result); // Output: ['ain', 'ain', 'ain']
5. includes()
এই মেথডটি নির্দিষ্ট টেক্সট স্ট্রিং-এর মধ্যে আছে কিনা তা true বা false রিটার্ন করে।

javascript
Copy
Edit
let text = "Hello, welcome to JavaScript!";
let result = text.includes("JavaScript");
console.log(result); // Output: true
6. startsWith()
এই মেথডটি চেক করে যে কোনো স্ট্রিং একটি নির্দিষ্ট শব্দ বা ক্যারেক্টার দিয়ে শুরু হয়েছে কিনা।

javascript
Copy
Edit
let text = "JavaScript is awesome!";
console.log(text.startsWith("JavaScript")); // Output: true
console.log(text.startsWith("is")); // Output: false
7. endsWith()
এই মেথডটি চেক করে যে কোনো স্ট্রিং একটি নির্দিষ্ট শব্দ বা ক্যারেক্টার দিয়ে শেষ হয়েছে কিনা।

javascript
Copy
Edit
let text = "JavaScript is awesome!";
console.log(text.endsWith("awesome!")); // Output: true
console.log(text.endsWith("JavaScript")); // Output: false
🔥 সংক্ষেপে
মেথড	কাজ
indexOf()	প্রথম উপস্থিতির index খুঁজে বের করে
lastIndexOf()	শেষ উপস্থিতির index খুঁজে বের করে
search()	প্রথম উপস্থিতির index রিটার্ন করে, RegEx সাপোর্ট করে
match()	স্ট্রিং-এর মধ্যে টেক্সট খুঁজে array রিটার্ন করে
includes()	স্ট্রিং-এর মধ্যে নির্দিষ্ট শব্দ আছে কিনা true/false রিটার্ন করে
startsWith()	স্ট্রিং একটি নির্দিষ্ট শব্দ দিয়ে শুরু হয়েছে কিনা চেক করে
endsWith()	স্ট্রিং একটি নির্দিষ্ট শব্দ দিয়ে শেষ হয়েছে কিনা চেক করে
✅ শেষ কথা
JavaScript-এ স্ট্রিং অনুসন্ধানের জন্য উপরের মেথডগুলো খুবই গুরুত্বপূর্ণ এবং বিভিন্ন কাজে ব্যবহার করা হয়। তুমি যদি কোনো নির্দিষ্ট কিছুর সন্ধান করতে চাও, তাহলে RegEx ব্যবহার করে search() বা match() মেথড ব্যবহার করতে পারো। অন্যথায় indexOf(), includes() ইত্যাদি সহজ উপায়ে টেক্সট অনুসন্ধান করা যায়।

কোনো প্রশ্ন থাকলে বলো! 😊🚀
 */

// indexOf()

const apon = 'minhazul abedin apon is javaScript Developer'

console.log(apon.indexOf("javaScript"))

//lastIndexOf()

const a = "apon is a react.js engineer"

console.log(a.lastIndexOf("react.js"))

//search()

const aa = "minhazul abedin apon is a toptal engineer"

console.log(aa.search("toptal"))

//match()

const R = "rain rain dain dain forain forain upAin apAin"

console.log(R.match(/ain/g))

// includes()

const In = "farzana moutushi ponny"

console.log(In.includes('ponny'))

//startsWith()

const names = "minhaz"

console.log(names.startsWith('p'))

//endsWith()

const names2 = "moutushi"

console.log(names2.endsWith('a'))

