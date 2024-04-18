// timer container variable
let timercon = document.getElementById('time-con');

// timer values
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

// Timer template
let min = 3;
let sec = 0;

let submitBtn = document.getElementById('submit')

// login details
let form = document.getElementById('form');
let nam = document.getElementById('name');
let loginBtn = document.getElementById('login');

// Answers
let caracas = document.getElementById('caracas');
let java = document.getElementById('java');
let year = document.getElementById('year');
let element = document.getElementById('element');
let nike = document.getElementById('nike');
let amazon = document.getElementById('amazon');
let saturn = document.getElementById('saturn');
let rome = document.getElementById('rome');
let panda = document.getElementById('panda');
let delta = document.getElementById('delta');

// Button to show answers
let showbtn = document.getElementById('show');

// question boxes
let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let q4 = document.getElementById('q4');
let q5 = document.getElementById('q5');
let q6 = document.getElementById('q6');
let q7 = document.getElementById('q7');
let q8 = document.getElementById('q8');
let q9 = document.getElementById('q9');
let q10 = document.getElementById('q10');

// answer inputs
let q1ans = document.getElementById('q1ans');
let q2ans = document.getElementById('q2ans');
let q3ans = document.getElementById('q3ans');
let q4ans = document.getElementById('q4ans');
let q5ans = document.getElementById('q5ans');
let q6ans = document.getElementById('q6ans');
let q7ans = document.getElementById('q7ans');
let q8ans = document.getElementById('q8ans');
let q9ans = document.getElementById('q9ans');
let q10ans = document.getElementById('q10ans');

// result text
let result = document.getElementById('results')

let myInterval;

// Validate LOGIN form
loginBtn.addEventListener('click', function () {
    if (nam.value === ''){
        alert('Please enter your name');
        nam.style.border = 'solid 1px red';
    }else{
        nam.style.border = 'solid 1px green';
        alert('Login Successful!!!');
    }
    setTimeout(()=> {
        form.style.display = 'none'
        q1.style.display = 'block'
        timercon.style.display = 'flex';

        myInterval = setInterval(() => {
            seconds.innerHTML = sec;
            minutes.innerHTML = min;

            sec--;
            console.log(sec);
            if (sec < 1) {
                min--;
                sec = 59;
                minutes.innerHTML = min;
            }
            if (min < 0) {
                minutes.innerHTML = '00';
                seconds.innerHTML = '00';
                alert(`Time's up, ${nam.value}`)
                clearInterval (myInterval);
                q1.style.display = 'none';
                q2.style.display = 'none';
                q3.style.display = 'none';
                q4.style.display = 'none';
                q5.style.display = 'none';
                q6.style.display = 'none';
                q7.style.display = 'none';
                q8.style.display = 'none';
                q9.style.display = 'none';
                q10.style.display = 'none';
                submit();
            }

        }, 1000);
    }, 3000);
});


function next1() {
    q1.style.display = 'none';
    q2.style.display = 'block';
    
}

function prev2() {
    q2.style.display = 'none';
    q1.style.display = 'block';
}

function next2() {
    q2.style.display = 'none';
    q3.style.display = 'block';
    
}

function prev3() {
    q3.style.display = 'none';
    q2.style.display = 'block';
}

function next3() {
    q3.style.display = 'none';
    q4.style.display = 'block';
    
}

function prev4() {
    q4.style.display = 'none';
    q3.style.display = 'block';
}

function next4() {
    q4.style.display = 'none';
    q5.style.display = 'block';
    
}

function prev5() {
    q5.style.display = 'none';
    q4.style.display = 'block';
}

function next5() {
    q5.style.display = 'none';
    q6.style.display = 'block';
    
}

function prev6() {
    q6.style.display = 'none';
    q5.style.display = 'block';
}

function next6() {
    q6.style.display = 'none';
    q7.style.display = 'block';
    
}

function prev7() {
    q7.style.display = 'none';
    q6.style.display = 'block';
}

function next7() {
    q7.style.display = 'none';
    q8.style.display = 'block';
    
}

function prev8() {
    q8.style.display = 'none';
    q7.style.display = 'block';
}

function next8() {
    q8.style.display = 'none';
    q9.style.display = 'block';
    
}

function prev9() {
    q9.style.display = 'none';
    q8.style.display = 'block';
}

function next9() {
    q9.style.display = 'none';
    q10.style.display = 'block';
    
}

function prev10() {
    q10.style.display = 'none';
    q9.style.display = 'block';
}

function q1a() {
    q1ans.value = 'Rosario';
}
function q1b() {
    q1ans.value = 'Caracas';
}
function q1c() {
    q1ans.value = 'San Jose';
}
function q1d() {
    q1ans.value = 'Santiago';
}

function q2a() {
    q2ans.value = 'Vue';
}
function q2b() {
    q2ans.value = 'Java';
}
function q2c() {
    q2ans.value = 'Angular';
}
function q2d() {
    q2ans.value = 'React';
}

function q3a() {
    q3ans.value = '1945';
}
function q3b() {
    q3ans.value = '1920';
}
function q3c() {
    q3ans.value = '1988';
}
function q3d() {
    q3ans.value = '1967';
}

function q4a() {
    q4ans.value = '105';
}
function q4b() {
    q4ans.value = '80';
}
function q4c() {
    q4ans.value = '118';
}
function q4d() {
    q4ans.value = '165';
}

function q5a() {
    q5ans.value = 'New Balance';
}
function q5b() {
    q5ans.value = 'Adidas';
}
function q5c() {
    q5ans.value = 'Nike';
}
function q5d() {
    q5ans.value = 'Fila';
}

function q6a() {
    q6ans.value = 'Google';
}
function q6b() {
    q6ans.value = 'Amazon';
}
function q6c() {
    q6ans.value = 'Asos';
}
function q6d() {
    q6ans.value = 'Ali Express';
}

function q7a() {
    q7ans.value = 'Venus';
}
function q7b() {
    q7ans.value = 'Mars';
}
function q7c() {
    q7ans.value = 'Jupiter';
}
function q7d() {
    q7ans.value = 'Saturn';
}

function q8a() {
    q8ans.value = 'Rome';
}
function q8b() {
    q8ans.value = 'Egypt';
}
function q8c() {
    q8ans.value = 'Athens';
}
function q8d() {
    q8ans.value = 'Jerico';
}

function q9a() {
    q9ans.value = 'Herd';
}
function q9b() {
    q9ans.value = 'Pride';
}
function q9c() {
    q9ans.value = 'Embarrassment';
}
function q9d() {
    q9ans.value = 'School';
}

function q10a() {
    q10ans.value = 'Alpha';
}
function q10b() {
    q10ans.value = 'Delta';
}
function q10c() {
    q10ans.value = 'Omega';
}
function q10d() {
    q10ans.value = 'Gamma';
}

// submit answers
function submit(myInterval) {
    clearInterval(myInterval);


    caracas.style.backgroundColor = 'green';
    caracas.style.color = 'white';

    java.style.backgroundColor = 'green';
    java.style.color = 'white';

    year.style.backgroundColor = 'green';
    year.style.color = 'white';

    element.style.backgroundColor = 'green';
    element.style.color = 'white';

    nike.style.backgroundColor = 'green';
    nike.style.color = 'white';

    amazon.style.backgroundColor = 'green';
    amazon.style.color = 'white';

    saturn.style.backgroundColor = 'green';
    saturn.style.color = 'white';

    rome.style.backgroundColor = 'green';
    rome.style.color = 'white';

    panda.style.backgroundColor = 'green';
    panda.style.color = 'white';

    delta.style.backgroundColor = 'green';
    delta.style.color = 'white';

    q10.style.display = 'none';
    showbtn.style.display = 'block';
    let counter = 0;

    if(q1ans.value === 'Caracas'){
        counter++;
    }

    if(q2ans.value === 'Java'){
        counter++;
    }
    
    if(q3ans.value === '1945'){
        counter++;
    }
    
    if(q4ans.value === '118'){
        counter++;
    }
    
    if(q5ans.value === 'Nike'){
        counter++;
    }
    
    if(q6ans.value === 'Amazon'){
        counter++;
    }
    
    if(q7ans.value === 'Saturn'){
        counter++;
    }
    
    if(q8ans.value === 'Rome'){
        counter++;
    }
    
    if(q9ans.value === 'Embarrassment'){
        counter++;
    }
    
    if(q10ans.value === 'Delta'){
        counter++;
    }

    result.style.display = 'flex';
    result.style.color = 'lavender'
    result.innerHTML = `Dear ${nam.value}, you scored ${counter} over 10`;
}   

function show(){
    result.style.display = 'none';
    q10.style.display = 'block';
    showbtn.style.display = 'none';
}
