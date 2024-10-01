// ============================
//          Level-1_5
// ============================
let weekdayAsNumber: number;
let weekdayAsString: string;

// window.prompt('Please insert a number from 1 to 7');
weekdayAsNumber = Number(window.prompt('Please insert a number from 1 to 7'));

switch(true) {
    // case (weekdayAsNumber < 1 || weekdayAsNumber > 7): alert('You didnt insert a number from 1 to 7. Please, refresh the page');
    // break;
    case (weekdayAsNumber === 1): weekdayAsString = 'Montag';
    break;
    case (weekdayAsNumber === 2): weekdayAsString = 'Dienstag';
    break;
    case (weekdayAsNumber === 3): weekdayAsString = 'Mittwoch';
    break;
    case (weekdayAsNumber === 4): weekdayAsString = 'Donenrstag';
    break;
    case (weekdayAsNumber === 5): weekdayAsString = 'Freitag';
    break;
    case (weekdayAsNumber === 6): weekdayAsString = 'Samstag';
    break;
    case (weekdayAsNumber === 7): weekdayAsString = 'Sonntag';
    break;
    default: console.log("Weekday must be between 1 and 7");
}

console.log(weekdayAsNumber);
console.log(weekdayAsString);