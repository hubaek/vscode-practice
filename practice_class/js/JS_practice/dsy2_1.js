function closure() {
    var cnt = 0;

    return function() {
        cnt++;
        console.log(cnt);
    }
}

var increaseCnt = closure();

// console.log(increaseCnt())