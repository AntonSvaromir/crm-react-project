import { Link, useNavigate, useParams } from "react-router-dom";
import EditRequest from "./EditRequest";

export default function EditPage() {
	
   document.body.classList.remove('flex-center', 'radial-bg', 'body--dashboard')
	const {id} = useParams()
	const navigate = useNavigate()
   return (
			<div className='form-wrapper'>
				<div className='container-fluid'>
					<div className='row justify-content-between align-items-center'>
						<div className='col'>
							<div className='admin-heading-1'>Работа с заявкой</div>
						</div>
						<div className='col text-right'>
							
							<button onClick={() => navigate(-1)} className="btn__go-back">Вернуться назад</button>
						</div>
					</div>
					<EditRequest  id={id} />
				</div>
			</div>
		)
}
