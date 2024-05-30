import { Link, useLocation } from 'react-router-dom'

function LinksToPage({ pagesRequest }) {
	const pageUrl = useLocation().pathname

	const linkPages = pagesRequest.map((page) => {
		return (
			<Link
				className={`page__navigation-link ${
					pageUrl === '/table/page' + page
						? 'page__navigation-link--active'
						: ''
				}`}
				key={page}
				to={'page' + page}>
				Страница {page}
			</Link>
		)
	})

	return <div className='page__navigation'>{linkPages}</div>
}

export default LinksToPage
