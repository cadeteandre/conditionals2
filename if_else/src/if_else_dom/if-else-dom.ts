// ===================================
//            Level-1_1
// ===================================
const inputAge = document.querySelector('#inputAge') as HTMLInputElement;
const checkBtn = document.querySelector('#checkBtn') as HTMLInputElement;
const result = document.querySelector('.result') as HTMLElement;

if(inputAge && checkBtn && result) {
    console.log('Elements found');
} else {
    console.log('Elements not found');
}

function adult() {
    if(Number(inputAge.value) >= 18) {
        result.textContent = 'Voolljährig';
    } else {
        result.textContent = 'Minderjährig';
    }
}

checkBtn.addEventListener('click', adult);

// ===================================
//            Level-1_2
// ===================================
const weatherQuality = document.querySelector('#weatherQuality') as HTMLInputElement;
const sendenBtn = document.querySelector('#sendenBtn') as HTMLInputElement;
const result2 = document.querySelector('.result2') as HTMLElement;

if(weatherQuality && sendenBtn && result2) {
    console.log('Elements found');
} else {
    console.log('Elements not found');
}

function weather() {
   if(Number(weatherQuality.value) >= 8 && Number(weatherQuality.value) <= 10) {
    result2.textContent = 'Die Wetter Qualität is: Super!';
   } else if(Number(weatherQuality.value) >= 6 && Number(weatherQuality.value) <= 7) {
    result2.textContent = 'Die Wetter Qualität is: gut';
   } else if(Number(weatherQuality.value) >= 3 && Number(weatherQuality.value) <= 5){
    result2.textContent = 'Die Wetter Qualität is: okay';
   } else {
    result2.textContent = 'Die Wetter Qualität is: schlecht!';
   }
}

sendenBtn.addEventListener('click', weather);