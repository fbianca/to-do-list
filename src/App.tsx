
import { PlusCircle, ClipboardText } from 'phosphor-react'
import { Header } from './components/Header'

import './global.css'
import styles from './App.module.css'

function App() {


  return (
    <>
      <Header />
      <section className={styles.container}>
        <form className={styles.toDoForm}>
          <input type='text' name='to-do' placeholder='Adicione uma nova tarefa'/>
          <button type='submit'>
            Criar <PlusCircle size={20} />
          </button>
        </form>
      </section>

      <section className={styles.taskList}>
        <div className={styles.header}>
          <div>
            <p>Tarefas criadas</p>
            <span>0</span>
          </div>
          <div>
            <p>Concluídas</p>
            <span>0</span>
          </div>
        </div>
        <div className={styles.list}>
          <ClipboardText size={70} />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </section>
    </>
  )
}

export default App
