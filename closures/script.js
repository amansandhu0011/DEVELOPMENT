const currentvalue = document.getElementById('value');
const incrementValue = document.getElementById('incBtn');
const resetValue = document.getElementById('resetBtn');
const decrementValue = document.getElementById('decBtn');

function changeValue(){
    let count = 0;
    
    const increment = () =>{
        count++ ;
        currentvalue.innerHTML = count;
        return count;
    }
    function decrement(){
        count--;
        currentvalue.innerHTML = count;
        return count;
    }
    function reset(){
        count = 0;
        currentvalue.innerHTML = count;
        return count;
    }
    
    return{
        increment,
        decrement,
        reset
    }
}

let a = changeValue();
let interval = null;
incrementValue.addEventListener("click",()=>{
    if(!interval){
    interval = window.setInterval(a.increment,1000);
    }
    // console.log(a.increment());
});
decrementValue.addEventListener("click",()=>{
    console.log(a.decrement());
});
resetValue.addEventListener("click",()=>{
    console.log(a.reset());
});