function LeftPanel() {
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
						<img src='img/avatars/avatar-128.jpg' alt='Avatar' />
					</div>
					<div className='left-panel__user-name'>
						Петр <br />
						Васильевич
					</div>
				</div>
				<div className='left-panel__navigation'>
					<div className='left-panel__navigation-title'>Заявки</div>
					<ul>
						<li>
							<a data-value='all' href='/' className='active'>
								Все вместе
							</a>
						</li>
						<li>
							<a data-value='new' href='/'>
								Новые
								<div className='badge' id='badge-new'>
									12
								</div>
							</a>
						</li>
						<li>
							<a data-value='inWork' href='/'>
								В работе
							</a>
						</li>
						<li>
							<a data-value='complete' href='/'>
								Завершенные
							</a>
						</li>
					</ul>
				</div>
			</div>
		)
}

export default LeftPanel;