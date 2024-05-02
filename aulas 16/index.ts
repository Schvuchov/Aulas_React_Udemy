const firstName = "Matheus"
const anotherName = 1
const x = true

function greeting(name: string) {
    console.log("ola" + name)
}

greeting(firstName)
//greeting(anotherName) da erro pois o valor não é uma string
//greeting(x)