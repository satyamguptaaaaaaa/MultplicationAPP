const num1 = Math.ceil(Math.random()*10)


const num2 = Math.ceil(Math.random()*10)


const questionEl=document.getElementById("question")
const inputEl= document.getElementById("input")
const formEl=document.getElementById("form")
const scoreEl=document.getElementById("score")

questionEl.innerText=`what is  ${num1} 
multiplay by ${num2}:?`

const correctAns=num1*num2;
let score=JSON.parse(localStorage.getItem("score"));

if (!score){
  score=0;
}

scoreEl.innerText=`score:${score}`



formEl.addEventListener("submit",()=>{
  const userAns=input.value
  if (userAns== correctAns){
    score++;
     upadateLocalStorage()
    
  }
  else{
    score--;
     upadateLocalStorage()
  }
  
})

function upadateLocalStorage(){
  localStorage.setItem("score",JSON.
stringify(score))
}