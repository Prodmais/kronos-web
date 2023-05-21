import { useState } from "react";
import styles from "./task-form.module.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const TaskForm = ({ boards, users, handleSubmit }) => {

  const [task, setTask] = useState({
    name: '',
    description: '',
    endDate: null,
    boardId: boards[0].id,
    ownerId: -1,
  });

  function onSubmit(event) {
    event.preventDefault();

    handleSubmit(task);
  };

  function handleChange(event, key) {
    setTask({ 
      ...task, 
      [key]: event.target.value
    });
  }

  return (
    <>
      <div className={`${styles.area} ${styles.formContainer}`}>
        <div className={styles.form_div}>
          <form className={styles.formulario} onSubmit={onSubmit}>
            <h5>CRIE SUA ATIVIDADE</h5>
            
            <input 
              onChange={(e) => handleChange(e, 'name')}
              type="text" 
              placeholder="Nome da sua Atividade" 
              className={styles.nameCamp} 
            />
            
            <textarea 
              onChange={(e) => handleChange(e, 'description')}
              name="description" 
              id="descriptionCamp" 
              cols="30" 
              rows="10" 
              placeholder="Descrição" 
              className={styles.textarea}>
            </textarea>
            
            <input 
              type="date" 
              onChange={(e) => handleChange(e, 'endDate')}
              placeholder="Finaliza em" 
              className={styles.datepick} 
            />
            
            <FormControl sx={{
              margin: '0'
            }} fullWidth>
              <InputLabel 
                sx={{
                  top: '-10px'
                }}
                onChange={handleChange}
                id="Boardslabel">
                  Quadro
              </InputLabel>
              <Select
                sx={{
                  height: '40px'
                }}
                labelId="Boardslabel"
                id="demo-simple-select"
                value={task.boardId}
                label="Quadro"
                onChange={(e) => handleChange(e, 'boardId')}
              >
                {
                  boards.length ? boards.map(board => (
                    <MenuItem key={board.id} value={board.id}>{board.name}</MenuItem>
                  )) 
                  : null
                }
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel 
                onChange={handleChange}
                id="Boardslabel">
                  Atribuir à
              </InputLabel>
              <Select
                sx={{
                  height: '40px'
                }}
                labelId="Boardslabel"
                id="demo-simple-select"
                value={task.name}
                label="Quadro"
                onChange={(e) => handleChange(e, 'boardId')}
              >
                {
                  users.length ? users.map(user => (
                    <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
                  )) 
                  : null
                }
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