// let userName: string = "Andrey";

// userName = 5;
// userName.isInteger();

// ``, '', ""
// 10, 0.5, 0.00001, -50, 4e10
// true,false


const isBirthdayData: boolean =true;
const ageData: number=40;
const userNameData: string = 'John';


// const userData={"isBirthdayData": true, "ageData": 40, "userNameData": "John"};

const createError = (msg: string) =>{
    throw new Error(msg);
    

};

function logBrtMsg(isBirthday: any,age:number, userName: string): string {
    if (isBirthday === true) {
        return `Congrats ${userName.toUpperCase()}, age: ${age+1}`;
    } else if (isBirthday === false){
        return "Too bad";
    }
    return createError("Error");
    
}



logBrtMsg(isBirthdayData, ageData, userNameData);
