const currentvalue = document.getElementById('value');
const milisecondValue = document.getElementById('milisecondvalue');
const minuteValue = document.getElementById('minutevalue');
const incrementValue = document.getElementById('strtBtn');
const resetValue = document.getElementById('resetBtn');
const decrementValue = document.getElementById('stpBtn');

function changeValue(){
    let count = 0;
    let milisecond = 0;
    let minute = 0;
    let interval = null;

    const start = () => {
        if (!interval) {
            interval = setInterval(() => {
                milisecond += 10; 
                if (milisecond >= 1000) {
                    milisecond = 0;
                    count++; 
                }
                if(count>=60){
                    count=0;
                    minute++;
                }
                minuteValue.innerHTML = minute;
                currentvalue.innerHTML = count;
                milisecondValue.innerHTML = milisecond;
            }, 10); 
        }
    };

    const stop = () => {
        clearInterval(interval);
        interval = null; 
    };

    const reset = () => {
        clearInterval(interval);
        interval = null;
        count = 0;
        milisecond = 0;
        minute = 0;
        currentvalue.innerHTML = 0;
        minuteValue.innerHTML = 0;
        milisecondValue.innerHTML = 0;
    };
    
    return{
        start,
        stop,
        reset
    }
}

let a = changeValue();
let interval = null;
incrementValue.addEventListener("click", a.start);
decrementValue.addEventListener("click", a.stop);
resetValue.addEventListener("click", a.reset);