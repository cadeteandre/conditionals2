
function quarterSales() {
    const salesMonth: number = Math.ceil(Math.random() * 12);
    let salesQuarter: string;

    switch(true) {
        case (salesMonth >= 1 && salesMonth <= 3):
            salesQuarter = '1.Quartal';
        break;
        case (salesMonth >= 4 && salesMonth <= 6):
            salesQuarter = '2.Quartal';
        break;
        case (salesMonth >= 7 && salesMonth <= 9):
            salesQuarter = '3.Quartal';
        break;
        case (salesMonth >= 10 && salesMonth <= 12):
            salesQuarter = '4.Quartal';
        break;
    }
    
    const totalSales: number = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
    let salesResult: string;
    console.log(`Total sales: ${totalSales}`);
    
    
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
    
}

quarterSales();

// Math.floor(Math.random() * (max - min + 1)) + 1000;