`use strict`;

// Щасливий квиток

const userTicket = prompt(`Введіть 6 цифр вашого квитка`);

const ticketNumber = userTicket.split(``);

if (ticketNumber[0] + ticketNumber[1] + ticketNumber[2] === ticketNumber[3] + ticketNumber[4] + ticketNumber[5]) {
    document.querySelector("#happyTicket").innerHTML = `Вітаємо! Ваш квиток щасливий :)`
} else { 
    document.querySelector("#happyTicket").innerHTML = `Упс... Ваш квиток нещасливий :( Купіть інший квиток!`
}

// Найкоротше слово

const yourString = prompt(`Введіть вислів розміром до 10 слів`);
const stringArray = yourString.split(" ");

// // console.log(stringArray[2]);
// // console.log(stringArray[2].length);

let shortestWord = stringArray[0];
let lettersNumber = 0;

for (i = 1; i < stringArray.length; i++) { 

    if (stringArray[i] <= shortestWord) {
        shortestWord = stringArray[i];
        lettersNumber = stringArray[i].length;
    } 
}
document.querySelector("#yourString").innerHTML = `Ви ввели такий рядок: ${yourString}.`;
document.querySelector("#shortestWord").innerHTML = `Кількість літер у найкоротшому слові: ${lettersNumber}.`

// ДНК

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

document.querySelector("#pairDna").innerHTML = `Пара до вашої ДНК: ${result}.`

// Секретний вагон

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

