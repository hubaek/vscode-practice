// shuffle array 
// let bingo = new Array(25); // 25개 배열 생성
let bingo= [];
bingo.length = 25 ;

console.log(bingo.length)
for(i=0; i<bingo.length;i++) {
    bingo[i]=i+1;  // 1~25의 숫자를 bingo배열에 대입
} 
bingo.sort(function(a,b){return Math.random()-0.5});    // bingo 배열 shuffle해주기
// shuffle(bingo);
console.log(bingo)

for(var i = 0; i<bingo.length; i++){    
    var cell = document.getElementById(i);  // td의 id값을 가져와서 cell변수에 대입
    cell.innerHTML = bingo[i];              // 셔플한 bingo[i]를 td = id(i)에 넣어준다.
}

// id값 동적으로 만들기. 


// document.getElementById("xxx") --html element 가져오기
// var table = document.getElementById("bingoBoard");
// var rows = table.rows;
// var cellIndex = 0;

// for (var i = 0; i< rows.length; i++){
//     var cells = rows[i].cells;
//     for(var j=0; j<cells.length; j++){
//         cells[i].innerHTML = bingo[cellIndex];
//         cellIndex++;
//     }
// }

// innerHtml(xxx shuffle)



// var arr = [] arr.length=25 or new Araay(25)
// for(i=0;i<arr.length;i++) arr[i]=i+1

// arr.sort((a,b)=> Math.random() - .5)

// arr[0] -> arr[0][0]
// arr[1] -> arr[0][1]