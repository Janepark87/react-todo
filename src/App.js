import { useState } from 'react';
import './App.css';
import FilterTodoList from './components/FilterTodoList/FilterTodoList';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'ongoing', 'completed'];

function App() {
	const [filter, setFilter] = useState(filters[0]);

	return (
		<>
			<DarkModeProvider>
				<FilterTodoList filters={filters} filter={filter} onFilterChange={setFilter} />
				<TodoList filter={filter} />
			</DarkModeProvider>
		</>
	);
}

export default App;
