import { countries } from './countries.js'


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let agesSorted = ages.sort()

let minAge = agesSorted[0]
let maxAge = agesSorted[ages.length - 1]

console.log(minAge, '\n', maxAge, '\n', agesSorted)

let medianAge = 0

if (ages.length % 2 == 1) {
    medianAge = agesStored[(ages.length - 1) / 2]
}
else {
    medianAge = (agesSorted[(ages.length) / 2] + agesSorted[(ages.length / 2) - 1]) / 2
}
console.log(medianAge)

let CS = countries.slice(0, 9)

console.log(CS)