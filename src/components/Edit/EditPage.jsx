import { Link, useParams } from "react-router-dom";
import EditRequest from "./EditRequest";

function EditPage() {
   document.body.classList.remove('flex-center', 'radial-bg', 'body--dashboard')
	const {id} = useParams()
	
   return (
			<div className='form-wrapper'>
				<div className='container-fluid'>
					<div className='row justify-content-between align-items-center'>
						<div className='col'>
							<div className='admin-heading-1'>Работа с заявкой</div>
						</div>
						<div className='col text-right'>
							<Link to={'/table'}>Вернуться назад</Link>
						</div>
					</div>
					<EditRequest id={id} />
				</div>
			</div>
		)
}

export default EditPage;