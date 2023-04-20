console.log("hello")
console.log(window)
console.log("hello")
var num = 123;
var num2 = new Number(123);
console.log(num==num2)
console.log(num===num2)
console.log(typeof num)
console.log(typeof num2)

var str = "abc";
var str2 = new String("abc");
var str3 = new String("abc");

console.log(str==str2)
console.log(str===str2)
console.log(str2==str3)
console.log(str2.valueOf()==str3.valueOf())

console.log(str2+"" == str+"")  // str2+"" 는 string이라서 string==string

var arr = [1,2,3,4,5]
console.log(arr[5])
arr[6] = 100;
console.log(arr[6])
console.log(arr.length)

for(i=0;i<arr.length;i++) console.log(arr[i])
