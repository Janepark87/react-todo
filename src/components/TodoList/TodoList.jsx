import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
	const [todos, setTodos] = useState(initialTodoList);

	const handleAddTodo = (currentTodo) => {
		const { text } = currentTodo;
		if (text.length === 0) return;
		setTodos([...todos, currentTodo]);
	};

	return (
		<section>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.text}</li>
				))}
			</ul>

			<AddTodo onAddTodo={handleAddTodo} />
		</section>
	);
}

const initialTodoList = [
	{
		id: '123',
		text: 'Test',
		status: 'active',
	},
	{
		id: '456',
		text: 'Demo',
		status: 'active',
	},
];
