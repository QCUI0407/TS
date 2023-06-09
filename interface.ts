interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?:string
    startTrail: () => string
    stratTrailOne(): string
    getCoupon(couponname: string, value: number): number
}

interface User{
    xxxToken: string
}

interface Admin extends User{
    role: "admin" | "ta" | "student"
}

const c: Admin = {
    dbId:1,
    email:"qc@mail",
    userId: 123,
    role: "ta",
    xxxToken: "132546874",
    startTrail: ()=>{
        return "acs ascs asdxcx"
    },
    stratTrailOne: ()=>{
        return "acs ascs asdxcx"
    },

    getCoupon: () => {
        return 10
    }

    // getCoupon: (name: "abcd", off: 10) => {
    //     return 10
    // }
}

const qc: User = {
    dbId:1,
    email:"qc@mail",
    userId: 123,
    xxxToken: "132546874",
    startTrail: ()=>{
        return "acs ascs asdxcx"
    },
    stratTrailOne: ()=>{
        return "acs ascs asdxcx"
    },

    getCoupon: () => {
        return 10
    }

    // getCoupon: (name: "abcd", off: 10) => {
    //     return 10
    // }
}
qc.email = "qc1@qc.com"
//qc.dbId = 2
