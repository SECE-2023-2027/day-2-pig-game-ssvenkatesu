// //tag selector 

// let tag=document.getElementsByTagName("p")
// console.log(tag)

// //id selector

// let id=document.getElementById('a')
// console.log(id)

// //class selector

// let classe = document.getElementsByClassName('b')
// console.log(classe)

// //query selector

// let q=document.querySelector(".b")
// console.log(q)

// //query selector all

// let q1=document.querySelectorAll("p")
// console.log(q1)


// //read write using dom

// console.log(q1[0].textContent)
// console.log(q1[1].textContent)
// console.log(q1[2].textContent)

// q1[0].textContent="bye Bye"
// console.log(q1[0].textContent)

// q1[0].style.color="red"
// let bdy=document.getElementsByTagName('body')[0]

// let div=document.createElement('div')
// bdy.appendChild(div)
// let p=document.createElement('p')
// p.textContent="creating from the dom"
// p.style.color="blue"
// div.appendChild(p)


let secretNumber = Math.floor(Math.random() * 100) + 1;
let score = 20;

const checkBtn = document.getElementById('checkBtn');
const againBtn = document.querySelector('.againbtn');
let inputValue = document.getElementById('inputValue');
let guessedValue = document.getElementById('guessedValue');
let guessedNumberText = document.getElementById('guessedNumber');
let overviewText = document.querySelector('.Overview p');
const scoreContent = document.getElementById('score');
let inputContainer = document.getElementById('inputid');

scoreContent.textContent = `Total Score : ${score}`;

checkBtn.addEventListener('click', () => {
    const guess = Number(inputValue.value);

    if (!guess || guess < 1 || guess > 100) {
        overviewText.textContent = 'Enter a number between 1 and 100!';
    } else if (guess === secretNumber) {
        score += 1;
        guessedValue.textContent = secretNumber;
        overviewText.textContent = 'Correct Number!';
        document.querySelector('.container').style.backgroundColor = '#60b347';
    } else if (guess > secretNumber) {
        score -= 1;
        overviewText.textContent = '📉 Too high!';
    } else {
        score -= 1;
        overviewText.textContent = '📈 Too low!';
    }

    guessedNumberText.textContent = `Guessed Number: ${guess}`;
    scoreContent.textContent = `Total Score : ${score}`;

    if (score < 0 && inputContainer) {
        overviewText.textContent = 'Game Over! Input and Check removed!';
        inputContainer.remove();
        inputContainer = null;
    }
});

againBtn.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    score = 20;

    guessedValue.textContent = '?';
    guessedNumberText.textContent = 'Guessed Number: ';
    overviewText.textContent = 'Guessing Number ...';
    scoreContent.textContent = `Total Score : ${score}`;
    document.querySelector('.container').style.backgroundColor = 'black';

    if (!inputContainer) {
        const newInputDiv = document.createElement('div');
        newInputDiv.className = 'input';
        newInputDiv.id = 'inputid';

        const label = document.createElement('label');
        label.id = 'label';
        label.setAttribute('for', 'inputValue');
        label.textContent = 'input';

        const input = document.createElement('input');
        input.id = 'inputValue';
        input.className = 'inputval';
        input.type = 'number';

        const button = document.createElement('button');
        button.className = 'Againbtn';
        button.id = 'checkBtn';
        button.textContent = 'Check';

        newInputDiv.appendChild(label);
        newInputDiv.appendChild(input);
        newInputDiv.appendChild(button);

        document.querySelector('.con2').prepend(newInputDiv);

        inputValue = input;
        inputContainer = newInputDiv;

        button.addEventListener('click', () => checkBtn.click());
    }
});
