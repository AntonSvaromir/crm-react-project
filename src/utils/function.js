function getRandomInd(max) {
	return Math.floor(Math.random() * max)
}

 function getTestData(data) {
	const randomIndex = Math.floor(Math.random() * data.length)
	const testRequest = data[randomIndex]
	return testRequest
}


export {getRandomInd, getTestData }