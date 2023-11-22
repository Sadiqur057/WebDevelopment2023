class Calculator{
    constructor(){
        document.querySelector('#display').value = '';
    }
    updateDisplay(num){
        let currDisplay = document.querySelector('#display').value ;
        return document.querySelector('#display').value =`${currDisplay}${num}`;
    }

}

calc = new Calculator();
calc.updateDisplay(1);
calc.updateDisplay(3);
