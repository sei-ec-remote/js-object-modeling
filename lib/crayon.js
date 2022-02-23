const crayon = {
	color: 'blue',
	lengthInCM: 8,
	getUsedUp: function () {
		console.log('scribble scribble scribble')
		this.lengthInCM -= 0.5
		console.log(`your crayon is now ${crayon.lengthInCM} cm long`)
		console.log('this is: \n', this)
	},
}

console.log('this is my crayon \n', crayon)
crayon.getUsedUp()


const crayon = {
	color: 'blue',
	lengthInCM: 8,
	getUsedUp: () => {
		console.log('scribble scribble scribble')
		this.lengthInCM -= 0.5
		console.log(`your crayon is now ${crayon.lengthInCM} cm long`)
		console.log('this is: \n', this)
	},
}

module.exports = crayon
