interface User {
    login: string,
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

const dbName = '1235';

function sendUserData(obj: User, db?: string): void{
    console.log(obj.parents?.father?.toLocaleLowerCase(), db?.toLocaleLowerCase())
}