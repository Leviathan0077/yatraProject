export function formatPrice(amount) {
    let str = amount.toString();
    let [integerPart, decimalPart] = str.split('.');
    let lastThreeDigits = integerPart.slice(-3);
    let otherDigits = integerPart.slice(0, -3);
    
    if (otherDigits.length > 0) {
      otherDigits = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    }
  
    let formattedAmount = otherDigits + (otherDigits ? ',' : '') + lastThreeDigits;
    if (decimalPart) {
      formattedAmount += '.' + decimalPart;
    }
  
    return formattedAmount;
  }
  