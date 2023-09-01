interface Car {
    type: "Car",
    groundSpeed: number;
}

interface Plane {
    type: "plane",
    groundSpeed: number;
}

type Vehice = Car | Plane;

const car: Vehice = {
    type: "Car",
    groundSpeed: 1
}

const plane: Vehice = {
    type: "plane",
    groundSpeed: 1
}