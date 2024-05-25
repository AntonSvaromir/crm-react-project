import Filter from "./Filter"
import LeftPanel from "./LeftPanel"
import Requests from "./Requests"
import TableHead from "./TableHead"

function Table() {
   document.body.classList.remove('flex-center', 'radial-bg')
   document.body.classList.add('body--dashboard')

    return (
			<>
				<LeftPanel />
				<div className='main-wrapper'>
					<div className='container-fluid'>
						<div className='admin-heading-1'>Все заявки</div>

						<Filter />

						<table className='table fs-14'>
							<TableHead />
							<tbody id='tbody'>
								<Requests />
							</tbody>
						</table>
					</div>
				</div>
			</>
		)
}

export default Table
