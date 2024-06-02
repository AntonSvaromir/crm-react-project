import { useState } from 'react'
import { serverPath } from '../../utils/constant'
import useFetch from "../../utils/useFetch"
import ErrorForm from './ErrorForm'
import Form from './Form'

export default function FormWrapper() {
	document.body.classList.remove('body--dashboard')
	document.body.classList.add('flex-center', 'radial-bg')

	const [update, setUpdate] = useState(true)

	const { data: lastNumberRequest, isLoading, error } = useFetch(serverPath + 'lastNumberRequest', update)
	
   return (
			<div className='white-plate white-plate--payment'>
				<div className='container-fluid'>
					<div className='white-plate__header text-center'>
						<p className='white-plate__logo'>
							<span>Форма</span> заявок
						</p>
					</div>
					<div className='white-plate__line-between white-plate__line-between--main'></div>
					{isLoading && <h3>Loading...</h3>}
					{lastNumberRequest && <Form lastNumberRequest={lastNumberRequest} setUpdate={setUpdate} update={update} />}
					{error && <ErrorForm />}
					
				</div>
			</div>
		)
}