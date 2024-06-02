import { HashRouter, Route, Routes } from "react-router-dom"
import Nav from "../Nav/Nav"
import EditPage from "../Edit/EditPage"
import { Table } from "../Table"
import ErrorPage from "../ErrorPage"
import FormWrapper from "../FormApplication/FormWrapper"


export default function App() {
	return (
		<HashRouter>
		<Nav />
			<Routes>
				<Route path="/" element={<FormWrapper/>} />
				<Route path="/edit/:id" element={<EditPage />} />
				<Route path="/table/*" element={<Table />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</HashRouter>
		
	)
}

