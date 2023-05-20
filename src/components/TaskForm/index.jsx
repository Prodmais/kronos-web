import { useState } from "react";
import styles from "./task-form.module.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const TaskForm = () => {

  const [task, setTask] = useState({
    name: '',
    description: '',
    endDate: null,
    boardId: null,
    ownerId: null,
  });

  function handleSubmit(event) {
    event.preventDefault();
  };

  function handleChange(event) {
    setTask({
      ...task,
      name: event.target.value
    })
  }



  return (
    <>
      <div className={`${styles.area} ${styles.formContainer}`}>
        <div className={styles.form_div}>
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <h5>CRIE SUA ATIVIDADE</h5>
            <input type="text" placeholder="Nome da sua Atividade" className={styles.nameCamp} /><br />
            <textarea name="description" id="descriptionCamp" cols="30" rows="10" placeholder="Descrição" className={styles.textarea}></textarea><br />
            {/* <input type="text" placeholder="Finaliza em" className={styles.dateCampE}/><br /> */}
            <input type="date" placeholder="Finaliza em" className={styles.datepick} /><br />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" >Quadro</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={task.name}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={'name'}>Ten</MenuItem>
                <MenuItem value={'20'}>Twenty</MenuItem>
                <MenuItem value={'30'}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <button type="submit" className={styles.submitBtn}><p>Criar tarefa</p></button>
          </form>
        </div>
      </div>
    </>
  )
}
export default TaskForm;