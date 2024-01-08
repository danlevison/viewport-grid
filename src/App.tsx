import "./App.scss"
import Sidebar from "./components/Sidebar"
import Grid from "./components/Grid"

export function App() {
	return (
		<main className="app">
			<Sidebar />
			<Grid />
		</main>
	)
}
