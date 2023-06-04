import { FaRegTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
	const { id, text, status } = todo;

	const handleDeletedEvent = () => {
		onDelete(todo); // 그대로 다시 todo 객체를 그대로 다시 보내줌
	};

	const handleUpdatedEvent = (e) => {
		onUpdate({
			...todo, // 기존의 todo 정보는 그대로 받아오고, 변경할 status만 업데이트 해줌
			status: e.target.checked ? 'completed' : 'ongoing',
		});
	};
	return (
		<li className={`${styles.todo} ${status === 'completed' ? styles.completed : ''}`}>
			<input type="checkbox" className={styles.checkbox} id={`todoCheckbox-${id}`} checked={status === 'completed'} onChange={handleUpdatedEvent} />
			<label htmlFor={`todoCheckbox-${id}`} className={styles.label}>
				{text}
			</label>
			<button type="button" onClick={handleDeletedEvent} className={styles['btn-delete']}>
				<FaRegTrashAlt />
			</button>
		</li>
	);
}
