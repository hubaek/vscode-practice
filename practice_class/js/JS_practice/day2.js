console.log(1)

var num = 123;
var num2 = new Number(123);

console.log(typeof num)
console.log(typeof num2)

console.log(num==num2)
console.log(num===num2)

console.log(num2 instanceof Object)
console.log(num2 instanceof Number)

arr = [] // 빈 배열
arr[0] = 1
arr[1] = 2
console.log(arr)
console.log(arr.length)
arr.length = 10
console.log(arr)
arr.length = 1
console.log(arr)

// arr[] == arr = new Array()  왼쪽같이 쓰면 됨

console.log(window)

arr = [1,2,3,4,5]
console.log(arr.flat())
console.log(arr.map(e=>e*10))
// console.log(arr.filter(e>20))

arr = [1,10,20,3,5,22,7]
console.log(arr)
arr.sort()
console.log(arr)
arr.sort((a,b)=>a-b)
console.log(arr)
arr.reverse()
console.log(arr)


// for(e of arr) console.log(e)


// for(prop in obj) console.log(prop+"="+obj[prop])



function f() {
    return;
}
var result = f();
console.log(result)


function add(a,b) {
    return a+b;
}
// 위 아래 둘다 똑같은데 요즘에는 밑에 식을 많이 씀
var add = function(a,b) {return a+b;}       // 익명함수
console.log(add(3,5))
// (a,b) => a+b   // 람다식

console.log((add)(3,5))
// (function(a,b){return a+b;})(3,5) // 바로 표현가능
console.log((function(a,b){return a+b;})(3,5))

function add(a,b) {
    // var a = a||0; - old
    var sum = 0;
console.log("a="+a);
console.log("b="+b);
    for(i=0;i<arguments.length;i++)
        sum+= arguments[i];
    return sum;
}

console.log(add(4,6))

