interface User {
    readonly login: string,
    password: string,
    age: number,
    // addr?: string
    addr: string | undefined,
    parents?: {
        mother? : string,
        father?: string
    }
}



const user: User = {
    login: "first!",
    password: "qwerty",
    age: 50,
    addr: "wqert"
}

const userFreeze: Readonly<User> = {
    login: "first!",
    password: "qwerty",
    age: 50,
    addr: "wqert"
}
// userFreeze.age= 67;


// user.login='fhghj';


const dbName = '1235';

function sendUserData(obj: User, db?: string): void{
    console.log(obj.parents?.father?.toLocaleLowerCase(), db?.toLocaleLowerCase())
}

// class Animal {
//     readonly name: string ="name";
// }


// дженерик -выделяет все свойства в обьекте и делает их read only
const basicPorts: ReadonlyArray<number> =[3000, 3001, 3002];
// basicPorts[0]=5;

// basicPorts.push(566);

// const basicPorts: readonly [number, ...string[]]=[3000, '3001', '3002'];
// basicPorts[0]=5;

// basicPorts.push(566);