// Получение рандомного элемента из массива
function getTestData(data) {
	const randomIndex = Math.floor(Math.random() * data.length)
	const randomElm = data[randomIndex]
	return randomElm
}
// Только новые заявки
function filterNewRequests(data) {
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
// Разделение массива по количеству элементов
function separationMultiple(data, elm = 10) {
	const arrData = [...data].reverse()
	let page
	let pages = []
	for (let i = 0; i < data.length; i = i + elm) {
		if (arrData.length > elm) {
			page = arrData.splice(0, elm)
			pages.push([...page])
		} else {
			pages.push(arrData)
		}
	}
	return pages
}
export { getTestData, filterRequest, filterNewRequests, separationMultiple }
