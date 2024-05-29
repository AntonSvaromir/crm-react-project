import { useState } from "react"
import {Filter, LeftPanel, Requests, TableHead} from "./index"
import useFetch from "../../utils/useFetch"
import { serverPath } from "../../utils/constant"
import ErrorPage from "../ErrorPage"

function Table() {
	document.body.classList.remove('flex-center', 'radial-bg')
	document.body.classList.add('body--dashboard')

	const { data, isLoading, error } = useFetch(serverPath + 'requests')
	const [product, setProduct] = useState('all')
	const [status, setStatus] = useState('all')
	

	function filter(data, product, status) {
		let filterRequest = []

		if (product === 'all') {
			filterRequest = [...data]
		} else {
			filterRequest = data.filter((item) => item.product === product)
		}

		if (status !== 'all') {
			filterRequest = filterRequest.filter((item) => item.status === status)
		}

		return filterRequest
	}
	
	return (
		<>
			<LeftPanel />
			<div className='main-wrapper'>
				<div className='container-fluid'>
					<div className='admin-heading-1'>Все заявки</div>

					<Filter setProduct={setProduct} setStatus={setStatus} status={status} />

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
							{data && <Requests data={filter(data, product, status)} />}
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default Table
