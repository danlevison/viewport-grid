import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { App } from "../App"

describe("Render", () => {
	it("Should render the correct amount of rows", () => {
		render(<App />)
		const rowsInputEl = screen.getByRole("spinbutton", { name: "Rows" })
		const viewportRowElOne = screen.getByTestId("row-1")

		expect(rowsInputEl).toHaveValue(1)
		expect(viewportRowElOne).toBeInTheDocument()

		userEvent.clear(rowsInputEl)
		userEvent.type(rowsInputEl, "4")

		const viewportRowElFour = screen.getByTestId("row-4")
		expect(viewportRowElFour).toBeInTheDocument()
	})

	it("Should render the correct amount of columns", () => {
		render(<App />)
		const columnsInputEl = screen.getByRole("spinbutton", { name: "Columns" })
		const viewportColumnElOne = screen.getByTestId("viewport-item-1")

		expect(columnsInputEl).toHaveValue(1)
		expect(viewportColumnElOne).toBeInTheDocument()

		userEvent.clear(columnsInputEl)
		userEvent.type(columnsInputEl, "4")

		const viewportColumnElFour = screen.getByTestId("viewport-item-4")
		expect(viewportColumnElFour).toBeInTheDocument()
	})
})

describe("Behaviour", () => {
	it("Should allow users open/close sidebar", () => {
		render(<App />)

		const buttonEl = screen.getByRole("button")
		const sidebarEl = screen.getByTestId("sidebar")
		const inputsGroupEl = screen.getByTestId("inputs-group")

		expect(buttonEl).toHaveClass("sidebar-btn ")
		expect(sidebarEl).toHaveStyle("width: 300px")
		expect(inputsGroupEl).toHaveClass("inputs-group")

		userEvent.click(buttonEl)

		expect(buttonEl).toHaveClass("sidebar-btn sidebar-btn-closed")
		expect(sidebarEl).toHaveStyle("width: 40px")
		expect(inputsGroupEl).toHaveClass("hidden")
	})
})
