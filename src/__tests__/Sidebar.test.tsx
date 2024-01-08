import { render, screen } from "@testing-library/react"

import Sidebar from "../components/Sidebar"

const renderSidebar = () => {
	render(<Sidebar />)
}

describe("Render", () => {
	it("Should render a sidebar", () => {
		renderSidebar()
		const sidebarEl = screen.getByTestId("sidebar")
		expect(sidebarEl).toBeInTheDocument()
		expect(sidebarEl.nodeName.toLowerCase()).toBe("aside")
	})
})
