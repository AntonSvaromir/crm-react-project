import { useEffect, useState } from 'react'
import {
	TopPanel,
	LeftPanel,
	TableHead,
	MultiplePages,
	LinksToPage,
} from './index.js'
import { serverPath } from '../../utils/constant'
import { filterNewRequests, filterRequest } from '../../utils/function.js'
import useFetch from '../../utils/useFetch'
import ErrorPage from '../ErrorPage'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Table() {
	document.body.classList.remove('flex-center', 'radial-bg')
	document.body.classList.add('body--dashboard')
	// Загрузка из LocaleStorage значений фильтра
	const statusLocalStorage = JSON.parse(localStorage.getItem('status')) || 'all'
	const productLocalStorage =
		JSON.parse(localStorage.getItem('product')) || 'all'
	const pageLocationLocalStorage =
		JSON.parse(localStorage.getItem('pageLocation')) || 'page1'

	const { data, isLoading, error } = useFetch(serverPath + 'requests')
	const [product, setProduct] = useState(productLocalStorage)
	const [status, setStatus] = useState(statusLocalStorage)
	// Количество новых заявок
	const [newRequestAmount, setNewRequestAmount] = useState(0)
	// Массив номеров страниц с заявками
	const [pagesRequest, setPagesRequest] = useState([])

	const location = new URL(window.location).href
	const navigate = useNavigate()
	useEffect(() => {
		if (location === 'http://localhost:3000/table') {
			navigate(pageLocationLocalStorage)
		}
	}, [])

	// Сохранение в LocaleStorage значений фильтра и страницы
	const pageLocation = useLocation().pathname.split('/')
	const pageLocationLastValue = pageLocation[pageLocation.length - 1]
	localStorage.setItem('pageLocation', JSON.stringify(pageLocationLastValue))
	localStorage.setItem('status', JSON.stringify(status))
	localStorage.setItem('product', JSON.stringify(product))

	// Получение количества новых заявок
	useEffect(() => {
		if (data) {
			setNewRequestAmount(filterNewRequests(data))
		}
	}, [data])

	console.log('Render');

	return (
		<>
			<LeftPanel
				setStatus={setStatus}
				status={status}
				newRequestAmount={newRequestAmount}
			/>
			<div className='main-wrapper'>
				<div className='container-fluid'>
					<div className='admin-heading-1'>Все заявки</div>

					<TopPanel
						setProduct={setProduct}
						product={product}
						setStatus={setStatus}
						status={status}
					/>
					<LinksToPage pagesRequest={pagesRequest} />
					<table className='table fs-14'>
						<TableHead />
						<tbody>
							{error && (
								<tr>
									<th>
										<h2>{error && <ErrorPage />}</h2>
									</th>
								</tr>
							)}
							{isLoading && (
								<tr>
									<th>
										<h3>Loading...</h3>
									</th>
								</tr>
							)}
							{data && (
								<MultiplePages
									data={filterRequest(data, product, status)}
									status={status}
									product={product}
									setPagesRequest={setPagesRequest}
								/>
							)}
						</tbody>
					</table>
					
				</div>
			</div>
		</>
	)
}

