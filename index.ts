// let smth: unknown;


// smth= "str";

// let data: string[]= smth;
// data.find(e=>e);

// const someValue: unknown=10;
// someValue.method();

function fetchData(data:unknown): void{
    if (typeof(data)==='string'){
        console.log(data.toLowerCase());
    }
    
}

const userData=
"{'isBirthdayData': true, 'ageData': 40, 'userNameData': 'John'}";



function transferData(d:unknown):  void{
    if (typeof d==='string'){
        console.log(d.toLowerCase());
    } else if (typeof d==='object' && d ){
        console.log(d);
    }else{
        console.error('Some error');
    }
}

transferData(userData);


type T0 = any| unknown;
type T1 = number| unknown;

type T2 = any& unknown;
type T3 = number & unknown;