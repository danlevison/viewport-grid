type GridProps = {
	rows: number
	columns: number
}

export default function Grid({ rows, columns }: GridProps) {
	return (
		<section
			className="grid"
			data-testid="grid"
		>
			{Array.from({ length: rows }).map((_, rowIdx) => (
				<div
					key={rowIdx}
					data-testid={`row-${rowIdx + 1}`}
					className="row"
				></div>
			))}
		</section>
	)
}
