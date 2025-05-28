/* eslint-disable @typescript-eslint/no-unused-vars */

import { PlusCircle } from '@phosphor-icons/react'
import { Header } from './components/Header'

import './global.css'
import styles from './App.module.css'
import { useState } from 'react';
import { EmptyList } from './components/EmptyList';
import { Item } from './components/Item';
import { ConfirmModal } from './components/ConfirmModal';

export interface Task {
  id: number,
  content: string,
  isChecked: boolean
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [taskInput, setTaskInput] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
  if (currentTask.isChecked) {
    return prevValue + 1
  }

  return prevValue
}, 0)

  function handleAddTask(){
    if(!taskInput){
      return 
    }

    const newTask: Task = {
      id: new Date().getTime(),
      content: taskInput,
      isChecked: false
    }

    setTasks((state) => [...state, newTask])
    setTaskInput('')
  }

  function handleRemoveTask(id: number){
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if(!confirm('Deseja mesmo apagar essa tarefa?')){
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({id, value} : {id: number, value: boolean}){
    const updatedTask = tasks.map((task) => {
      if(task.id === id){
        return {...task, isChecked: value}
      }

      return {...task}
    })

    setTasks(updatedTask)
  }

  return (
    <>
      <Header />
      <section className={styles.container}>
        <form className={styles.toDoForm}>
          <input 
            type='text'
            placeholder='Adicione uma nova tarefa'
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button type='button' onClick={handleAddTask}>
            Criar <PlusCircle size={20} />
          </button>
        </form>
      </section>

      <section className={styles.taskList}>
        <div className={styles.header}>
          <div>
            <p>Tarefas criadas</p>
            <span>{tasks.length}</span>
          </div>
          <div>
            <p>Concluídas</p>
            <span>{tasks.length === 0
              ? tasks.length
              : `${checkedTasksCounter} de ${tasks.length}`
            }</span>
          </div>
        </div>
        {tasks.length > 0 ? (
          <div className={styles.taskContainer}>
            {tasks.map((task) => (
              <Item 
                key={task.id}
                data={task}
                removeTask={handleRemoveTask}
                toggleTask={handleToggleTask}
              />
            ))}
          </div>
        ) : <EmptyList /> }
      </section>
      {/* <ConfirmModal /> */}
    </>
  )
}

export default App
