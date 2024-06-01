import { Link, useLocation } from "react-router-dom"
import { productRequest, statusClassName, statusName } from "../../utils/constant"

export default function Requests({data}) {
	const params = useLocation()

	const requests = data.map((request) => {
		const {id, date, fullName, phone, email, product, status} = request
		const localeDate = new Date(date).toLocaleDateString()
		
		return (
			<tr key={'req' + id}>
				<th scope='row'>{id}</th>
				<td>{localeDate}</td>
				<td>{productRequest[product]}</td>
				<td>{fullName}</td>
				<td>{email}</td>
				<td>{phone}</td>
				<td>
					<div className={statusClassName[status]}>{statusName[status]}</div>
				</td>
				<td>
					<Link to={`/edit/${id}#${params.pathname}`}>Редактировать</Link>
				</td>
			</tr>
		)
	})

   return (
			<>
			{requests}
			</>				
		)
}


// badge - danger badge-success badge-warning