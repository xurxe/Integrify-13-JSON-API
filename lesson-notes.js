/* WED 20.MAR.2019 ********************************************************* */

/* Data formats:
- CSV
- XML
- TXT
- TSV
- JSON
*/

// define object
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
console.log(typeof studentObj);