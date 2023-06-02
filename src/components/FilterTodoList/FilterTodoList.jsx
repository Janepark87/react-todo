import styles from './FilterTodoList.module.css';

export default function FilterTodoList({ filters, filter, onFilterChange }) {
	return (
		<header className={styles.header}>
			<ul className={styles.filters}>
				{filters.map((value, index) => (
					<li key={index}>
						<button type="button" className={`${styles.filter} ${filter === value ? styles.active : ''}`} onClick={() => onFilterChange(value)}>
							{value}
						</button>
					</li>
				))}
			</ul>
		</header>
	);
}
