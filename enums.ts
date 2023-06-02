// const AISLE = 0
// const MIDDEL =1
// const WINDOW = 2

// if(seat === 0){}

//number ++ ; put string as var need put var for each one
// const enum SeatChoice{ 用const 在js中只会显示需要的结果 例：const mySeat = SeatChoice.AISLE
enum SeatChoice{
    AISLE = 10,
    MIDDLE,
    WINDOW = 20,
    LEFT = "left"
}

const mySeat = SeatChoice.AISLE