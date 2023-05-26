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

//------------
type User ={
    name: string;
    email: string;
    isActive: boolean
}

function createUserOne(user: User):User{
    return{name:"",email:"", isActive:true}
}

createUserOne({name:"",email:"", isActive:true})


type UserE1 = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    cardDetails?: number
}
let myUserE1: UserE1 = {
    _id:"1111",
    name:"E1",
    email:"E1@mail.com",
    isActive: false
}

type cardNumber = {
    cardNo: string
}

type cardDate ={
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUserE1.email = "change"

// function createUserE1(u: UserE1)

export{}