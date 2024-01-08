import { useState } from "react"
import SidebarBtn from "./SidebarBtn"

type SidebarProps = {
	onInputChange: (size: { columns: number; rows: number }) => void
	sidebarIsOpen: boolean
	setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Sidebar({
	onInputChange,
	sidebarIsOpen,
	setSidebarIsOpen
}: SidebarProps) {
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
			style={{ width: `${sidebarIsOpen ? "300px" : "40px"}` }}
		>
			<SidebarBtn
				sidebarIsOpen={sidebarIsOpen}
				setSidebarIsOpen={setSidebarIsOpen}
			/>

			<div
				className={`${sidebarIsOpen ? "inputs-group" : "hidden"}`}
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
					/>
				</div>
			</div>
		</aside>
	)
}
