
const userData={
    isBirthdayData: true,
    ageData: 40,
    userNameData: 'John',
    messages: {
        error:"Error"
    }

}
const createError=(msg: string)=>{
    throw new Error(msg);
}


function logBrtMsg({isBirthdayData,
                    userNameData,
                     ageData,
                    messages:{error}}: {
    isBirthdayData: boolean,
    userNameData: string,
    ageData:number,
    messages: {error: string}
}): string {
    if (isBirthdayData===true) {
	 return `Congrats ${userNameData.toUpperCase()}, age: ${ageData+1}`;
    } else {
        return createError(error);
    }
    

}
logBrtMsg(userData);


const departments:string[] = ['dev', 'design', 'marketing'];

const department = departments[0];
// departments.push(5);

const report = departments.filter((d:string)=> d !=='dev')
                          .map((d:string)=>`${d} -done`);


const nums:number[][]= [
    [55, 0.1, 455], 
    [2, 45, 57]
];

const [first]=report;
console.log(first);


