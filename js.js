var userNumbers = [] // arr

var userNumber = 0

var x = null

while (userNumber != -1){
    userNumber = Number(prompt("enter your number: \n if you want stop enter -1"))
    if (userNumber != -1){
        userNumbers.push(userNumber)
    }
}

for (var i = 0 ; i < userNumbers.lenght ; i++) {
    // console.log(userNumbers[i])
    x += userNumbers[i]
}

alert(x / userNumbers.length)
// console.log(userNumbers)
// console.log("avg : ", (sum / userNumbers.length));