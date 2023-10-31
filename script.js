const salary = 4000;
const lodging = 'apartment'
const size = 'large'

const expenses = {
    food: 51.7501.toFixed(2),
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none : 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}
console.log(rent)

const taxAsDecimal = parseFloat(tax[913]) / 100;
console.log('Tax is', taxAsDecimal)
const startingAfterTax = salary * (1 - taxAsDecimal);
console.log('Starting after tax is', startingAfterTax)
const type = String(size) + '-' + String(lodging);
console.log(type)
const balance = startingAfterTax - expenses.transport - expenses.food - rent[type];
console.log('Total balance is', balance)

// line 6. Converted value into 2 fixed decimal 
// line 29. Placed square bracket on '913' to access element from rent array in line 13
// line 29. Added parseFloat to 'tax' variable in line 28 to convert string into a decimal number before dicviding by 100
// line 32. Added '-' quotes inbetween lodging and size to identify as space break
// line 33. Reveresed the order of vaariable to match rent key
// line 35. Replaced curved bracket with fullstops to reference a direct element in 'expenses'
// line 35. added 'startinfAfterTax in the calculation of total balance
// line 33. Replaced 'expenses(rent.type)' with 'rent[type]' so rent can reference type variable as a matching key 