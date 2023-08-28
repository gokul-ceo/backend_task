function questionFramer(task) {
    let question = '';
    const validOperators = [
        'plus', 'minus', 'by', 'into', 'sqrt', 'sin', 'cos', 'tan',
        'abs', 'ceil', 'floor', 'round', 'log', 'exp', 'min', 'max',
        'avg', 'sum', 'factorial', 'fibonacci', 'random', 'percentage',
        'convert', 'gcd', 'atan', 'acos', 'asin', 'power', 'mod'
    ];
    const validUnitOperators = ['sqrt', 'sin', 'cos', 'tan', 'abs', ]

    for (let index = 0; index < task.length; index++) {
        const element = Number(task[index]);

        if (!isNaN(element)) {
            question += element;
        } else {
            switch (task[index]) {
                case 'plus':
                    question += '+';
                    break;
                case 'minus':
                    question += '-';
                    break;
                case 'by':
                    question += '/';
                    break;
                case 'into':
                    question += '*';  
                    break;
                default:
                    break;
            }
        }
    }

    return question.trim();
}

const Taskexecuter = (task) => {
    let result = Number(task[0]);
    const validOperators = [
        'plus', 'minus', 'by', 'into', 'sqrt', 'sin', 'cos', 'tan',
        'abs', 'ceil', 'floor', 'round', 'log', 'exp', 'min', 'max',
        'avg', 'sum', 'factorial', 'fibonacci', 'random', 'percentage',
        'convert', 'gcd', 'atan', 'acos', 'asin', 'power', 'mod'
    ];

    for (let index = 1; index < task.length; index += 2) {  // Process every second element as an operator
        const operator = task[index];
        const num = Number(task[index + 1]);
        if (validOperators.includes(operator)){
            switch (operator) {
                case 'plus':
                    result += num;
                    break;
                case 'minus':
                    result -= num;
                    break;
                case 'by':
                    result /= num;
                    break;
                case 'into':
                    result *= num;
                    break;
                default:
                    break;
            }

        }
        else{
            console.log('Invalid operator');
        }
    }

    console.log("Question:", questionFramer(task));
    console.log("Result:", result);
};

module.exports = Taskexecuter;
