function leftDays() { //11차 자바스크립트 객체 예제 활용

    let now = new Date();
    let Dday = new Date(document.getElementById("date").value);
    let diff = Dday.getTime() - now.getTime();
    diff /= 1000;
    let seconds = Math.floor(diff%60);
    diff /= 60;
    let minutes = Math.floor(diff%60);
    diff /= 60;
    let hours = Math.floor(diff%60);
    diff /= 24;
    let days = Math.floor(diff%24);
    
    let str = '여행날까지 ' + days + '일' + hours + '시간' + minutes + '분' + seconds + '초 남았습니다.';
    document.getElementById("remain").innerHTML = str;

    setTimeout(leftDays, 1000);
}


function getCheckbox() { //14주차 자바스크립트 활용 예제 활용

    const adds = document.getElementsByName("myAdd");
    let resultText = ' | ';

    for (let i = 0; i < adds.length; i++) {
        if (adds[i].checked) {
            resultText += adds[i].value;
            resultText += '  |  '
        }
    }
    document.getElementById("result").innerHTML = resultText;
}