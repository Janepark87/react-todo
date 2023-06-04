import styles from './FilterTodoList.module.css';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useDarkMode } from '../../context/DarkModeContext';

export default function FilterTodoList({ filters, filter, onFilterChange }) {
	const { darkMode, toggleDarkMode } = useDarkMode();

	return (
		<header className={styles.header}>
			<button type="button" className={styles['btn-theme']} onClick={toggleDarkMode}>
				{darkMode ? <HiMoon /> : <HiSun />}
			</button>

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
