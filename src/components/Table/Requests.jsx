import { Link } from "react-router-dom"
import { productRequest, statusClassName, statusName } from "../../utils/constant"

function Requests({data}) {
	

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
					<Link to={`/edit/${id}`} >Редактировать</Link>
				</td>
			</tr>
		)
	})

   return (
			<>
			{requests.reverse()}
			</>				
		)
}

export default Requests;

// badge - danger badge-success badge-warning