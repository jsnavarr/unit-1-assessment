var $plusButtonEl = document.getElementById("plus-button").addEventListener('click', increase);
var $minusButtonEl = document.getElementById("minus-button").addEventListener('click', decrease);
var $inputEl = document.getElementById("inputN");
var $resultEl = document.getElementById("result");

function increase(){
    if(parseInt($inputEl.value)){
        $resultEl.textContent = parseInt($resultEl.textContent)+parseInt($inputEl.value);
    }
    if(parseInt($resultEl.textContent)<0){
        $resultEl.style.color = 'red';
    } else{
        $resultEl.style.color = 'black';
    }
}

function decrease(){
    if(parseInt($inputEl.value)){
        $resultEl.textContent = parseInt($resultEl.textContent)-parseInt($inputEl.value);
    }
    if(parseInt($resultEl.textContent)<0){
        $resultEl.style.color = 'red';
    } else{
        $resultEl.style.color = 'black';
    }
}