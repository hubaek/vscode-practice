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

let startBtn = document.getElementById("startGameBtn");

// 게임시작 버튼을 누르면 startGame() 함수 호출
startBtn.onclick = startGame;

// shuffleBtn.addEventListener('click', shuffle);

}
// 게임 세팅 - 카드를 섞어서 보여주고 외울 수 있게 한다.
function initGame(){
    // 게임 시작을 누르면 카드가 뒤집힌다.
    // 1. card를 담을 배열을 만든다.
    cardArr = [];
    // 2. 배열을 초기화 하고  0~51의 숫자 
    for(let i=0; i<=51; i++) {
        cardArr[i] = img[i];
    }
    // 뒷면 카드를 담을 배열을 만든다.
    // backArr = [];
    // 3. 배열을 섞는다.
    cardArr.sort(function(a,b){return Math.random()-0.5}); 
    // 4. 카드를 div#board에 보여준다.
    // console.log(cardArr);
    for(let i=0; i<=51; i++){
        board.innerHTML += `<img src="${cardArr[i].src}">`;
    }
}
function startGame(){
    // alert("게임을 시작합니다!");
    // 카드를 뒤집는다
    board.innerHTML = "";
    for(let i=0; i<=51; i++){
        board.innerHTML += `<img data-idx="${i}" src="${backCard.src}">`;
    }
    console.log(cardArr);
    // console.log(board.innerHTML);
    // 5. 각 카드에 click이벤트를 등록한다.
    imgArr = document.getElementsByTagName("img");
    for(let i=0; i<imgArr.length; i++) {
        imgArr[i].onclick = cardClick;
    }
    showBtn= document.getElementById("showBtn");
    shuffleBtn= document.getElementById("shuffleBtn");
    hideBtn = document.getElementById("hideBtn");
    // 보이기 버튼
    showBtn.onclick = show;
    // 숨기기 버튼
    hideBtn.onclick = hide;
    // 섞기 버튼
    shuffleBtn.onclick = shuffle;
    // flipBtn.onclick = flip;
    
}
// 카드를 보여주는 함수
function show(){
    console.log(cardArr);
    board.innerHTML = "";
    for(let j=0; j<=51; j++){
        board.innerHTML += `<img src="${cardArr[j].src}">`;
    }
    for(let i=0; i<imgArr.length; i++) {
        imgArr[i].onclick = cardClick;
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
        board.innerHTML += `<img data-idx="${j}" src="${backCard.src}">`;
    }
    for(let i=0; i<imgArr.length; i++) {
        imgArr[i].onclick = cardClick;
    }
}

// card가 앞면이면 true 아니면 false를 반환
function isFront(card){
    // console.log(card);  
    // console.log(imgArr[52]);
    if(!(card.src==imgArr[52].src)){
        return true;
    } else {
        return false;
    }
    
}

// card를 뒤집는다.
function flip(card){
    // console.log(isFront(card));
    // console.log(card['data-idx']);
    console.dir(card);
    let idx = card.getAttribute("data-idx");
    // 스페이드 에이스가 보이게한다.(아무카드나)
    card.src = cardArr[idx].src;
    // 1번을 누르면 imgArr[0].onclick이 넘어와서 imgArr[0]=>this=>card가 되어 
    // card.src=cardArr[0].src인데..
    // imgArr[i]와 cardArr[i]를 어떻게 맞춰주지??
    
}
function cardClick() {
    // 1. 카드가 앞면인지 확인한다.
    // console.log(this);
    let card = this;
    if(isFront(card)){
        return;
    } else {
        flip(card);
    }
    // 1-1. 앞면이면 return
    // 1-2. 뒷면이면 뒤집는다.
}
