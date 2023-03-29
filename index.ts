// const isBirthdayData: boolean =true;
// const ageData: number=40;
// const userNameData: string = 'John';

// new branch work with objects and destructurization


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