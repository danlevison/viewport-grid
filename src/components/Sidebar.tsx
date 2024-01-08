import { Burger } from "../icons"

export default function Sidebar() {
	return (
		<aside
			data-testid="sidebar"
			className="sidebar"
		>
			<button aria-label="Toggle the sidebar">
				<Burger />
			</button>
		</aside>
	)
}
