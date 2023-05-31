import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ onAddTodo }) {
	const [text, setText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = {
			id: uuidv4(),
			text: text.trim(),
			status: 'active',
		};

		onAddTodo(formData);
		setText('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="add your todo..." />
			<button type="submit">Add</button>
		</form>
	);
}
