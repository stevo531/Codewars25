function decimalPlaces(n) {
    if (!isFinite(n)) return 0; // Handles NaN and Infinity
    
    let str = n.toString();
    if (str.includes('e')) {
        // Handle scientific notation
        let [base, exponent] = str.split('e').map(Number);
        let decimalPart = base.toString().split('.')[1] || '';
        return Math.max(0, decimalPart.length - exponent);
    }
    
    let decimalPart = str.split('.')[1];
    return decimalPart ? decimalPart.length : 0;
}