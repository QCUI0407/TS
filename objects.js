"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "abc",
    email: "abc@mail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "QQQ", isPaid: false });
// add more to obj
var newUser = { name: "abc", isPaid: true, email: "abc@mail.com" };
createUser(newUser);
function creatCourse() {
    return { name: "vscode", price: 100 };
}
function createUserOne(user) {
    return { name: "", email: "", isActive: true };
}
createUserOne({ name: "", email: "", isActive: true });
var myUserE1 = {
    _id: "1111",
    name: "E1",
    email: "E1@mail.com",
    isActive: false
};
myUserE1.email = "change";
