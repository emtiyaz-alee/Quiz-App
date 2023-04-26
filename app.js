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

const questions = [{
   'quest': 'CSS Stands for ',
    'a': 'Cascading Style Sheet',
    'b': 'Cascading Sheet Style',
    'c': 'Copy Style Sheet',
    'd': 'Copy Sheet Style',
    'correct': 'a'

}, {
    'quest': 'HTML Stands for ',
    'a': 'HyperTest Mark langauge',
    'b': 'HyperTest Machine Learning',
    'c': 'HyperText Markup langauge',
    'd': 'HyperText Mark langauge',
    'correct': 'c'

}, {
    'quest': 'HTML used for to ',
    'a': 'Provides functionality ',
    'b': 'For Styling webpages',
    'c': 'Give Structure ',
    'd': 'None of these',
    'correct': 'c'

}, {
    'quest': 'CSS used  for ',
    'a': 'Provides functionality ',
    'b': 'For Styling webpages',
    'c': 'Give Structure ',
    'd': 'None of these',
    'correct': 'b'

}, {
    'quest': 'JavaScript used for to ',
    'a': 'Provides functionality ',
    'b': 'For Styling webpages',
    'c': 'Give Structure ',
    'd': 'None of these',
    'correct': 'a'

}]

let index = 0
let total = questions.length
let right = 0,
    wrong = 0;
let getQuestion = document.getElementById('question')
let getOptions = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset()
    const data = questions[index]
    getQuestion.innerText = index + 1 + ')' + '' + data.quest
    getOptions[0].nextElementSibling.innerText = data.a
    getOptions[1].nextElementSibling.innerText = data.b
    getOptions[2].nextElementSibling.innerText = data.c
    getOptions[3].nextElementSibling.innerText = data.d
}


const submit = () => {
    const data = questions[index.correct]
    const ans = getAns()
    if (ans == data) {
        right++
    }
    else {
       wrong++
    }
    index++
    loadQuestion()

    return;
}
const getAns = () => {
    let answer;
    getOptions.forEach(
        (input) => {
        if (input.checked) {
            answer=input.value
            
        }
    })
    return answer
}
const reset = () => {
    getOptions.forEach((input) => {
        input.checked = false
    })
}
loadQuestion()
const endQuiz = () => {
    result()
    let abc=`${right}/${total}`
    console.log(abc)
}
const result=()=>{
    let val=3
   if(right){
    console.log('pass')
   }
   else{
    console.log('fail')
   }
}
