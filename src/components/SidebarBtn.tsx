import { Burger } from "../icons"

type SidebarBtnProps = {
	sidebarIsOpen: boolean
	setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SidebarBtn({
	sidebarIsOpen,
	setSidebarIsOpen
}: SidebarBtnProps) {
	return (
		<button
			onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
			className={`sidebar-btn ${!sidebarIsOpen ? "sidebar-btn-closed" : ""}`}
			aria-label="Toggle the sidebar"
		>
			<Burger />
		</button>
	)
}
