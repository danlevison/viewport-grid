import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Grid from "./components/Grid"
import "./App.scss"

export function App() {
	const [gridSize, setGridSize] = useState({ columns: 1, rows: 1 })
	const [sidebarIsOpen, setSidebarIsOpen] = useState(true)

	const handleInputChange = (size: { columns: number; rows: number }) => {
		setGridSize(size)
	}

	return (
		<main className="app">
			<Sidebar
				onInputChange={handleInputChange}
				sidebarIsOpen={sidebarIsOpen}
				setSidebarIsOpen={setSidebarIsOpen}
			/>
			<Grid
				rows={gridSize.rows}
				columns={gridSize.columns}
			/>
		</main>
	)
}
