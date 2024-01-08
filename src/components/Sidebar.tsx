import { useState } from "react"
import SidebarBtn from "./SidebarBtn"

type SidebarProps = {
	onInputChange: (size: { columns: number; rows: number }) => void
}

export default function Sidebar({ onInputChange }: SidebarProps) {
	const [rows, setRows] = useState(1)
	const [columns, setColumns] = useState(1)

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		type: string
	) => {
		const value = Math.min(parseInt(e.target.value), 10)

		if (type === "columns") {
			setColumns(() => {
				onInputChange({ columns: value, rows })
				return value
			})
		} else {
			setRows(() => {
				onInputChange({ columns, rows: value })
				return value
			})
		}
	}

	return (
		<aside
			data-testid="sidebar"
			className="sidebar"
		>
			<SidebarBtn />

			<div
				className="inputs-group"
				data-testid="inputs-group"
			>
				<div className="input-container">
					<label
						htmlFor="rows"
						data-testid="rows-label"
					>
						Rows
					</label>
					<input
						onChange={(e) => handleInputChange(e, "rows")}
						value={isNaN(rows) ? "" : rows}
						type="number"
						id="rows"
						name="rows"
						min={1}
						data-testid="rows-input"
					/>
				</div>

				<div className="input-container">
					<label
						htmlFor="columns"
						data-testid="columns-label"
					>
						Columns
					</label>
					<input
						onChange={(e) => handleInputChange(e, "columns")}
						value={isNaN(columns) ? "" : columns}
						type="number"
						id="columns"
						name="columns"
						min={1}
						data-testid="columns-input"
					/>
				</div>
			</div>
		</aside>
	)
}
