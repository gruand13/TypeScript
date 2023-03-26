// let userName: string = "Andrey";

// userName = 5;
// userName.isInteger();

// ``, '', ""
// 10, 0.5, 0.00001, -50, 4e10
// true,false


// const isBirthdayData: boolean =true;
// const ageData: number=40;
// const userNameData: string = 'John';

// function logBrtMsg(isBirthday: any,age:number, userName: string): string {
//     if (isBirthday) {
//         return `Congrats ${userName.toUpperCase()}, age: ${age+1}`;
//     } else {
//         return "Error";
//     }
    
// }
let salary: number;
salary=5000;


const userData={"isBirthdayData": true, "ageData": 40, "userNameData": "John"};
const json="sakflgl";
const userObj:{
    isBirthdayData: boolean,
    ageData:number,
     userNameData: string 
} = JSON.parse(userData);



const logBrtMsg =(isBirthday: any,age:number, userName: string): string => {
    if (isBirthday) {
        return `Congrats ${userName.toUpperCase()}, age: ${age+1}`;
    } else {
        return "Error";
    }
    
}
logBrtMsg(isBirthdayData, ageData, userNameData);