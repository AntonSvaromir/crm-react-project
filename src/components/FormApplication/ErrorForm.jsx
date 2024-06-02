export default function ErrorForm() {
   
   return (
			<div className='error-form__wrap'>
				<div className='error-form__logo'>
					<h1>404</h1>
					<h2> Sorry - Form not Found!</h2>
					<div className='error-form__sub'>
						<button
							onClick={() => window.location.reload()}
							className='error-form__btn'>
							Попробуйте перезагрузить страницу
						</button>
					</div>
				</div>
			</div>
		)
}