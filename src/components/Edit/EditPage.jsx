import { Link, useParams } from "react-router-dom";
import EditRequest from "./EditRequest";

export default function EditPage() {
	const backLink = new URL(window.location).hash.replace(/#/g, '')
	console.log(backLink)
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
							<Link to={backLink}>Вернуться назад</Link>
						</div>
					</div>
					<EditRequest backLink={backLink} id={id} />
				</div>
			</div>
		)
}
