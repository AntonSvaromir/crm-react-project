function Edit() {
   document.body.classList.remove('flex-center', 'radial-bg')
   return (
			<div className='form-wrapper'>
				<div className='container-fluid'>
					<div className='row justify-content-between align-items-center'>
						<div className='col'>
							<div className='admin-heading-1'>Работа с заявкой</div>
						</div>
						<div className='col text-right'>
							<a href='index.html' className='btn btn-link'>
								Вернуться назад
							</a>
						</div>
					</div>
					<div className='row'>
						<div className='col'>
							<form id='form'>
								<div className='card mb-4'>
									<div className='card-header'>Данные о заявке</div>
									<div className='card-body'>
										<div className='row mb-3'>
											<div className='col-md-2'>
												<strong>ID:</strong>
											</div>
											<div className='col'>
												Заявка №<span id='number'>1</span>
											</div>
											<input name='id' type='hidden' id='id' />
										</div>

										<div className='row mb-3'>
											<div className='col-md-2'>
												<strong>Дата создания:</strong>
											</div>
											<div className='col' id='date'>
												2020-04-20 13:52:13
											</div>
										</div>

										<div className='row mb-3'>
											<div className='col-md-2'>
												<strong>Продукт:</strong>
											</div>
											<div className='col'>
												<select
													id='product'
													name='product'
													className='custom-select'>
													<option value='course-html'>Курс по верстке</option>
													<option value='course-js'>Курс по JavaScript</option>
													<option value='course-vue'>
														Курс по VUE JS
													</option>
													<option value='course-php'>Курс по PHP</option>
													<option value='course-wordpress'>
														Курс по WordPress
													</option>
												</select>
											</div>
										</div>

										<div className='row mb-3'>
											<div className='col-md-2'>
												<strong>Имя:</strong>
											</div>
											<div className='col'>
												<input
													type='text'
													className='form-control'
													id='name'
													name='name'
												/>
											</div>
										</div>

										<div className='row mb-3'>
											<div className='col-md-2'>
												<strong>Email:</strong>
											</div>
											<div className='col'>
												<input
													type='text'
													className='form-control'
													id='email'
													name='email'
												/>
											</div>
										</div>

										<div className='row mb-3'>
											<div className='col-md-2'>
												<strong>Телефон:</strong>
											</div>
											<div className='col'>
												<input
													type='text'
													className='form-control'
													id='phone'
													name='phone'
												/>
											</div>
										</div>

										<div className='row mb-3'>
											<div className='col-md-2'>
												<strong>Статус заявки:</strong>
											</div>
											<div className='col'>
												<select
													className='custom-select'
													id='status'
													name='status'>
													<option value=''>Выберите...</option>
													<option value='new'>Новая</option>
													<option value='inWork'>В работе</option>
													<option value='complete'>Завершена</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div className='row justify-content-between'>
									<div className='col text-right'>
										<button type='submit' className='btn btn-primary'>
											Сохранить изменения
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
}

export default Edit;