export const formatCar = car => {
    const {
        year,
        make,
        model,
        price
    } = car;

    return `${car.year} ${car.make} ${car.model}: $${car.price}`
};