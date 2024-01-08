import { useState } from "react"
import SidebarBtn from "./SidebarBtn"

export default function Sidebar() {
	const [rows, setRows] = useState(1)
	const [columns, setColumns] = useState(1)

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
						onChange={(e) => setRows(parseInt(e.target.value))}
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
						onChange={(e) => setColumns(parseInt(e.target.value))}
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
