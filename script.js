let btns = document.querySelectorAll("button");
let result = document.querySelector("#result");

for(let i = 0; i<btns.length; i++){
    btns[i].addEventListener("click", (e)=>{
        let buttonValue = e.target.innerText;
        if(buttonValue === "C"){
            clearResult();
        }
        else if(buttonValue=="="){
            calculateResult();
        }
        else {
            appendValue(buttonValue)
        }
    })
}
function clearResult(){
    result.value = "";
}
function calculateResult() {
    result.value = eval(result.value);
}
function appendValue(val) {
    result.value += val;
}