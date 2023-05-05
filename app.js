function signup() {
    var email = document.getElementById('semail').value
    var pass = document.getElementById('spass').value
    localStorage.setItem('email', email)
    localStorage.setItem('pass', pass)
    alert('You have successfuly sign up')
    location.href = './login.html'
}
function login() {
    var email = document.getElementById('lemail').value
    var pass = document.getElementById('lpass').value
    var getemail = localStorage.getItem('email')
    var getpass = localStorage.getItem('pass')
    if (email === getemail && pass === getpass) {
        alert('login successfully')
        location.href = './dashboard.html'
    }
    else {
        alert("incorrect email or password")
        location.href = './signup.html'
    }

}
function startthequiz() {
    location.href = './quizpage.html'
}

var min = document.getElementById('min')
var jsmin = 05
setInterval(function () {
    jsmin--
    min.innerHTML = jsmin
   

}, 60000)

const array = [
    {
        Question: 'JavaScript used for to ',
        a: 'Provides functionality ',
        b: 'For Styling webpages',
        c: 'Give Structure ',
        d: 'None of these',
        correct: 'a'
    },
    {
        Question: 'HTML used for to ',
        a: 'Provides functionality ',
        b: 'For Styling webpages',
        c: 'Give Structure ',
        d: 'None of these',
        correct: 'c'
    },
    {
        Question: 'CSS used  for ',
        a: 'Provides functionality ',
        b: 'For Styling webpages',
        c: 'Give Structure ',
        d: 'None of these',
        correct: 'b'   
    },
    {
        Question: 'CSS Stands for ',
    a: 'Cascading Style Sheet',
    b: 'Cascading Sheet Style',
    c: 'Copy Style Sheet',
    d: 'Copy Sheet Style',
    correct: 'a'
    },
    {
        Question: 'HTML Stands for ',
        a: 'HyperTest Mark langauge',
        b: 'HyperTest Machine Learning',
        c: 'HyperText Markup langauge',
        d: 'HyperText Mark langauge',
        correct: 'c' 
    },
]
let index = 0;
let score = 0;
let total = array.length;
let quebox = document.getElementById("quebox");
let options = document.querySelectorAll(".options");

const loadFunction = () => {
    if (index === total) {
        return endQuizz();

    }

    let data = array[index];
    quebox.innerText = `${index + 1}) ${data.Question}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
    reset();
}
const submitQuizz = () => {
    var ans = getAnswer();
    let data = array[index];
    if (ans === data.correct) {
        score++;
        console.log(score)
    }
    else {
        console.log("your answer is Wrong")
    }
    index++;
    loadFunction();
}


const getAnswer = () => {
    options.forEach((input) => {
        if (input.checked) {
            value = input.value
        }
    })
    return value
}

const reset = () => {
    options.forEach((input) => {
        input.checked = false
    })
}

const endQuizz = () => {
    var check = document.querySelector(".container2");
    check.innerHTML =
        `<div style = "text-align : center">
    <h1 style=color:white> You have got ${score} out of ${total} </h1>
    <h1 class = "abc">  Percentage  ${percentage(score, total)} </h1>
    </div>`
    check.classList.remove("container2")
    check.classList.add("container3")
    console.log(check.classList)
}

function percentage(score, total) {
    return score * 100 / total + "%"
    
}

loadFunction()