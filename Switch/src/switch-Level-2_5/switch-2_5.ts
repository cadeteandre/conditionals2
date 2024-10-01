const checkBtn = document.querySelector('#checkBtn') as HTMLInputElement;

function check() {
    const bundeslandInfo = document.querySelector('#bundeslandInfo') as HTMLInputElement;
    const bundeslandInfoErgebnis = document.querySelector('#bundeslandInfoErgebnis') as HTMLElement;

    switch(true) {
        case (bundeslandInfo.value === 'Baden-Württemberg'): 
            bundeslandInfoErgebnis.innerText = 'Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt';
        break;
        case (bundeslandInfo.value === 'Bayern'):
            bundeslandInfoErgebnis.innerText =  'Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt';
        break;
        case (bundeslandInfo.value === 'Berlin'):
            bundeslandInfoErgebnis.innerText = 'Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt';
        break;
        case (bundeslandInfo.value === 'Brandenburg'):
            bundeslandInfoErgebnis.innerText = 'Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt';
        break;
        case (bundeslandInfo.value === 'Bremen'):
            bundeslandInfoErgebnis.innerText = 'Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt';
        break;
        case (bundeslandInfo.value === 'Hamburg'):
            bundeslandInfoErgebnis.innerText = 'Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt';
        break;
        case (bundeslandInfo.value === 'Hessen'):
            bundeslandInfoErgebnis.innerText = 'Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt';
        break;
        case (bundeslandInfo.value === 'Mecklenburg-Vorpommern'):
            bundeslandInfoErgebnis.innerText = 'Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt';
        break;
        case (bundeslandInfo.value === 'Niedersachsen'):
            bundeslandInfoErgebnis.innerText = 'Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt';
        break;
        case (bundeslandInfo.value === 'Nordrhein-Westfalen'):
            bundeslandInfoErgebnis.innerText = 'Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt';
        break;
        case (bundeslandInfo.value === 'Rheinland-Pfalz'):
            bundeslandInfoErgebnis.innerText = 'Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt';
        break;
        case (bundeslandInfo.value === 'Saarland'):
            bundeslandInfoErgebnis.innerText = 'Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt';
        break;
        case (bundeslandInfo.value === 'Sachsen'):
            bundeslandInfoErgebnis.innerText = 'Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt';
        break;
        case (bundeslandInfo.value === 'Sachsen-Anhalt'):
            bundeslandInfoErgebnis.innerText = 'Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt';
        break;
        case (bundeslandInfo.value === 'Schleswig-Holstein'):
            bundeslandInfoErgebnis.innerText = 'Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt';
        break;
        case (bundeslandInfo.value === 'Thüringen'):
            bundeslandInfoErgebnis.innerText = 'Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt';
        break;
        default: bundeslandInfoErgebnis.innerText = 'Ein solches Bundesland gibt es in Deutschland nicht.';
    }
}

checkBtn.addEventListener('click', check);


// =========================================
//          Info für die Aufgabe
// =========================================
// Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt

// Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt

// Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt

// Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt

// Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt

// Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt

// Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt

// Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt

// Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt

// Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt

// Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt

// Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt

// Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt

// Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt

// Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt

// Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt

// Ein solches Bundesland gibt es in Deutschland nicht.