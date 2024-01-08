import { Burger } from "../icons"

export default function SidebarBtn() {
	return (
		<button
			className="sidebar-btn"
			aria-label="Toggle the sidebar"
		>
			<Burger />
		</button>
	)
}
