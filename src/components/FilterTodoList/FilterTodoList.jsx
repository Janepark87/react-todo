export default function FilterTodoList({ filters, filter, onFilterChange }) {
	return (
		<header>
			<ul>
				{filters.map((value, index) => (
					<li key={index}>
						<button type="button" onClick={() => onFilterChange(value)}>
							{value}
						</button>
					</li>
				))}
			</ul>
		</header>
	);
}
