window.onload = function() {
// 코드를 작성
// 1. card를 저장할 배열을 만든다.

// 카드 전체를 img변수로 가져온다.
img = document.querySelectorAll("img");
// console.log(img);
// div#board를 board변수로 가져온다.
board = document.getElementById("board");
// img[52]인 카드 뒷면을 backCard 변수로 가져온다.
backCard = img[52];
initGame();
// startGame();

let startBtn = document.getElementById("startGameBtn");
let showBtn= document.getElementById("showBtn");
let shuffleBtn= document.getElementById("shuffleBtn");
let flipBtn = document.getElementById("flipBtn");
let hideBtn = document.getElementById("hideBtn");

// 게임시작 버튼을 누르면 startGame() 함수 호출
startBtn.onclick = startGame;
showBtn.onclick = show;
shuffleBtn.onclick = shuffle;
// flipBtn.onclick = flip;
hideBtn.onclick = hide;


// shuffleBtn.addEventListener('click', shuffle);

}
// 게임 세팅 
function initGame(){
    // 게임 세팅은 카드를 순서대로 나열해서 보여준다.
    // 게임 시작을 누르면 카드가 섞이고 카드가 뒤집힌다.
    // 1. card를 담을 배열을 만든다.
    cardArr = [];
    // 2. 배열을 초기화 하고  0~51의 숫자 
    for(let i=0; i<=51; i++) {
        cardArr[i] = img[i];
    }
    // 뒷면 카드를 담을 배열을 만든다.
    // backArr = [];
    // 3. 배열을 섞는다.
    // cardArr.sort(function(a,b){return Math.random()-0.5}); 
    // 4. 카드를 div#board에 보여준다.
    // innerHTML = `<<img src="${img[i].src}">`
    // console.log(cardArr);
    for(let i=0; i<=51; i++){
        board.innerHTML += `<img src="${cardArr[i].src}">`;
    }
    // 5. 각 카드에 click이벤트를 등록한다. -> startGame()으로
    // let imgArr = document.getElementsByTagName("img");

    // for(let i=0; i<imgArr.length; i++) {
    //     imgArr[i].onclick = cardClick;
    // }
}
function startGame(){
    alert("게임을 시작합니다!");
    // console.log(cardArr);
    // 카드(배열)를 섞는다
    cardArr.sort(function(a,b){return Math.random()-0.5}); 
    // 카드를 섞고 카드를 뒤집는다
    // console.log(cardArr);
    board.innerHTML = "";
    for(let i=0; i<=51; i++){
        board.innerHTML += `<img src="${cardArr[i].src}">`;
    }
    // console.log(board.innerHTML);
    // 5. 각 카드에 click이벤트를 등록한다.
    let imgArr = document.getElementsByTagName("img");
    for(let i=0; i<cardArr.length; i++) {
        cardArr[i].onclick = cardClick;
        // console.log(imgArr[i]);
    }
    
}
// 카드를 보여주는 함수
function show(){
    console.log(cardArr);
    board.innerHTML = "";
    for(let j=0; j<=51; j++){
        board.innerHTML += `<img src="${cardArr[j].src}">`;
    }
}
// 카드를 섞어주는 함수
function shuffle(){
    console.log(cardArr);
    cardArr.sort(function(a,b){return Math.random()-0.5}); 
    board.innerHTML = "";
    for(let j=0; j<=51; j++){
        board.innerHTML += `<img src="${cardArr[j].src}">`;
    }
}
// 카드를 뒤집어주는 함수
function hide() {
    console.log(backCard);
    board.innerHTML = "";
    for(let j=0; j<=51; j++){
        board.innerHTML += `<img src="${backCard.src}">`;
    }
}

// card가 앞면이면 true 아니면 false를 반환
function isFront(card){
    if(cardArr[0] <= this && this <= cardArr[51]){
        return true;
    } else {
        return false;
    }
    
}

// card를 뒤집는다.
// '<img src="${backCard.src}">' = `<img src="${card.src}">`;
// 지금 현재 startGame에 뿌려진 뒷면은 동일한 backCard(back.png)
// 하드코딩 : back(52~103)배열 생성 후 
function flip(card){
    console.log(isFront(card));
    
}

function cardClick() {
    // 1. 카드가 앞면인지 확인한다.
    console.log(this);
    let card = this;
    if(isFront(card)){
        return;
    } else {
        flip(card);
    }
    // 1-1. 앞면이면 return
    // 1-2. 뒷면이면 뒤집는다.
}
