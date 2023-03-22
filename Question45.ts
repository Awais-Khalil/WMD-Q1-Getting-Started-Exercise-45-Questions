function createCar(manufacturer: string, modelName: string, ...options: any[]): object {
    const car = {
      manufacturer: manufacturer,
      modelName: modelName,
    };
    for (const option of options) {
      const [key, value] = option;
      car[key] = value;
    }
    return car;
  }
 
const myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["hasSunroof", true],["BuiltinGPS",false]);

console.log(myCar);

export{};
