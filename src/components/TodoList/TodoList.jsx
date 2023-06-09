import { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
	const [todos, setTodos] = useState(readTodosFromLocalStorage);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleAdd = (currentTodo) => {
		const { text } = currentTodo;
		if (text.length === 0) return;
		setTodos([...todos, currentTodo]);
	};

	const handleDelete = (deleted) => {
		setTodos(todos.filter((todo) => todo.id !== deleted.id));
	};

	const handleUpdate = (updated) => {
		setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
	};

	// 새로 필터된 Todos 배열을 생성
	const filteredTodos = getFilteredTodos(todos, filter);

	return (
		<section className={styles['todo-container']}>
			<ul className={styles.todos}>
				{filteredTodos.map((todo) => (
					<Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
				))}
			</ul>

			<AddTodo onAddTodo={handleAdd} />
		</section>
	);
}
function readTodosFromLocalStorage() {
	const todos = localStorage.getItem('todos');
	return todos ? JSON.parse(todos) : [];
}

function getFilteredTodos(todos, filter) {
	if (filter === 'all') return todos;
	return todos.filter((todo) => todo.status === filter);
}
