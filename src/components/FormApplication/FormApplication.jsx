import { useEffect, useState } from "react"
import { serverPath } from '../../utils/constant'
import { getTestData } from "../../utils/function"
import useFetch from "../../utils/useFetch"

function FormApplication() {
	document.body.classList.add('flex-center', 'radial-bg')

	const [fullName, setFullName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [product, setProduct] = useState('course-html')
	// const [testData, setTestData] = useState([])
	const [flag, setFlag] = useState(true)

	//Получаем тестовые данные с сервера
	const { data } = useFetch(serverPath + 'testData')
	// useEffect(() => {
	// 	fetch(serverPath + 'testData')
	// 		.then((res) => {
	// 			return res.json()
	// 		})
	// 		.then((data) => {
	// 			setTestData(data)
	// 		})
	// 		.catch((err) => console.log(err.message))
		
	// }, [])

	
	useEffect(() => {
		// Заполняем поля случайными данными
		if (data) {
			const test = getTestData(data)
			setFullName(test.fullName)
			setPhone(test.phone)
			setEmail(test.email)
			setProduct(test.product)
		}
	}, [data, flag])

	// Добавляем заявку в базу данных
	const handleSubmit = (evt) => {
		evt.preventDefault()
		const date = new Date().toISOString()
		// Формируем заявку
		const request = {
			status: 'new',
			date: date,
			fullName,
			phone,
			email,
			product
		}
		// Отправляем заявку на сервер
		fetch(serverPath + 'requests', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(request),
		})
			.then(() => {
				setFlag(!flag)
			})
			.catch((err) => {
				console.log(err.message)
			})

	}

   return (
			<div className='white-plate white-plate--payment'>
				<div className='container-fluid'>
					<div className='white-plate__header text-center'>
						<p className='white-plate__logo'>
							<span>Форма</span> заявок
						</p>
					</div>

					<div className='white-plate__line-between white-plate__line-between--main'></div>

					<form onSubmit={handleSubmit}>
						<label>
							Ваши данные:
							<div className='form-group'>
								<input
									type='text'
									name="fullName"
									autoComplete='on'
									className='form-control'
									placeholder='Имя и Фамилия'
									required
									value={fullName}
									onChange={(evt) => setFullName(evt.target.value)}
								/>
							</div>
							<div className='form-group'>
								<input
									type='text'
									name="phone"
									autoComplete='on'
									className='form-control'
									placeholder='Телефон'
									value={phone}
									onChange={(evt) => setPhone(evt.target.value)}
								/>
							</div>
							<div className='form-group'>
								<input
									type='email'
									name="email"
									autoComplete='on'
									className='form-control'
									placeholder='Email'
									required
									value={email}
									onChange={(evt) => setEmail(evt.target.value)}
								/>
							</div>
						</label>
						<div className='form-group'>
							<label>
								Продукт:
								<select
									className='form-control'
									name="product"
									value={product}
									onChange={(evt) => setProduct(evt.target.value)}>
									<option value='course-html'>Курс по верстке</option>
									<option value='course-js'>Курс по JavaScript</option>
									<option value='course-vue'>Курс по VUE JS</option>
									<option value='course-php'>Курс по PHP</option>
									<option value='course-wordpress'>Курс по WordPress</option>
								</select>
							</label>
						</div>
						<div className='form-group'>
							<button
								type='submit'
								className='btn btn-lg btn-primary btn-block'>
								Оформить заявку
							</button>
						</div>
					</form>
				</div>
			</div>
		)
}

export default FormApplication