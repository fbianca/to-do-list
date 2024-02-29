
import { PlusCircle } from 'phosphor-react'
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
            Criar <PlusCircle size={16} />
          </button>
        </form>
      </section>
    </>
  )
}

export default App
