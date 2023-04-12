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
