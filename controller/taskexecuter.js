function questionFramer(task) {
    let question = '';

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
                    question += '*';  // Changed 'x' to '*'
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

    for (let index = 1; index < task.length; index += 2) {  // Process every second element as an operator
        const operator = task[index];
        const num = Number(task[index + 1]);

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

    console.log("Question:", questionFramer(task));
    console.log("Result:", result);
};

module.exports = Taskexecuter;
