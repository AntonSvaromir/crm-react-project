import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "../Nav/Nav"
import FormApplication from "../FormApplication/FormApplication"
import EditPage from "../Edit/EditPage"
import { Table } from "../Table"
import ErrorPage from "../ErrorPage"


export default function App() {
	return (
		<BrowserRouter>
		<Nav />
			<Routes>
				<Route path="/" element={<FormApplication />} />
				<Route path="/edit/:id" element={<EditPage />} />
				<Route path="/table/*" element={<Table />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
		
	)
}

