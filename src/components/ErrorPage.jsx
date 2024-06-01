import { Link } from "react-router-dom"

export default function ErrorPage() {
	return (
		<div className='error__wrap'>
			<div className='error__logo'>
				<h1>404</h1>
				<h2> Sorry - Page not Found!</h2>
				<div className='error__sub'>
					
						<Link to={'/table'}> Вернутся к Таблице с заявками</Link>
					
				</div>
			</div>
		</div>
	)
}


