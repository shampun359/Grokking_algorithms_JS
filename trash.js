
function checkAge(age) {
    return age > 18 ? true : false
}

function checkAgeTwo(age) {
    return age > 18 || false
}

console.log(checkAge(15))
console.log(checkAgeTwo(15))