// const AISLE = 0
// const MIDDEL =1
// const WINDOW = 2
// if(seat === 0){}
//number ++ ; put string as var need put var for each one
// const enum SeatChoice{ 用const 在js中只会显示需要的结果 例：const mySeat = SeatChoice.AISLE
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 11] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 20] = "WINDOW";
    SeatChoice["LEFT"] = "left";
})(SeatChoice || (SeatChoice = {}));
var mySeat = SeatChoice.AISLE;
