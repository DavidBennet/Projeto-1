import { useState } from "react"
import { Button } from "./Button"

import styles from "./AddTasks.module.css"
import { PlusCircle } from "phosphor-react"

export function AddTask({ handleTaskAddition }) {
  const [inputData, setInputData] = useState('')

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData('')
  }

  return(
    <div className={styles.container}>
      <input 
        type="text" 
        className={styles.input} 
        onChange={handleInputChange} 
        value={inputData}
        placeholder="Escreva sua próxima tarefa"
      />
      
      <Button onClick={handleAddTaskClick}>
       Criar
       <PlusCircle size={18}/>
      </Button>
    </div>
  )
}