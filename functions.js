"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toLocaleUpperCase();
}
function checkStatus(name, email, status) {
}
var loginUser = function (name, email, status) {
    if (status === void 0) { status = true; }
};
addTwo(10);
getUpper("abcdefg");
checkStatus("abc", "abc@mail.com", true);
loginUser("abc", "abc@MediaList.com");
//----------- function return
function addOne(num) {
    return num + 1;
}
// function getValue(myVal: number): boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 ok"
// }
var getHello = function (s) {
    return "";
};
/**
 * map auto check arr's type
 */
var heros = ["abc", "def", "ghi"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
