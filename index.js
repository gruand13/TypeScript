var TOP = "Top";
var RIGHT = "Right";
var Directions;
(function (Directions) {
    Directions[Directions["TOP"] = 0] = "TOP";
    Directions[Directions["RIGHT"] = 1] = "RIGHT";
    Directions[Directions["LEFT"] = 2] = "LEFT";
    Directions[Directions["BOTTOM"] = 3] = "BOTTOM";
})(Directions || (Directions = {}));
;
var TimingFunction;
(function (TimingFunction) {
    TimingFunction["EASE"] = "ease";
    TimingFunction["EASE_IN"] = "ease-in";
    TimingFunction["LINEAR"] = "linear";
})(TimingFunction || (TimingFunction = {}));
function frame(elem, dir, tFunc) {
    if (dir === Directions.RIGHT) {
        console.log(tFunc);
    }
}
frame('id', Directions.RIGHT, TimingFunction.LINEAR);
