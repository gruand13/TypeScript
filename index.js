function isCar(car) {
    // return 'wheels' in car;
    return car.wheels.number !== undefined;
}
function isShip(ship) {
    return 'sail' in ship;
}
var car = {
    name: 'car',
    engine: 'V8'
};
function repairVehicle(vehicle) {
    switch (vehicle.name) {
        case 'car':
            console.log(vehicle.wheels);
            break;
        case 'ship':
            console.log(vehicle.sail);
            break;
        case 'airplane':
            console.log(vehicle.wings);
            break;
        default:
            // const smth: never = vehicle;
            console.log("OOOPS!");
    }
}
repairVehicle(car);
