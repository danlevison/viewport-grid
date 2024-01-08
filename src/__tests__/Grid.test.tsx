import { render, screen } from "@testing-library/react"

import Grid from "../components/Grid"

const renderGrid = () => {
	render(
		<Grid
			rows={1}
			columns={1}
		/>
	)
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

	it("Should render one viewport item div", () => {
		renderGrid()
		const viewportItemEl = screen.getByTestId("viewport-item-1")
		expect(viewportItemEl).toBeInTheDocument()
		expect(viewportItemEl.nodeName.toLowerCase()).toBe("div")
	})
})
