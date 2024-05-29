import { useEffect, useState } from 'react'
import { TopPanel, LeftPanel, Requests, TableHead } from './index.js'
import { serverPath } from '../../utils/constant'
import { filterRequest, newRequests } from '../../utils/function.js'
import useFetch from '../../utils/useFetch'
import ErrorPage from '../ErrorPage'

function Table() {
	document.body.classList.remove('flex-center', 'radial-bg')
	document.body.classList.add('body--dashboard')
	// Загрузка из LocaleStorage значений фильтра
	const statusLocalStorage = JSON.parse(localStorage.getItem('status')) || 'all'
	const productLocalStorage = JSON.parse(localStorage.getItem('product')) || 'all'

	const { data, isLoading, error } = useFetch(serverPath + 'requests')
	const [product, setProduct] = useState(productLocalStorage)
	const [status, setStatus] = useState(statusLocalStorage)
	const [newRequestAmount, setNewRequestAmount] = useState(0)
	// Сохранение в LocaleStorage значений фильтра
	useEffect(() => {
		localStorage.setItem('status', JSON.stringify(status))
		localStorage.setItem('product', JSON.stringify(product))
	}, [product, status])
	// Получение количества новых заявок
	useEffect(() => {
		if (data) {
			setNewRequestAmount(newRequests(data))
		}
	}, [data])

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
							{data && <Requests data={filterRequest(data, product, status)} />}
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default Table
