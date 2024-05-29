// Получение рандомного элемента из массива
 function getTestData(data) {
	const randomIndex = Math.floor(Math.random() * data.length)
	const randomElm = data[randomIndex]
	return randomElm
}
// Только новые заявки
function newRequests(data) {
	return data.filter((item) => item.status === 'new').length
}
// Фильтр заявок по Статусу выполнения и Продукту
function filterRequest(data, product, status) {
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
export { getTestData, filterRequest, newRequests  }