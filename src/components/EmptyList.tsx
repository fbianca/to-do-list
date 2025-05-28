import { ClipboardText } from '@phosphor-icons/react'
import styles from './EmptyList.module.css'

export function EmptyList(){
    return(
        <div className={styles.emptyList}>
          <ClipboardText size={70} />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}