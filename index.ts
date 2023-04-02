const message: string | number =5;
const messages: string[]| number[] = ['a', 'b'];


function printMsg (msg: string| number): void {
    console.log(msg);
    // если задать метод toLowercase() будет ошибка так как он есть только у строки...
};

printMsg(4);
printMsg("adsgfhg");