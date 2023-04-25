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
repoCount = 0;
repo1 = null;
repo2 = null;
initGame();

let startBtn = document.getElementById("startGameBtn");
// 게임시작 버튼을 누르면 startGame() 함수 호출
startBtn.onclick = startGame;



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
    for(let i=0; i<=51; i++){
        board.innerHTML += `<img src="${cardArr[i].src}" name="${cardArr[i].name}" id="${cardArr[i].id}">`;
    }
}
function startGame(){
    // alert("게임을 시작합니다!");
    // 카드를 뒤집는다
    board.innerHTML = "";
    for(let i=0; i<=51; i++){
        board.innerHTML += `<img data-idx="${i}" src="${backCard.src}" name="${cardArr[i].name}" id="${cardArr[i].id}">`;
    }
    console.log(cardArr);

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

    
}
// 카드를 보여주는 함수
function show(){
    console.log(cardArr);
    board.innerHTML = "";
    for(let i=0; i<=51; i++){
        board.innerHTML += `<img src="${cardArr[i].src}" name="${cardArr[i].name}" id="${cardArr[i].id}">`;
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
    for(let i=0; i<=51; i++){
        board.innerHTML += `<img src="${cardArr[i].src}" name="${cardArr[i].name}" id="${cardArr[i].id}">`;
    }
}
// 카드를 뒤집어주는 함수
function hide() {
    console.log(backCard);
    board.innerHTML = "";
    for(let i=0; i<=51; i++){
        board.innerHTML += `<img data-idx="${i}" src="${backCard.src}" name="${cardArr[i].name}" id="${cardArr[i].id}">`;
    }
    for(let i=0; i<imgArr.length; i++) {
        imgArr[i].onclick = cardClick;
    }
}

// card가 앞면이면 true 아니면 false를 반환
function isFront(card){
    // console.log(card);  
    // console.log(imgArr[52]);
    // if(!(card.src==backCard.src)){
    //     return true;
    // } else {
    //     return false;
    // }

    return !(card.src==backCard.src);


    
}

// card를 뒤집는다. isFront => return false;
function flip(card){
    // console.log(isFront(card));
    // console.log(card['data-idx']);
    console.dir(card);
    // 1번을 누르면 imgArr[0].onclick이 넘어와서 imgArr[0]=>this=>card가 되어 
    // card.src=cardArr[0].src인데..
    // imgArr[i]와 cardArr[i]를 어떻게 맞춰주지??
    let idx = card.getAttribute("data-idx");
    card.src = cardArr[idx].src;
    
}
function cardClick() {
    // 1. 카드가 앞면인지 확인한다.
    // console.log(this);
    let card = this;
    // console.log(card);
    // if(isFront(card)){
    //     return;
    // } else {
    //     flip(card);
    // }
    // 카드가 앞면이면 리턴한다.
    if(isFront(card)){
        return;
    }
    // 첫번째 카드를 넣어주기 위한 조건 변수
    repoCount += 1;
    // 첫번째 카드를 클릭 했을시
    if(repoCount == 1){
        repo1 = card;
        flip(repo1);
        // console.dir(repo1);
        // console.log(repo1.getAttribute("id"));
        
    } else if(repoCount == 2){  // 두번째 카드를 클릭 했을 시
        repo2 = card;
        flip(repo2);
    }
    // 첫번째 카드에 대한 id값(숫자)를 가져온다
    repo1_id = repo1.getAttribute("id");
    // 두번째 카드에 대한 id값(숫자)를 가져온다
    repo2_id = repo2.getAttribute("id");
    // 두번째 카드까지 확인하기 위해 setTimeout함수로 결과를 0.5초 뒤에 알려준다.
    setTimeout(function(){
        if(repo1.name == repo2.name){
            alert("색깔일치")
            repoCount = 0;  // 새로운 카드를 가져오기 위해서 초기화
            repo1 = null;   // 첫번째 카드가 이미 flip됐으므로 새로운 값 대입을 위해 초기화
            repo2 = null;
            return ;
        } else if(repo1_id == repo2_id){
            alert("숫자 일치")
            repoCount = 0;
            repo1 = null;
            repo2 = null;
            return ;
        } else {
            alert("X 불일치 X")
            repo1.src = backCard.src;   // 해당 카드는 다시 뒤집어줘야해서
            repo2.src = backCard.src;   // 1,2번 카드 둘다 뒷면으로 바꿔준다.
            repoCount = 0;
            repo1 = null;
            repo2 = null;
        }
    }, 100)
    // if(repo1.name == repo2.name){
    //     alert("색깔일치")
    //     repoCount = 0;
    //     repo1 = null;
    //     repo2 = null;
    //     return ;
    // } //else {
    //     cardArr[idx].src = card.src;
    // }
    console.log(repo1);
    console.log(repo2);
    // 전역변수 레포지토리카운트는 0부터 시작하고
    // 레포지토리카운트가 +=1;
    // 전역변수 레포지토리1 , 레포지토리2, 레포지토리카운트 선언\
    // if 레포지토리카운트가 1 일떄
    // 카드를 클릭하면 값 정보가 나오는데 그거를 레포지토리 1에 저장
    // if 레포지토리카운트가 2일떄 
    // 또 카드를 클릭하면 값 정보를 레포지토리2에 저장
    // 

    // 1-1. 앞면이면 return
    // 1-2. 뒷면이면 뒤집는다.
}
