const firstTime = 0;
let currentResult = firstTime;
let logEntries=[];

function getNumber(){
    return NumberInput = parseInt(userInput.value);
}

function WriteToLog(operator, beforeCal, number, afterCal){
    const LogEntry = {
        operator : operator,
        initial_Number : beforeCal,
        number: number,
        Result: afterCal
    };
    logEntries.push(LogEntry);
    console.log(logEntries);
    let calculationText= `${beforeCal} ${operator} ${number}`;
    outputResult(afterCal, calculationText);
}

function calculate(operatorType){
    let initialNumber = currentResult;
    let numberCal = getNumber();

    if (operatorType === "ADD"){
        currentResult += numberCal;
        WriteToLog('+', initialNumber, numberCal, currentResult);    
    }

    if (operatorType === "SUBTRACT"){
        currentResult -= numberCal;
        WriteToLog('-', initialNumber, numberCal, currentResult);    
    }

    if (operatorType === "MULTIPLY"){
        currentResult = currentResult * numberCal;
        WriteToLog('*', initialNumber, numberCal, currentResult);    
    }

    if (operatorType === "DIVIDE"){
        currentResult = currentResult / numberCal;
        WriteToLog('/', initialNumber, numberCal, currentResult);    
    }
}

function add(){
    calculate("ADD");
}

function sub(){
    calculate("SUBTRACT");
}

function mul(){
    calculate("MULTIPLY");
}

function div(){
    calculate("DIVIDE");
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', mul);
divideBtn.addEventListener('click', div);