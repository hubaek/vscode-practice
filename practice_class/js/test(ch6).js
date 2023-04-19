    //1.빈 객체를 생성한 후, 멤버(속성,함수)를 추가
    //빈 객체 생성
    var person ={}; //var person = new Object();과 동일

    //객체에 속성추가
    person.firstName= "John";
    person.lastName="Doe";
    person.age=50;
    person.eyeColor = "blue";

    //2. 객체의 생성과 동시에 멤버를 추가
    var myObject = {
        firstName:"John",
        lastName: "Doe",
        fullName: function(){
            return this.firstName + " " + this.lastName;
        }
    }    

console.log()
// console.log(person)
// console.log(myObject)

// 생성자로 객체생성하기
// 생성자를 정의하면 객체를 편리하게 생성할 수 있다.
function Person(name,age){
    //생성자 Person선언. 생성자의 첫글자는 대문자로
    this.name = name;
    this.age = age;
}

var obj = new Person("david",10);   
var obj2 = new Person("wendy",20);  

// console.log(obj)     // name : david , age : 10
// console.log(obj2)    // name : wendy , age : 20

obj.toString = function(){
    return "name="+this.name+", age="+this.age;//this를 꼭 붙여놔야함.
};

// console.log(obj.toString()); // "name=david, age=10"
// console.log(obj2.toString()); // "[object object]"  , object는 공유 안됨


//delete연산자로 객체의 속성을 삭제할 수 있다.(물려받은 속성은 삭제불가)
var obj = {};//빈 객체
//속성을 추가
obj.name = 'david';
obj.age = 10;

// toString()추가 -자바의 오버라이딩
obj.toString = function(){
    return "name="+this.name+", age="+this.age;
};
// console.log(obj.toString()); //"name=david, age=10"

delete obj.name; //객체 obj에서 속성name을 삭제
// console.log(obj.toString()); // "name=undefined, age=10"


//instanceof를 통해 객체가 어떤 생성자에 의해 생성되었는지 확인 가능
var obj = new Object(); //var obj ={};
var p = new Person("david",10);
var s = new String();
var f = new Function(); // var f = function(){} ;와 동일

// console.log(typeof obj);    // object
// console.log(typeof p);      // object
// console.log(typeof s);      // object
// console.log(typeof f);      // function

// console.log(obj instanceof Object); // true
// console.log(p instanceof Object);   // true
// console.log(s instanceof Object);   // true
// console.log(f instanceof Object);   // true

// console.log(obj instanceof String); // false
// console.log(p instanceof Person);   // true
// console.log(s instanceof String);   // true
// console.log(f instanceof Function); // true

//같은 생성자로 생성한 객체라도 서로 다른 함수를 가질 수 있다.
function Person(name,age){
    this.name = name;
    this.age = age;
}
var obj = new Person("david",10);
var obj2 = new Person("wendy",20);

obj.getName = function() { //object에 getName()을 추가
    return this.name;
}
// console.log(obj.getName()); // "david"
// console.log(obj2.getName()); //에러. obj2에는 getName()이 없음.

// for(var prop in obj)
//     console.log(obj[prop]); //속성이 3개

// for(var prop in obj2)
//     console.log(obj2[prop]); //속성이 2개


// 6.6 prototype, __proto__, construnctor
// 객체는 자신을 생성한 생성자의 prototype에 대한 참조인 __proto__와 constructor속성을 자동으로 갖는다.
function Person(name,age){
    this.name = name;
    this.age=age;
}
var obj = new Object();

//p의 속성 __proto__는 Person.prototype을 가리킨다.
var p = new Person("david",10);
var s = new String();
var f = new Function(); //var f = function(){};

// console.log(Object.prototype===obj.__proto__);  //true
// console.log(Person.prototype===p.__proto__);    //true
// console.log(String.prototype===s.__proto__);    //true
// console.log(Function.prototype===f.__proto__);  //true

obj.constructor==Object //true
p.constructor==Person //true


// 6.7 생성자의 prototype을 이용한 함수 공유
//생성자의 prototype에 함수를 추가하면 객체간 함수 공유 가능
function Person(name,age){
    this.name = name;
    this.age= age;
}

var obj = new Person("david",10);
var obj2 = new Person("wendy",20);

//생성자의 prototype에 함수 getName()을 추가
Person.prototype.getName = function() {
    return this.name;
}
// console.log(obj.getName()); // "david"
// console.log(obj2.getName()); // "wendy"


// 6.8 객체를 의미하는 this
//this는 기본적으로 함수를 호출하는 객체를 의미. 상황에 따라 달라짐
//전역 범위에서 this는 window(브라우저)를 가리킨다.
// alert("abc");
// this.alert("abc"); //this는 window를 의미
// window.alert("abc");
// console.log(this); //window객체를 의미

function Person2(name,age){
    this.name = name;
    this.age = age;
    console.log("["+this.name+","+this.age+"]");
}
// var p = new Person2("Tom",33);//새로운 객체 생성
// var p2 = Person2("Tim",22); //새로운 객체가 생성되지 않음

var p3={};
var p4= new Object();
// 6.9 call(), apply()로 this의 대상 변경
// call(), apply(), bind()를 사용하면 this가 가리키는 대상을 변경할 수 있다.
// Person2.call(p3, "Sebin",11);
// Person2.apply(p3, ["Yebin",9]);


// 6.10 중첩된 함수에서의 this
// 함수가 중첩되면, this의 의미가 달라진다. 별도의 변수에 this의 값을 저장
// var myObj = {
//     func1: function() {
//         console.log(this); //myObj
//         var func2 = function(){
//             console.log(this); //window
//                 var func3 = fuction(){
//                     console.log(this); //window
//                 }();
//         }();
//     }
// }
// myObj.func1();

// var myObj = {
//     myFunc : function() {
//         var that = this; //this의 값을 that에 저장
//         var myFunc2 = function(){
//             console.log(that); //that은 myObj
//             console.log(this); //this는 window
//         }();
//     }
// }
// myObj.myFunc();

{/* <h1 onclick="this.innerHTML='Ooops!'"> Click on this text!</h1> */}


// 6.12 객체의 속성에 접근 제한하기
//생성자의 변수를 지역변수로  선언하여 접근을 제한, 대신 getter를 제공
function Person(name,age){
    //this.name = name;
    //this.age = age;
    var name= name; //지역변수로 선언
    var age =age; //지역변수로 선언

    this.getName = function(){
        return name;
    }
    this.getAge = function(){
        return age;
    }
}
var p = new Person("asdf",10);

console.log(p.getName()); //"asdf"
console.log(p.getAge()); //10

console.log(p.name); // undefined. 지역변수에 접근할수 없음
console.log(p.age); //undefined. 지역변수에 접근할 수 없음