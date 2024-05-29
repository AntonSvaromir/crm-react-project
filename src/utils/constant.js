const serverPath = 'http://localhost:8000/'


const statusName = {
	new: 'Новый',
	inWork: 'В работе',
	complete: 'Завершенный',
}
const statusClassName = {
	new: 'badge badge-pill badge-danger',
	inWork: 'badge badge-pill badge-warning',
	complete: 'badge badge-pill badge-success',
}
const productRequest = {
	'course-html': 'Курс по верстке',
	'course-js': 'Курс по JavaScript',
	'course-vue': 'Курс по VUE JS',
	'course-php': 'Курс по PHP',
	'course-wordpress': 'Курс по WordPress',
}
export { serverPath, statusName, statusClassName, productRequest }