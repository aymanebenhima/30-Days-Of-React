// Level01

// 1- Declaring Empty Array
let myFirtArr = [];

// 2- Declaring an array with more than 5 number of elements
let myArrNumb = [0,1,2,3,4,5,6]

// 3- Find the length of your array
let theLength = myArrNumb.length
//console.log(theLength)

// 4- Get the first item, the middle item and the last item of the array 
const first = myArrNumb[0];
const last = myArrNumb[theLength - 1]; 
const midd = myArrNumb[Math.floor(last/2)]
//console.log(`First: ${first} && Middle ${midd} And the last ${last}`)

// 5- Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, false, "Hello", NaN, {firstNam: "Aymane", lastName: "Benhima"}, ['hello', 'Hi']];
// console.log(mixedDataTypes.length);

// 6- Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7- Print the array
console.log(itCompanies);

// 8- Print the number of companies in the array
console.log(itCompanies.length);

// 9- Print the first company, middle and last company
console.log(`First: ${itCompanies[0]} && Middle ${itCompanies[Math.floor((itCompanies.length - 1)/ 2)]} And the last ${itCompanies[itCompanies.length - 1]}`)

// 10- Print out each company
itCompanies.forEach(element => {
    console.log(element)
});

// 11- Change each company name to uppercase one by one and print them out
itCompanies.forEach(element => {
    console.log(element.toUpperCase())
});

// 12- Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const camelItCompanies = itCompanies.map(e => e.charAt(0).toUpperCase() + e.substr(1))
console.log(camelItCompanies.join(', '))

// 13- Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const searchName = "FaceBook"
const finding = searchName.toLowerCase()
const _itCompanies = itCompanies.map(e => e.toLowerCase())
const indexer = _itCompanies.indexOf(finding)

if (indexer == -1) console.log(`${searchName} is not found !`)
else console.log(searchName)

// 14- Filter out companies which have more than one 'o' without the filter method
for (let index = 0; index < itCompanies.length; index++) {
    let c = 0;
    for (let j = 0; j < itCompanies[index].length; j++)
        if (itCompanies[index][j].includes('o')) c+=1;
    if (c>=2) console.log(itCompanies[index])
}

// 15- Sort the array using sort() method
const sorting = itCompanies.sort();
console.log(sorting);

// 16- Reverse the array using reverse() method
const reversing = itCompanies.reverse();
console.log(reversing);

// 17- Slice out the first 3 companies from the array
const slicing = itCompanies.slice(0, 3);
console.log(slicing)

// 18- Slice out the last 3 companies from the array
const slicingOut = itCompanies.slice(itCompanies.length - 3, itCompanies.length);
console.log(slicingOut)

// 19- Slice out the middle IT company or companies from the array
const slicingMidd = itCompanies.slice(Math.floor((itCompanies.length -1) /2), Math.floor((itCompanies.length -1) /2)+1)
console.log(slicingMidd)

// 20- Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)

// 21- Remove the middle IT company or companies from the array
itCompanies.splice(Math.floor((itCompanies.length -1) /2), 1)
console.log(itCompanies)

// 22- Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies);

// 23- Remove all IT companies
itCompanies.splice(0, itCompanies.length)
console.log(itCompanies)