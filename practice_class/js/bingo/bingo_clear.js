
// 1. 배열을 만든다.
let bingoArr = [];

// 2. 배열을 초기화 한다. 1~25
// bingoArr = [1,2,3,4,5,6,7,8,]
for (let i=0; i<25; i++){
    bingoArr[i] = i+1;
}
// 3. 배열을 섞는다.
// bingoArr.sort(function(a,b){return Math.random()-0.5});

// 4. 배열을 화면에 보여준다.

// for(let i=0; i<bingoArr.length; i++){
//     console.log(bingoArr[i]);
// }

let tmp = '<table border="1">';

for(let i=0; i<5; i++){
    tmp += '<tr>';
    for(let j=0; j<5; j++){
        tmp += `<td>${bingoArr[i*5+j]}</td>`
        // tmp += "<td>"+bingoArr[i*5+j]+"</td>"
    }
    tmp += '</tr>'
}
tmp += '</table>';

document.getElementById("board").innerHTML = tmp;



// let tmp = '<table border="1">';

// for(let i=0; i<5; i++){
//     tmp += '<tr>';
//     for(let j=0; j<5; j++){
//         tmp += '<td>${bingoArr[i*5+j]}</td>'
//     }
//     tmp += '</tr>'
// }
// tmp += '</table>';

// document.getElementById("board").innerHTML = tmp;