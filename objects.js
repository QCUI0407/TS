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
