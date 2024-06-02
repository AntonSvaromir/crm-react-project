import { Route, Routes } from 'react-router-dom'
import Requests from './Requests'
import { useContext, useEffect } from 'react'
import { filterRequest, separationMultiple } from '../../utils/function'
import EmptyPage from './EmptyPage'
import { TableContext } from './Table'

export default function MultiplePages() {
	const { data, product, status, setPagesQuantity } = useContext(TableContext)
	const filteredData = filterRequest(data, product, status)

	const pagesData = separationMultiple(filteredData, 10)

	useEffect(() => {
		setPagesQuantity(pagesData.map((item, index) => index + 1))
	}, [status, product]) 

	const pagesRouteRender = pagesData.map((item, index) => {
		return (
			<Route
				key={index}
				path={'/page' + (1 + index)}
				element={<Requests data={item} />}
			/>
		)
	})

	return (
		<Routes>
			{pagesRouteRender.length > 0 ? (
				pagesRouteRender
			) : (
				<Route path='/page1' element={<EmptyPage />} />
			)}
		</Routes>
	)
}

