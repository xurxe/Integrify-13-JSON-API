/* WED 20.MAR.2019 ********************************************************* */

/* Data formats:
- CSV
- XML
- TXT
- TSV
- JSON
*/

/* // define object
const student = {
name: 'Xurxe',
age: 29,
skills: ['HTML', 'CSS', 'JS'],
country: 'Galicia',
};
console.log(student);
console.log(typeof student);


// stringify
const studentJson = JSON.stringify(student);
console.log(studentJson);
console.log(typeof studentJson);


// stringify with optional parameters
const studentJson1 = JSON.stringify(student, undefined, 4);
console.log(studentJson1);
console.log(typeof studentJson1);


// objectify a JSON string
const studentObj = JSON.parse(studentJson);
console.log(studentObj);
console.log(typeof studentObj); */






// setItem to local storage
localStorage.setItem('name', 'Xurxe');
localStorage.setItem('age', 29);
const skills = ['HTML', 'CSS', 'JS']; // problem! the array got stringified
localStorage.setItem('skills', skills);


// clear local storage
localStorage.clear();


// define object
const person = {
    name: 'Xurxe',
    age: 29,
    skills: ['HTML', 'CSS', 'JS']
};


// set to local storage
localStorage.setItem('person1', person);
console.log(localStorage); // problem! it shows "[object Object]" instead of actual object


// stringify object
let personStringified = JSON.stringify(person, undefined, 2);


// set to local storage; it works!
localStorage.setItem('person2', personStringified);
console.log(localStorage);


// get item from local storage
person2 = localStorage.getItem('person2');
console.log(person2.name); // problem! can't access keys because we get it as a string, not an object


// parse item you get from local storage
const personParsed = JSON.parse(localStorage.getItem('person2'));
console.log(personParsed);




// create object
const product = {
    name: 'laptop',
    description: 'Macbook Pro',
    model: 2018,
    condition: 'almost new',
    price: 1000,
    accessories: ['charger', 'mouse', 'case', 'keyboard', 'VGA adapter']
}

// stringify
productStringified = JSON.stringify(product, undefined, 2);

// set to local storage
localStorage.setItem('product', productStringified);
console.log(localStorage.getItem('product'));

// get from local storage and parse
const productParsed = JSON.parse(localStorage.getItem('product'));
console.log(productParsed);

// make a sentence with the accessories
let sentence = 'The product comes witht the following accessories:'
for (i = 0; i < product.accessories.length - 1; i++) {
    sentence += ' ' + product.accessories[i] + ',';
};

sentence += ' and ' + product.accessories[product.accessories.length - 1] + '.';

console.log(sentence);