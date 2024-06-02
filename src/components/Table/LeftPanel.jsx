import { useNavigate } from "react-router-dom"
import avatar from '../../Avatar01.png'
import { useContext, useEffect, useState } from "react"
import { filterNewRequests } from "../../utils/function"
import { TableContext } from "./Table"

export default function LeftPanel() {
	const { setStatus, status, data } = useContext(TableContext)
	const nav = useNavigate()
	const [newRequestAmount, setNewRequestAmount] = useState(0)
	// Получение количества новых заявок
	useEffect(() => {
		if (data) setNewRequestAmount(filterNewRequests(data))			
	}, [data])

	return (
		<div className='left-panel blue-skin'>
			<div className='left-panel__logo'>
				<div className='left-panel__logo-title'>CRM заявки</div>
				<div className='left-panel__logo-subtitle'>
					учебный проект Webcademy
				</div>
			</div>
			<div className='left-panel__user clearfix'>
				<div className='left-panel__user-photo'>
					<img src={avatar} alt='Avatar' />
				</div>
				<div className='left-panel__user-name'>
					Антон <br />
					Сергеевич
				</div>
			</div>
			<div className='left-panel__navigation'>
				<div className='left-panel__navigation-title'>Заявки</div>
				<ul>
					<li>
						<button
							onClick={(evt) => {
								evt.preventDefault()
								setStatus('all')
								nav('page1')
							}}
							className={`left-panel__btn ${status === 'all' ? 'active' : ''}`}>
							Все
						</button>
					</li>
					<li>
						<button
							onClick={(evt) => {
								evt.preventDefault()
								setStatus('new')
								nav('page1')
							}}
							className={`left-panel__btn ${status === 'new' ? 'active' : ''}`}>
							Новые
							<div className='badge' id='badge-new'>
								{newRequestAmount}
							</div>
						</button>
					</li>
					<li>
						<button
							onClick={(evt) => {
								evt.preventDefault()
								setStatus('inWork')
								nav('page1')
							}}
							className={`left-panel__btn ${
								status === 'inWork' ? 'active' : ''
							}`}>
							В работе
						</button>
					</li>
					<li>
						<button
							onClick={(evt) => {
								evt.preventDefault()
								setStatus('complete')
								nav('page1')
							}}
							className={`left-panel__btn ${
								status === 'complete' ? 'active' : ''
							}`}>
							Завершенные
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}
