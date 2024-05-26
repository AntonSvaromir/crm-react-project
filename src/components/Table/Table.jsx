import { useState } from "react"
import Filter from "./Filter"
import LeftPanel from "./LeftPanel"
import Requests from "./Requests"
import TableHead from "./TableHead"
import useFetch from "../../utils/useFetch"
import { serverPath } from "../../utils/constant"

function Table() {
   document.body.classList.remove('flex-center', 'radial-bg')
   document.body.classList.add('body--dashboard')

	const {data, isLoading, error} = useFetch(serverPath + 'requests')

    return (
			<>
				<LeftPanel />
				<div className='main-wrapper'>
					<div className='container-fluid'>
						<div className='admin-heading-1'>Все заявки</div>

						<Filter />

						<table className='table fs-14'>
							<TableHead />
							<tbody>
								{error && (
									<tr>
										<th>
											<h2>{error}</h2>
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
								{data && <Requests data={data} />}
							</tbody>
						</table>
					</div>
				</div>
			</>
		)
}

export default Table
