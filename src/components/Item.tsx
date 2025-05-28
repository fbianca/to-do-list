import { Check, Trash } from '@phosphor-icons/react'

import styles from './Item.module.css'
import { Task } from '../App';

interface Props {
	data: Task,
	removeTask: (id: number) => void,
	toggleTask:({id, value} : {id: number, value: boolean}) => void
}

export function Item({data, removeTask, toggleTask}: Props){

	function handleTaskToggle() {
    toggleTask({ id: data.id, value: !data.isChecked })
  }

  function handleRemove() {
    removeTask(data.id)
  }

	const checkboxClassname = data.isChecked
	? styles['checkbox-checked']
	: styles['checkbox-unchecked']

	const paragraphClassname = data.isChecked
    ? styles['paragraph-checked']
    : ''

	return(
		<div className={styles.container}>
			<div>
				<label htmlFor="checkbox" onClick={handleTaskToggle}>
					<input readOnly type="checkbox" checked={data.isChecked}/>
					<span className={`${styles.checkbox} ${checkboxClassname}`}>
						{data.isChecked && <Check size={12}/> }
					</span>

					<p className={`${styles.paragraph} ${paragraphClassname}`}>{data.content}</p>
				</label>
			</div>
			<button type='button' onClick={handleRemove}>
				<Trash size={16} color="#808080"/>
			</button>
		</div>
	)
}