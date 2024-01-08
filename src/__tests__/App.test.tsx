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
})
