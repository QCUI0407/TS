const User = {
    name: "abc",
    email:"abc@mail.com",
    isActive: true
}

function createUser({name: string, isPaid:boolean}){}

createUser({name:"QQQ", isPaid: false})

// add more to obj
let newUser = {    name: "abc", isPaid: true,  email:"abc@mail.com"}

createUser(newUser)

function creatCourse():{name: string, price: number}{
    return {name:"vscode", price: 100}
}

export{}