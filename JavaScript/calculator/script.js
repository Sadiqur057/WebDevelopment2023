class Calculator{
    constructor(){
        document.querySelector('#display').value = '';
    }
    updateDisplay(num){
        let currDisplay = document.querySelector('#display').value ;
        return document.querySelector('#display').value =`${currDisplay}${num}`;
    }
    clearDisplay(){
        return document.querySelector('#display').value='';
    }
    evaluate(num){
        let currDisplay = document.querySelector('#display').value ;
        if(currDisplay){
            return document.querySelector('#display').value =  eval(currDisplay);
        }
    }
}

calc = new Calculator();
// calc.updateDisplay(1);
// calc.updateDisplay('+');
// calc.updateDisplay(3);
// calc.updateDisplay(3);
// calc.evaluate()
// calc.clearDisplay();