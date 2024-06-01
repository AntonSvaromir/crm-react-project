import { useState } from "react";
import { serverPath } from "../../utils/constant";
import { useNavigate } from "react-router-dom";

export default function EditForm({ data, backLink }) {
	const [fullName, setFullName] = useState(data.fullName)
	const [phone, setPhone] = useState(data.phone)
	const [email, setEmail] = useState(data.email)
	const [product, setProduct] = useState(data.product)
	const [status, setStatus] = useState(data.status)
	const navigate = useNavigate()
	const handleSubmit = (evt) => {
		evt.preventDefault()
		const editRequest = {
			...data,
			fullName,
			phone,
			email,
			product,
			status,
		}
		fetch(serverPath + 'requests/' + data.id, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(editRequest),
		})
			.then(() => navigate(backLink))
			.catch((error) => error.message)
	}

	const dateTime = new Date(data.date).toLocaleString()
	return (
		<form id='form' onSubmit={handleSubmit}>
			<div className='card mb-4'>
				<div className='card-header'>Данные о заявке</div>
				<div className='card-body'>
					<div className='row mb-3'>
						<div className='col-md-2'>
							<strong>ID:</strong>
						</div>
						<div className='col'>
							Заявка №<span id='number'>{data.id}</span>
						</div>
						<input name='id' type='hidden' id='id' />
					</div>

					<div className='row mb-3'>
						<div className='col-md-2'>
							<strong>Дата создания:</strong>
						</div>
						<div className='col' id='date'>
							{dateTime}
						</div>
					</div>

					<div className='row mb-3'>
						<div className='col-md-2'>
							<strong>Продукт:</strong>
						</div>
						<div className='col'>
							<select
								id='product'
								name='product'
								className='custom-select'
								value={product}
								onChange={(evt) => setProduct(evt.target.value)}>
								<option value='course-html'>Курс по верстке</option>
								<option value='course-js'>Курс по JavaScript</option>
								<option value='course-vue'>Курс по VUE JS</option>
								<option value='course-php'>Курс по PHP</option>
								<option value='course-wordpress'>Курс по WordPress</option>
							</select>
						</div>
					</div>

					<div className='row mb-3'>
						<div className='col-md-2'>
							<strong>Имя:</strong>
						</div>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								id='name'
								name='name'
								value={fullName}
								onChange={(evt) => setFullName(evt.target.value)}
							/>
						</div>
					</div>

					<div className='row mb-3'>
						<div className='col-md-2'>
							<strong>Email:</strong>
						</div>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								id='email'
								name='email'
								value={email}
								onChange={(evt) => setEmail(evt.target.value)}
							/>
						</div>
					</div>

					<div className='row mb-3'>
						<div className='col-md-2'>
							<strong>Телефон:</strong>
						</div>
						<div className='col'>
							<input
								type='text'
								className='form-control'
								id='phone'
								name='phone'
								value={phone}
								onChange={(evt) => setPhone(evt.target.value)}
							/>
						</div>
					</div>

					<div className='row mb-3'>
						<div className='col-md-2'>
							<strong>Статус заявки:</strong>
						</div>
						<div className='col'>
							<select
								className='custom-select'
								id='status'
								name='status'
								value={status}
								onChange={(evt) => setStatus(evt.target.value)}>
								<option value=''>Выберите...</option>
								<option value='new'>Новая</option>
								<option value='inWork'>В работе</option>
								<option value='complete'>Завершена</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div className='row justify-content-between'>
				<div className='col text-right'>
					<button type='submit' className='btn btn-primary'>
						Сохранить изменения
					</button>
				</div>
			</div>
		</form>
	)
}
