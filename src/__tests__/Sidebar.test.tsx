import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Sidebar from "../components/Sidebar"

const renderSidebar = () => {
	render(
		<Sidebar
			sidebarIsOpen={true}
			setSidebarIsOpen={jest.fn()}
			onInputChange={jest.fn()}
			gridSize={{ columns: 1, rows: 1 }}
		/>
	)
}

describe("Render", () => {
	it("Should render a sidebar", () => {
		renderSidebar()
		const sidebarEl = screen.getByTestId("sidebar")
		expect(sidebarEl).toBeInTheDocument()
		expect(sidebarEl.nodeName.toLowerCase()).toBe("aside")
	})

	it("Should render a expand/collapse sidebar button", () => {
		renderSidebar()
		const buttonEl = screen.getByRole("button")
		expect(buttonEl).toBeInTheDocument()
	})

	it("Should render a rows label", () => {
		renderSidebar()
		const rowsLabelEl = screen.getByTestId("rows-label")

		expect(rowsLabelEl).toBeInTheDocument()
		expect(rowsLabelEl.nodeName.toLowerCase()).toBe("label")
	})

	it("Should render a rows input", () => {
		renderSidebar()
		const rowsInputEl = screen.getByRole("spinbutton", { name: "Rows" })

		expect(rowsInputEl).toBeInTheDocument()
		expect(rowsInputEl.nodeName.toLowerCase()).toBe("input")
	})

	it("Should render a columns label", () => {
		renderSidebar()
		const columnsLabelEl = screen.getByTestId("columns-label")

		expect(columnsLabelEl).toBeInTheDocument()
		expect(columnsLabelEl.nodeName.toLowerCase()).toBe("label")
	})

	it("Should render a columns input", () => {
		renderSidebar()
		const columnsInputEl = screen.getByRole("spinbutton", { name: "Columns" })

		expect(columnsInputEl).toBeInTheDocument()
		expect(columnsInputEl.nodeName.toLowerCase()).toBe("input")
	})
})

describe("Behaviour", () => {
	it("Should tab to the correct element", () => {
		renderSidebar()

		const buttonEl = screen.getByRole("button")
		const rowsInputEl = screen.getByRole("spinbutton", { name: "Rows" })
		const columnsInputEl = screen.getByRole("spinbutton", { name: "Columns" })

		userEvent.tab()
		expect(buttonEl).toHaveFocus()

		userEvent.tab()
		expect(rowsInputEl).toHaveFocus()

		userEvent.tab()
		expect(columnsInputEl).toHaveFocus()
	})
})
