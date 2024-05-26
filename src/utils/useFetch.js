import { useEffect, useState } from "react"

const useFetch = (url, updateFlag = '') => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const abortCont = new AbortController() // Для прерывания fetch

		
			fetch(url, { signal: abortCont.signal })
				.then((res) => {
					if (res.ok !== true) {
						throw Error('Could not fetch the data from this resource')
					}
					return res.json()
				})
				.then((data) => {
					setData(data)
					setIsLoading(false)
					setError(null)
				})
				.catch((err) => {
					if (err.name === 'abortError') {
						console.log('fetch aborted')
					} else {
						setError(err.message)
						setIsLoading(false)
					}
				})

		return () => {
			abortCont.abort()
		}
	}, [updateFlag])

	return { data, isLoading, error }
}

export default useFetch
