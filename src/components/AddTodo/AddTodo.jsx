import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAddTodo }) {
	const [text, setText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = {
			id: uuidv4(),
			text: text.trim(),
			status: 'ongoing',
		};

		onAddTodo(formData);
		setText('');
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input type="text" className={styles.input} value={text} onChange={(e) => setText(e.target.value)} placeholder="Add Todo" />
			<button type="submit" className={styles['btn-submit']}>
				Add
			</button>
		</form>
	);
}
