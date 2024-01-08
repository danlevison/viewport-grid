import { useState, useEffect, useRef } from "react"

type ViewportItemProps = {
	columns: number
	rows: number
	index: number
}

export default function ViewportItem({
	columns,
	rows,
	index
}: ViewportItemProps) {
	const viewportRef = useRef<HTMLDivElement | null>(null)
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)

	useEffect(() => {
		if (viewportRef.current) {
			setWidth(viewportRef.current.offsetWidth)
		}
		if (viewportRef.current) {
			setHeight(viewportRef.current.offsetHeight)
		}

		const getWidth = () => {
			if (viewportRef.current) {
				setWidth(viewportRef.current.offsetWidth)
			}
		}

		const getHeight = () => {
			if (viewportRef.current) {
				setHeight(viewportRef.current.offsetHeight)
			}
		}

		window.addEventListener("resize", () => {
			getWidth()
			getHeight()
		})

		return () =>
			window.removeEventListener("resize", () => {
				getWidth()
				getHeight()
			})
	}, [columns, rows])

	return (
		<div
			ref={viewportRef}
			data-testid={`viewport-item-${index + 1}`}
			className="viewport-item"
		>
			<span data-testid="width">{width}</span>
			<span>X</span>
			<span>{height}</span>
		</div>
	)
}
