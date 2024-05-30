function EmptyPage() {
   return (
			<tr className='empty__wrap'>
				<td colSpan='7' className='empty__logo'>
					<h1>Заявок нет</h1>
					<h2>Установите другое значение Фильтра</h2>
				</td>
			</tr>
		)
}

export default EmptyPage;