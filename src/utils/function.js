function getRandomInd(max) {
	return Math.floor(Math.random() * max)
}

 function getTestData(data) {
	const randomIndex = Math.floor(Math.random() * data.length)
	const testRequest = data[randomIndex]
	return testRequest
}

function filter(data, product, status) {
	let filterRequest = []

	if (product === 'all') {
		filterRequest = [...data]
	} else {
		filterRequest = data.filter((item) => item.product === product)
	}

	if (status !== 'all') {
		filterRequest = filterRequest.filter((item) => item.status === status)
	}

	return filterRequest
}
export {getRandomInd, getTestData, filter }