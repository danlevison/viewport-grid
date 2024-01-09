import SidebarBtn from "./SidebarBtn"

type SidebarProps = {
	onInputChange: (size: { columns: number; rows: number }) => void
	sidebarIsOpen: boolean
	setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	gridSize: {
		columns: number
		rows: number
	}
}

export default function Sidebar({
	onInputChange,
	sidebarIsOpen,
	setSidebarIsOpen,
	gridSize
}: SidebarProps) {
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		type: string
	) => {
		const value = Math.min(parseInt(e.target.value), 10)

		if (type === "columns") {
			onInputChange({ ...gridSize, columns: value })
		} else {
			onInputChange({ ...gridSize, rows: value })
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
						value={isNaN(gridSize.rows) ? "" : gridSize.rows}
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
						value={isNaN(gridSize.columns) ? "" : gridSize.columns}
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
