const salesMonth: number = Math.ceil(Math.random() * 12);
const totalSales: number = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
let salesQuarter: string = "";
let salesResult: string;
console.log(`Quarter: ${salesMonth}`);
console.log(`Total sales: ${totalSales}`);

switch(salesMonth) {
    case 1:
    case 2:
    case 3:
        salesQuarter = '1.Quartal';
    break;
    case 4:
    case 5:
    case 6:
        salesQuarter = '2.Quartal';
    break;
    case 7:
    case 8:
    case 9:
        salesQuarter = '3.Quartal';
    break;
    case 10:
    case 11:
    case 12:
        salesQuarter = '4.Quartal';
    break;
}    

switch(true) {
    case (totalSales >= 1000 && totalSales <= 2500):
        salesResult = 'schlecht';            
    break;
    case (totalSales >= 2501 && totalSales <= 5000):
        salesResult = 'mittelmäßig';  
    break;
    case (totalSales >= 5001 && totalSales <= 7500):
        salesResult = 'hoch';  
    break;
    default: salesResult = 'unglaublich';
}

console.log(`Im ${salesQuarter} war der Umsatz ${salesResult}`);


// Math.floor(Math.random() * (max - min + 1)) + 1000;