import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TableContext } from './Table'

export default function TopPanel() {
	const { setProduct, product, setStatus, status } = useContext(TableContext)
	const navigate = useNavigate()
	return (
		<form action=''>
			<div className='row mb-3 justify-content-start'>
				<div className='col'>
					<div className='btn-group'>
						<button
							onClick={(evt) => {
								evt.preventDefault()
								setStatus('all')
								navigate('page1')
							}}
							className={`btn btn-light ${status === 'all' ? 'active' : ''}`}>
							Все
						</button>
						<button
							onClick={(evt) => {
								evt.preventDefault()
								setStatus('new')
								navigate('page1')
							}}
							className={`btn btn-light ${status === 'new' ? 'active' : ''}`}>
							Новые
						</button>
						<button
							onClick={(evt) => {
								evt.preventDefault()
								setStatus('inWork')
								navigate('page1')
							}}
							className={`btn btn-light ${
								status === 'inWork' ? 'active' : ''
							}`}>
							В работе
						</button>
						<button
							onClick={(evt) => {
								evt.preventDefault()
								setStatus('complete')
								navigate('page1')
							}}
							className={`btn btn-light ${
								status === 'complete' ? 'active' : ''
							}`}>
							Завершенные
						</button>
					</div>
				</div>
				<div className='col'>
					<select
						className='custom-select'
						value={product}
						onChange={(evt) => {
							setProduct(evt.target.value)
							navigate('page1')
						}}>
						<option value='all'>Все продукты</option>
						<option value='course-html'>Курс по верстке</option>
						<option value='course-js'>Курс по JavaScript</option>
						<option value='course-vue'>Курс по VUE JS</option>
						<option value='course-php'>Курс по PHP</option>
						<option value='course-wordpress'>Курс по WordPress</option>
					</select>
				</div>
			</div>
		</form>
	)
}
