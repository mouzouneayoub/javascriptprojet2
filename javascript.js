function reverseString (param) {
    let car = ""
    let words = []

        for(let i = 0 ; i < param.length ; i++){

            car =  car + param[i]
            console.log(car)


            if(param[i] == " "){
                console.log(car)
                words.push(car)
                car = ""
            }

        }
        return words
}

console.log(reverseString(myString))