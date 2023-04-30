interface Square {
    side: number;
    area: number;
}

interface Rect {
    a: number;
    b: number;
    area: number;
}

// overload  function
function calculateArea(side: number): Square;
function calculateArea(a: number, b: number): Rect;

function calculateArea(a: number, b?: number): Square | Rect {
    if (b){
        const rect: Rect ={
            // a: a, b:b
            a, b,
            area: a*b
        }
        return rect;
    } else {
        const square: Square = {
            side: a,
            area: a*a
        }
        return square;
    }
}
calculateArea(4);
calculateArea(1, 5);