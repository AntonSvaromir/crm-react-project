function Requests({data}) {
	

	const requests = data.map((request) => {
		const {id, date, fullName, phone, email, product, status} = request
		const localeDate = new Date(date).toLocaleDateString()
		
		const statusName = {
			new: 'Новый',
			inWork: 'В работе',
			complete: 'Завершенный',
		}
		const statusClassName = {
			new: 'badge badge-pill badge-danger',
			inWork: 'badge badge-pill badge-warning',
			complete: 'badge badge-pill badge-success',
		}
		const productRequest = {
			'course-html': 'Курс по верстке',
			'course-js': 'Курс по JavaScript',
			'course-vue': 'Курс по VUE JS',
			'course-php': 'Курс по PHP',
			'course-wordpress': 'Курс по WordPress',
		}
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
					<a href='edit.html'>Редактировать</a>
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