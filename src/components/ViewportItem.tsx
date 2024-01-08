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
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

	useEffect(() => {
		const handleResize = () => {
			if (viewportRef.current) {
				setDimensions({
					width: viewportRef.current.offsetWidth,
					height: viewportRef.current.offsetHeight
				})
			}
		}

		handleResize()

		window.addEventListener("resize", handleResize)

		return () => window.removeEventListener("resize", handleResize)
	}, [columns, rows])

	return (
		<div
			ref={viewportRef}
			data-testid={`viewport-item-${index + 1}`}
			className="viewport-item"
		>
			<span data-testid="width">{dimensions.width}</span>
			<span>X</span>
			<span>{dimensions.height}</span>
		</div>
	)
}
