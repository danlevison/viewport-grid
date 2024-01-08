import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Grid from "./components/Grid"
import "./App.scss"

export function App() {
	const [gridSize, setGridSize] = useState({ columns: 1, rows: 1 })

	const handleInputChange = (size: { columns: number; rows: number }) => {
		setGridSize(size)
	}

	return (
		<main className="app">
			<Sidebar onInputChange={handleInputChange} />
			<Grid
				rows={gridSize.rows}
				columns={gridSize.columns}
			/>
		</main>
	)
}
