import { render, screen } from "@testing-library/react"

import Grid from "../components/Grid"

const renderGrid = () => {
	render(<Grid />)
}

describe("Render", () => {
	it("Should render a section element", () => {
		renderGrid()
		const sectionEl = screen.getByTestId("grid")
		expect(sectionEl).toBeInTheDocument()
		expect(sectionEl.nodeName.toLowerCase()).toBe("section")
	})

	it("Should render one row div", () => {
		renderGrid()
		const rowEl = screen.getByTestId("row-1")
		expect(rowEl).toBeInTheDocument()
		expect(rowEl.nodeName.toLowerCase()).toBe("div")
	})
})
