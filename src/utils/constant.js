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

const testData = [
	{
		id: 'td1',
		fullName: 'Федотова Виктория',
		phone: '+7(963)2824617',
		email: 'fedotova@example.org',
		product: 'course-js',
	},
	{
		id: 'td2',
		fullName: 'Никонов Данила',
		phone: '+7(950)5156295',
		email: 'niconov@example.org',
		product: 'course-vue',
	},
	{
		id: 'td3',
		fullName: 'Дементьева Майя',
		phone: '+7(966)7521305',
		email: 'dementieva@example.org',
		product: 'course-js',
	},
	{
		id: 'td4',
		fullName: 'Жуков Владислав',
		phone: '+7(952)9045507',
		email: 'jukov@example.org',
		product: 'course-php',
	},
	{
		id: 'td5',
		fullName: 'Марков Захар',
		phone: '+7(963)1965616',
		email: 'markov@example.org',
		product: 'course-wordpress',
	},
	{
		id: 'td6',
		fullName: 'Смирнов Данила',
		phone: '+7(965)6798180',
		email: 'smirnov@example.org',
		product: 'course-html',
	},
	{
		id: 'td7',
		fullName: 'Шарапов Семён',
		phone: '+7(967)2658404',
		email: 'sharapov@example.org',
		product: 'course-wordpress',
	},
	{
		id: 'td8',
		fullName: 'Рогов Руслан',
		phone: '+7(900)4247271',
		email: 'rogov@example.org',
		product: 'course-html',
	},
	{
		id: 'td9',
		fullName: 'Силин Виктор',
		phone: '+7(908)8159392',
		email: 'silin@example.org',
		product: 'course-vue',
	},
	{
		id: 'td10',
		fullName: 'Ларионов Роберт',
		phone: '+7(964)7553528',
		email: 'larionov@example.org',
		product: 'course-php',
	},
	{
		id: 'td11',
		fullName: 'Сергеева Искра',
		phone: '+7(965)1020595',
		email: 'sergeeva@example.org',
		product: 'course-wordpress',
	},
]

export { serverPath, statusName, statusClassName, productRequest, testData }