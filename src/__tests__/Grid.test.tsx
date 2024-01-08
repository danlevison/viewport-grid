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
})
