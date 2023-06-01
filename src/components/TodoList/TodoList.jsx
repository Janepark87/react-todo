import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList() {
	const [todos, setTodos] = useState(initialTodoList);

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

	return (
		<section>
			<ul>
				{todos.map((todo) => (
					<Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
				))}
			</ul>

			<AddTodo onAddTodo={handleAdd} />
		</section>
	);
}

const initialTodoList = [
	{
		id: '123',
		text: 'Test',
		status: 'ongoing',
		checked: false,
	},
	{
		id: '456',
		text: 'Demo',
		status: 'ongoing',
		checked: false,
	},
];
