// let userName: string = "Andrey";

// userName = 5;
// userName.isInteger();

// ``, '', ""
// 10, 0.5, 0.00001, -50, 4e10

// true,false
const isBirthdayData: boolean =true;
const ageData: number=40;
const userNameData: string = 'John';

// function logBrtMsg(isBirthday: any,age:number, userName: string): string {
//     if (isBirthday) {
//         return `Congrats ${userName.toUpperCase()}, age: ${age+1}`;
//     } else {
//         return "Error";
//     }
    
// }

const logBrtMsg =(isBirthday: any,age:number, userName: string): string => {
    if (isBirthday) {
        return `Congrats ${userName.toUpperCase()}, age: ${age+1}`;
    } else {
        return "Error";
    }
    
}
logBrtMsg(isBirthdayData, ageData, userNameData);