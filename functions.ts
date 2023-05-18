function addTwo(num: number){
    return num + 2
}

function getUpper(val: string){
    return val.toLocaleUpperCase()
}

function checkStatus(name: string, email:string, status: boolean){
}

let loginUser = (name: string,email: string,status:boolean = true)=>{}

addTwo(10)
getUpper("abcdefg")
checkStatus("abc","abc@mail.com",true)

loginUser("abc","abc@MediaList.com")

//----------- function return
function addOne(num: number): number{
    return num + 1
}

// function getValue(myVal: number): boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 ok"
// }

const getHello = (s:string):string => {
    return ""
}

/**
 * map auto check arr's type
 */
const heros = ["abc","def","ghi"]

heros.map(hero =>{
    return `hero is ${hero}`
})

function consoleError(errmsg:string): void{
    console.log(errmsg);   
}

function handleError(errmsg:string): never{
   throw new Error(errmsg);  
}

export{}