// 1.

let firstName = 'jonas';
let lastName = 'jonaitis';
let idNumber = '38507131234';

// 2.

// Ilgio patikrinimas
if (!(firstName.length >= 3) || !(lastName.length >= 5))
  console.error('netinka vardo arba pavardės ilgis');

// Vardo ir pavardės apdorojimas
console.log(firstName[0].toUpperCase() + firstName.slice(1).toLowerCase());
console.log(lastName.toUpperCase());

// Asmens kodo analizė
let yearDigits = idNumber.slice(1, 3);
let centuryDigits = Number(yearDigits) > 24 ? '19' : '20';
console.log(
  `${centuryDigits}${yearDigits}-${idNumber.slice(3, 5)}-${idNumber.slice(
    5,
    7
  )}`
);

switch (idNumber[2]) {
  //string type because switch works with === comparison
  case '1':
  case '2':
    console.log('Gimimo vieta: Lietuva');
    break;
  case '3':
    console.log('Gimimo vieta: Užsienis');
    break;
  default:
    console.log('Gimimo vieta: Nežinoma');
}

// 4.
if (idNumber.length !== 11 || isNaN(idNumber))
  console.log('netinkamas asmens kodo formatas');
