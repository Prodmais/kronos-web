import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import styles from "./task-form.module.css";
import { enqueueSnackbar } from "notistack";
import InputError from "../InputError";

const TaskForm = ({ title="CRIE SUA ATIVIDADE", buttonText="Criar atividade", boards, users, handleSubmit, editableTask }) => {

  const [task, setTask] = useState(editableTask ? {
    ...editableTask,
    endDate: new Date(editableTask.endDate.split('T')[0])

  } : {
    name: '',
    description: '',
    endDate: new Date(),
    boardId: boards[0].id,
    ownerId: users[0]?.id ?? 0,
  });
  const [isValidEndDate, setIsValidEndDate] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);
  const [endDate, setEndDate] = useState(new Date());

  function onSubmit(event) {
    event.preventDefault();
    setIsSubmit(true);

    if (task.name.length < 4) {
      enqueueSnackbar("Campo 'nome' está inválido.", {
        variant: "error"
      })
      return;
    }

    if (!checkEndDate(task.endDate)) {
      enqueueSnackbar("Campo 'Data término' está inválido.", {
        variant: "error"
      })
      return;
    }

    handleSubmit(task);
  };


  function checkEndDate(date) {
    const currentYear = new Date().getFullYear();
    const yearSelected = date.getFullYear();

    return yearSelected >= currentYear;
  }

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
            <h5>{title}</h5>

            <input
              onChange={(e) => handleChange(e, 'name')}
              type="text"
              value={task.name}
              placeholder="Nome da sua Atividade"
              className={styles.nameCamp}
              maxLength={40}
            />

            <textarea
              onChange={(e) => handleChange(e, 'description')}
              value={task.description}
              name="description"
              id="descriptionCamp"
              cols="30"
              rows="10"
              placeholder="Descrição"
              maxLength={255}
              className={`${styles.textarea}`}>
            
            </textarea>

            <input
              id="datepicker"
              type="date"
              value={task.endDate.getFullYear() + "-" + ("0" + (task.endDate.getMonth() + 1)).slice(-2) + "-" + ("0" + task.endDate.getDate()).slice(-2)}
              onChange={(e) => {
                const newDate = new Date(e.target.value);
                newDate.setDate(Number(e.target.value.slice(-2)));
                setTask({
                  ...task,
                  endDate: newDate,
                })
              }}
              placeholder="Finaliza em"
              className={`${styles.datepick}}`}
            />
            {(isSubmit && !isValidEndDate) && <InputError>A data de término está inválida.</InputError>}

            <FormControl sx={{
              margin: '0'
            }} fullWidth>
              <InputLabel
                sx={{
                  top: '0px',
                  left: '-5px',
                }}
                onChange={handleChange}
                id="boardsLabel">
                Quadro
              </InputLabel>
              <Select
                sx={{
                  height: '40px'
                }}
                labelId="boardsLabel"
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
                sx={{
                  left: '-5px',
                  backgroundColor: '#FFFFFF',
                  paddingRight: '10px',
                }}
                onChange={handleChange}
                id="userLabel">
                Atribuir à
              </InputLabel>
              <Select
                sx={{
                  height: '40px'
                }}
                labelId="userLabel"
                id="demo-simple-select"
                value={task.ownerId}
                label="Quadro"
                onChange={(e) => handleChange(e, 'ownerId')}
              >
                {
                  users.length ? users.map(user => (
                    <MenuItem key={user.id} value={user.id}>{user.Users.name}</MenuItem>
                  ))
                    : null
                }
              </Select>
            </FormControl>

            <button type="submit" className={styles.submitBtn}><p>{buttonText}</p></button>
          </form>
        </div>
      </div>
    </>
  )
}
export default TaskForm;