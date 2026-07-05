const questions = [
{
question:"Ohm's Law states that:",
options:[
"V = I × R",
"P = V × I",
"R = V × I",
"I = V × R"
],
answer:0
},
{
question:"The SI unit of resistance is:",
options:[
"Ohm",
"Volt",
"Ampere",
"Watt"
],
answer:0
},
{
question:"Which machine converts mechanical energy into electrical energy?",
options:[
"Transformer",
"Motor",
"Generator",
"Rectifier"
],
answer:2
}
];

let currentQuestion = 0;
let score = 0;

function startTest(subject){
    document.getElementById("quizBox").style.display="block";
    currentQuestion=0;
    score=0;
    loadQuestion();
}

function loadQuestion(){

const q=questions[currentQuestion];

document.getElementById("questionNo").innerHTML=
"Question "+(currentQuestion+1)+" / "+questions.length;

document.getElementById("question").innerHTML=q.question;

let html="";

q.options.forEach((option,index)=>{
html+=`<button onclick="checkAnswer(${index})">${option}</button>`;
});

document.getElementById("options").innerHTML=html;

}

function checkAnswer(index){

if(index===questions[currentQuestion].answer){
score++;
}

nextQuestion();

}

function nextQuestion(){

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}
else{

document.getElementById("quizBox").innerHTML=
`<h2>Test Completed</h2>
<h3>Your Score : ${score} / ${questions.length}</h3>`;

}

}

function previousQuestion(){

if(currentQuestion>0){
currentQuestion--;
loadQuestion();
}

}
