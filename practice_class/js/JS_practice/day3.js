// for(var i=0; i<3; i++){
//     setTimeout(function(){alert(i);},0,1);
// }


// for(var i=0; i<3; i++){
//     (function(x){setTimeout(function(){alert(x);},0,1)})(i);
// }
// i = 0 -> x = 0
// i = 1 -> x = 1
// i = 2 -> x = 2

// for(let i=0; i<3; i++){
//     setTimeout(function(){alert(i);},0,1);
// }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// var p = new Person('aaa', 12);
// Person {name : 'aaa', age : 12}

// let p3 = Person('ccc', 20);

// window.name
// window.age

// str = 'abc'
// typeof str

// strObj = new String("aaa")
// typeof strObj

// ('abc').toString
// p
// Person {name:'aaa', age:12}
// p2
// Person {name:'bbb', age:13}

// p.getinfo =fun


// p.__proto__

// p.__proto__.getName = 


// p.constructor // p의 생성자
// p.__proto__ === Person.prototype

// p = new Person('bbb', 33)
// p.__proto__ === Person.prototype
// Person.prototype.getName = function() {
//     return "name="+this.name + ", age = "+this.age;
// }

// p = {} // p = new Object();
// p2 = new Person("ccc",22)
// p2.constructor === Person

// Person.apply(p, ['aaa',33]) // 이미 생성되어있는 Person()적용하려고. Person이란 생성자를 객체 P에다가 적용 Person의 매개변수 aaa,33을 넣으려고
// 생성자의 의미 초기화 - 멤버적어주면 초기화   this.name, this.age 의 this가 p가 됨

// function Person(name, age){
//     console.log("Person this ="+this);
//     temp();
//     function temp(){
//         console.log("temp this ="+this);
//     }
// }

p4 = new Person('zzz',11);
// that = this 추가하면 func안의 func에서 that이 this가 됨
function Person(name, age){
    console.log("Person this ="+this);
    var that = this;
    temp();
    function temp(){
        console.log("temp this ="+this);
        console.log("temp this ="+that);
    }
}