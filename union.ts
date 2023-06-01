let score: number | string = 33 

score = 44

score = "55"

type User = {
    name : string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let personA: User | Admin ={
    name: "personA",
    id : 123
}

personA = {username: "aaa", id:123}

function getDbid(id: number | string){
    //making some API calls
    if(typeof id === "string"){
        id.toLowerCase
    }else{
    console.log(`DB id is : ${id}`);
    }
}

getDbid(3)
getDbid("3")

//array

const data: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]
const data3: (number|string|boolean)[] = [1,"2",true]


let pi:3.14 = 3.14

let seatAllotment: "aisle"| "middle" | "window"

seatAllotment = "aisle"
