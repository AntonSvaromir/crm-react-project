import { createContext, useEffect, useState } from 'react'
import {
	TopPanel,
	LeftPanel,
	TableHead,
	MultiplePages,
	LinksToPage,
} from './index.js'
import { serverPath } from '../../utils/constant'
import useFetch from '../../utils/useFetch'
import ErrorPage from '../ErrorPage'
import { useLocation, useNavigate } from 'react-router-dom'

export const TableContext = createContext(null)
export default function Table() {
	document.body.classList.remove('flex-center', 'radial-bg')
	document.body.classList.add('body--dashboard')
	// Загрузка из LocaleStorage значений фильтра
	const statusLocalStorage = JSON.parse(localStorage.getItem('status')) || 'all'
	const productLocalStorage =
		JSON.parse(localStorage.getItem('product')) || 'all'
	const pageLocationLocalStorage =
		JSON.parse(localStorage.getItem('pageLocation')) || 'page1'
	// Получение данных с сервера
	const { data, isLoading, error } = useFetch(serverPath + 'requests')
	const [product, setProduct] = useState(productLocalStorage)
	const [status, setStatus] = useState(statusLocalStorage)

	// Массив номеров страниц с заявками
	const [pagesQuantity, setPagesQuantity] = useState([])
	// Перенаправление на старте
	const location = new URL(window.location).href
	
	const navigate = useNavigate()
	useEffect(() => {
		if (
			location === 'http://localhost:3000/#/table' ||
			location === 'http://localhost:3000/#/table/table'
		) {
			navigate(pageLocationLocalStorage)
		}
	}, [])

	// Сохранение в LocaleStorage значений фильтра и страницы
	const pageLocation = useLocation().pathname.split('/')
	const pageLocationLastValue = pageLocation[pageLocation.length - 1]
	localStorage.setItem('pageLocation', JSON.stringify(pageLocationLastValue))
	localStorage.setItem('status', JSON.stringify(status))
	localStorage.setItem('product', JSON.stringify(product))


	return (
		<TableContext.Provider
			value={{
				data,
				status,
				setStatus,
				product,
				setProduct,
				setPagesQuantity,
			}}>
			<LeftPanel />
			<div className='main-wrapper'>
				<div className='container-fluid'>
					<div className='admin-heading-1'>Все заявки</div>

					<TopPanel />
					<LinksToPage pagesQuantity={pagesQuantity} />
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
							{data && <MultiplePages />}
						</tbody>
					</table>
				</div>
			</div>
		</TableContext.Provider>
	)
}
