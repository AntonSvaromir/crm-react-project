import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "../Nav/Nav"
import FormApplication from "../FormApplication/FormApplication"
import Edit from "../Edit/Edit"
import Table from "../Table/Table"



function App() {
	return (
		<BrowserRouter>
		<Nav />
			<Routes>
				<Route path="/" element={<FormApplication />} />
				<Route path="/edit" element={<Edit />} />
				<Route path="/table" element={<Table />} />
			</Routes>
		</BrowserRouter>
		
	)
}

export default App
