const user: (string | number)[] = [1,"qc"]

//order of data
let user1: [string,number,boolean]
user1   =  ["qc",  123,   true]

let ip:[number,number,number] = [123,132,133]


type User0 = [number, string]
const newUser: User0 = [112,"abcdefg"]
newUser[1] = "ABCDEFG"
// newUser.push(true)

// 更改元组类型定义：如果你希望 newUser 元组可以包含布尔值作为第三个元素，你需要在类型定义中将其纳入考虑，例如 [number, string, boolean]。
type User00 = [number, string, boolean];
const newUser001: User00 = [112, "abcdefg", true];

// 使用对象类型代替元组类型：如果你需要动态添加和修改元素，可能更适合使用对象类型（Object），而不是元组类型。
type User000 = {
    id: number;
    name: string;
    isActive?: boolean;
  };
  
  const newUser0001: User000 = { id: 112, name: "abcdefg" };
  newUser0001.name = "ABCDEFG";
  newUser0001.isActive = true; // 添加新属性
  