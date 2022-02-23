const car = {
	make: 'Toyota',
	model: '4Runner',
	releaseYear: 1992,
	mileage: 78062,
	value: function () {
		if (car.mileage < 100000 && car.releaseYear > 1999) {
			return 300
		} else if (car.mileage > 100000 && car.releaseYear <= 1999) {
			return 1
		} else {
			return 5
		}
	},
	condition: 'used',
	color: 'hot pink',
	addMileage: function () {
		this.mileage += 50
	}
}

console.log('this is the car', car)
console.log('this is the car value', car.value())

module.exports = car
