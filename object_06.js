/**
 * JavaScript Object কী? (বাংলায় ব্যাখ্যা)
JavaScript-এ Object হল এক ধরনের ডাটা স্ট্রাকচার, যা key-value পেয়ার আকারে ডাটা সংরক্ষণ করে। সহজ ভাষায়, এটি একটি collection of properties যেখানে প্রতিটি প্রপার্টির একটি key (নাম) এবং একটি value (মান) থাকে।

Object তৈরির নিয়ম:
JavaScript-এ অবজেক্ট তৈরি করার জন্য দুটি প্রধান উপায় আছে:

Object Literal ব্যবহার করে
javascript
Copy
Edit
const person = {
  name: "Rahim",
  age: 25,
  city: "Dhaka"
};
console.log(person.name); // Output: Rahim
এখানে person নামের একটি অবজেক্ট আছে, যার তিনটি প্রপার্টি: name, age, এবং city।

Constructor Function ব্যবহার করে
javascript
Copy
Edit
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

const person1 = new Person("Karim", 30, "Chattogram");
console.log(person1.city); // Output: Chattogram
এখানে Person হল একটি কনস্ট্রাক্টর ফাংশন যা নতুন অবজেক্ট তৈরি করতে ব্যবহার করা হয়।

Object এর মধ্যে Function (Method) রাখা যায়
javascript
Copy
Edit
const student = {
  name: "Amina",
  age: 22,
  greet: function() {
    return "Hello, " + this.name;
  }
};
console.log(student.greet()); // Output: Hello, Amina
এখানে greet নামের একটি মেথড আছে যা অবজেক্টের name প্রপার্টি ব্যবহার করে মেসেজ তৈরি করে।

JavaScript Object কেন দরকার?
✅ একাধিক ডাটা একসাথে সংরক্ষণ করতে সুবিধা হয়
✅ Key-Value আকারে তথ্য রাখা যায়
✅ অবজেক্ট-ভিত্তিক প্রোগ্রামিং (OOP) সহজ হয়

আপনার যদি আরও বিস্তারিত জানার ইচ্ছা থাকে, তাহলে বলুন! 😊
 */


let aponInformation = {

    fullName: 'Minhazul Abedin Apon',
    age: 23,
    FatherName: 'ohidul islam',
    MotherName: 'mini khatun',
    WifeName: 'farzana moutushi ponny',
    School: 'jhenaidah govt. high school',
    companyName: 'toptal',
    language: 'javaScript and c++',
    number: 1950374409,
    Country: 'bangladesh',
    location: 'jhenaidah district',
    profession: function () {
        console.log('software developer')
    },
    FAVFood: function () {
        console.log('beef')
    }

}

console.log(
    aponInformation.fullName,
    aponInformation.age,
    aponInformation.FatherName,
    aponInformation.MotherName,
    aponInformation.WifeName,
    aponInformation.School,
    aponInformation.companyName,
    aponInformation.language,
    aponInformation.number,
    aponInformation.Country,
    aponInformation.location,
)

aponInformation.profession(),
    aponInformation.FAVFood()