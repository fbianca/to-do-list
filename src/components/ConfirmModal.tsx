import styles from './ConfirmModal.module.css'

export function ConfirmModal(){
    return(
        <div className={`${styles.hidden} ${styles.customConfirmOverlay}`}>
            <div className={styles.customConfirmModal}>
                <h2>Confirmar Ação</h2>
                <p>Você está prestes a deletar a tarefa 1234. Deseja continuar?</p>
                <div className={styles.btnContainer}>
                <button className={styles.btnYes}>Sim</button>
                <button className={styles.btnNo}>Não</button>
                </div>
            </div>
            </div>
    )
}