const TOP ="Top";
const RIGHT = "Right";

enum Directions{
    TOP,
    RIGHT,
    LEFT,
    BOTTOM
};

enum TimingFunction{
    EASE ='ease',
    EASE_IN =`ease-in`,
    LINEAR = 'linear',
    
}
const enum TimingFunctionN{
    EASE =1,
    EASE_IN =2,
    LINEAR = EASE * 3,
    
}


function frame(elem:string, dir: Directions, tFunc: TimingFunction): void {
    if (dir===Directions.RIGHT){
        console.log(tFunc);
    }
}

frame('id', Directions.RIGHT, TimingFunction.LINEAR);