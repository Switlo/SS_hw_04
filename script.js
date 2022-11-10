`use strict`;

// 1. Щасливий квиток

const userTicket = prompt(`Введіть 6 цифр вашого квитка`);

const ticketNumber = userTicket.split(``);

let firstPart = 0;
let secondPart = 0;

for (let i = 0, j = 3; i < 3; i++, j++) { 
    firstPart += Number(ticketNumber[i]);
    secondPart += +ticketNumber[j];   // представлені 2 варіанти переведення рядка у число
}

if (firstPart === secondPart) {
    document.querySelector("#happyTicket").innerHTML = `Номер вашого квитка: ${userTicket}. Вітаємо! Це щасливий квиток :)`
} else { 
    document.querySelector("#happyTicket").innerHTML = `Номер вашого квитка: ${userTicket}. Упс... Ваш квиток нещасливий :( Купіть інший!`
}

// 2. Найкоротше слово

const yourString = prompt(`Введіть вислів розміром до 10 слів`);
const stringArray = yourString.split(" ");

let lettersNumber = stringArray[0].length;
const shortestWords = [stringArray[0]];


for (i = 1; i < stringArray.length; i++) { 
    const curentLength = stringArray[i].length;

    if (curentLength <= lettersNumber) {
        if (curentLength < lettersNumber) shortestWords.length = 0; // одна дія після if виконується без {}
        lettersNumber = curentLength;
        if (!shortestWords.includes(stringArray[i])) { 
            shortestWords.push(stringArray[i]);
        }
    } 
}
document.querySelector("#yourString").innerHTML = `Ви ввели такий рядок: ${yourString}.`;
document.querySelector("#shortestWord").innerHTML = `Кількість літер у найкоротшому слові: ${lettersNumber}. Ось ці слова: ${shortestWords}.`

// 3. ДНК

const userDna = prompt(`Напишіть першу частину Дезоксирибонуклеїнової кислоти у ДНК людини (комбінація з 4-х літер: A, C, G, T)`);

let result = ``;

for (let i = 0; i < userDna.length; i++) {
    if (userDna[i] === 'A') {
        result = result + 'T';
    } else if (userDna[i] === 'T') {
        result = result + 'A';
    } else if (userDna[i] === 'C') {
        result = result + 'G';
    } else if (userDna[i] === 'G') { 
        result = result + 'C';
    }
}

document.querySelector("#pairDna").innerHTML = `Ви ввели комбінацію: ${userDna}. Пара до такої ДНК: ${result}.`

// 4. Секретний вагон

const yourPlace = +prompt(`Введіть номер свого місця (від 1 до 54).`);
let compartmentNumber = 0;

if (yourPlace % 2 !== 0 && yourPlace <= 36) {
    compartmentNumber = Math.floor((yourPlace - 1) / 4 + 1);
    document.querySelector("#yourPlace").innerHTML = `У вас нижнє не бокове місце у купе №${compartmentNumber}.`

} else if (yourPlace % 2 !== 0 && yourPlace > 36) {
    compartmentNumber = Math.floor((54 - yourPlace) / 2 + 1);
    document.querySelector("#yourPlace").innerHTML = `У вас нижнє бокове місце у купе №${compartmentNumber}.`

} else if (yourPlace % 2 === 0 && yourPlace <= 36) { 
    compartmentNumber = Math.floor((yourPlace - 1) / 4 + 1);
    document.querySelector("#yourPlace").innerHTML = `У вас верхнє не бокове місце у купе №${compartmentNumber}.`

} else {
    compartmentNumber = Math.floor((54 - yourPlace) / 2 + 1);
    document.querySelector("#yourPlace").innerHTML = `У вас верхнє бокове місце у купе №${compartmentNumber}.`
}

// 5. Калькулятор

const string = prompt(`Введіть послідовно через пробіл два числа та дію, яку з ними потрібно виконати (/, *, + чи -)`);

let array = string.split(" ");
let firstElement = array[1];
let secondElement = array[2];

array.splice(1, 2, secondElement, firstElement);

let result2 = eval(array.join(" "));

document.querySelector("#answer").innerHTML = `Ви ввели: ${string}. Результат: ${result2}.`;

// 6. Tic-Tac-Toe Checker

const userGameArray = [[0, 0, 1], [0, 1, 2], [2, 1, 0]];

const newGameArray = userGameArray.reduce(function (result, current) {return result.concat(current); }, []);

let sumX = 0;
let sumO = 0;
    
if (newGameArray.includes(0)) {
    console.log(`-1: гра триває!`);    
} else {   
    for (const num of newGameArray) {
        if (num === 1) sumX++;
        if (num === 2) sumO++;
    }
    if (sumX + sumO === 9 && sumX > sumO) console.log(`1: Х виграв!`);
    if (sumX + sumO === 9 && sumX < sumO) console.log(`2: 0 виграв!`);
    if (sumX + sumO === 9 && sumX === sumO) console.log(`0: Нічия!`); // НЕ МОЖЕ БУТИ! ))
}

// document.querySelector("#winner").innerHTML = `-1: гра триває!`;