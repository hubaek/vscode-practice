// let bingo = new Array(25); // 25개 배열 생성
// let bingo= [];
// bingo.length = 25 ;

// console.log(bingo.length)
// for(i=0; i<bingo.length;i++) {
//     bingo[i]=i+1;  // 1~25의 숫자를 bingo배열에 대입
// } 
// bingo.sort(function(a,b){return Math.random()-0.5});    // bingo 배열 shuffle해주기
// // shuffle(bingo);
// console.log(bingo)

// let h = '<h1>박보영 빙고판</h1>';
// document.body.innerHTML = h;

// bingo 배열 생성
let bingo = [];        
// bingo 배열에 1~25의 숫자를 넣어준다.
for(i=0; i<25; i++){   
    bingo[i] = i+1;    // bingo.push(i)
}
// console.log(bingo);
// bingo 배열을 섞어줌 
bingo.sort(function(a,b){return Math.random()-0.5});
// console.log(bingo);

let rows = 5;   // 행 <tr>
let cols = 5;   // 열 <td>
// 테이블 태그 문자열 만들어서 table 변수에 저장
let table = '<table border="1">';
// 행(row) 추가
for(let i = 0; i<rows; i++){
    table += "<tr>";
    for(let j = 0; j<cols; j++){    // 열(col) 추가 + 닫기
        table += `<td>${bingo[i*5+j]}</td>`
    }

    table += "</tr>";   // 행(row) 닫기
}

table += "</table>";    // 테이블태그 닫기

document.getElementById("board").innerHTML = table;
// document.getElementById(board).innerHTML = table;    // table 문자열을 HTML에 추가

// 2차원 배열
// let bingo2D = [];
// let bingo2D = [
//     [1,2,3,4,5],
//     [1,2,3,4,5],
//     [1,2,3,4,5],
//     [1,2,3,4,5],
//     [1,2,3,4,5]
// ]
// console.log(bingo2D);
// console.log(bingo2D[0][1]);

// // 테이블 태그 문자열 만들어서 table 변수에 저장
// let table = '<table border="1" id="bingoBoard">';

// // 행(row) 추가
// for(let i = 0; i<bingo2D.length; i++){
//     table += "<tr>";
//     for(let j = 0; j<bingo2D[i].lenth; j++){    // 열(col) 추가 + 닫기
//         table += "<td>"+bingo2D[i]+bingo2D[j]+"</td>";
//     }

//     table += "</tr>";   // 행(row) 닫기
// }

// table += "</table>";    // 테이블태그 닫기

// document.body.innerHTML = table;    // table 문자열을 HTML에 추가




