import { Route, Routes } from 'react-router-dom'
import Requests from './Requests'
import { useEffect } from 'react'
import { separationMultiple } from '../../utils/function'
import EmptyPage from './EmptyPage'

export default function MultiplePages({ data, setPagesRequest, status, product }) {
	const pagesData = separationMultiple(data, 10)

	useEffect(() => {
		setPagesRequest(pagesData.map((item, index) => index + 1))
	}, [status, product]) 

	const pagesRoute = pagesData.map((item, index) => {
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
			{pagesRoute.length > 0 ? (
				pagesRoute
			) : (
				<Route path='/page1' element={<EmptyPage />} />
			)}
		</Routes>
	)
}

