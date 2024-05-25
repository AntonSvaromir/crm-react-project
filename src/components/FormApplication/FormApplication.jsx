import { useState } from "react"

function FormApplication() {
	document.body.classList.add('flex-center', 'radial-bg')

	const [fullName, setFullName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [product, setProduct] = useState('course-html')

	const handleSubmit = (evt) => {
		evt.preventDefault()
		
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
						<label>Ваши данные:</label>
						<div className='form-group'>
							<input
								id='name'
								type='text'
								name='name'
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
								id='phone'
								type='text'
								name='phone'
								autoComplete='on'
								className='form-control'
								placeholder='Телефон'
								value={phone}
								onChange={(evt) => setPhone(evt.target.value)}
							/>
						</div>
						<div className='form-group'>
							<input
								id='email'
								type='email'
								name='email'
								autoComplete='on'
								className='form-control'
								placeholder='Email'
								required
								value={email}
								onChange={(evt) => setEmail(evt.target.value)}
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='product'>Продукт:</label>
							<select
								className='form-control'
								value={product}
								onChange={(evt) => setProduct(evt.target.value)}>
								<option value='course-html'>Курс по верстке</option>
								<option value='course-js'>Курс по JavaScript</option>
								<option value='course-vue'>Курс по VUE JS</option>
								<option value='course-php'>Курс по PHP</option>
								<option value='course-wordpress'>Курс по WordPress</option>
							</select>
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