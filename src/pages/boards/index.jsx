// import styles from "../../components/cardO/card-o.module.css";
import { Add } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Dialog, DialogContent } from '@mui/material';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import BoardCard from "../../components/Card";
import styles from "./boards.module.css";
import { BoardsService } from '../../services/boards-service';
import TaskForm from '../../components/TaskForm';

const Boards = () => {

  const boardsService = new BoardsService();
  const [boards, setBoards] = useState([]);
  const [open, setOpen] = useState(false);
  const { id } = useParams();

  function search(value) { }

  useEffect(() => {

    boardsService.getAllboardsByProject(id)
      .then((boards) => {
        setBoards(boards);
      });

    console.log(id)
  }, [])

  function handleFormTask() {
    setOpen(!open);
  }

  function handleSubmit() {

  }

  return (

    <section className={styles.boards_section}>

      <Dialog onClose={handleFormTask} open={open}>
        <DialogContent
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TaskForm />
        </DialogContent>
      </Dialog>

      <header>
        <div className={styles.sort_options}>
          <div className={styles.input_search}>
            <input placeholder='Pesquisar por atividade' type="text" />
            <SearchIcon />
          </div>

          <Button
            onClick={handleFormTask}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              paddingRight: '15px',
              backgroundColor: '#FFF',
              color: 'var(--primary-color)',
              '&:hover': {
                backgroundColor: '#CECECE',
              }
            }}
          >
            <Add />
            <span style={{
              paddingTop: '3px'
            }}>
              Criar tarefa
            </span>
          </Button>

        </div>



      </header>

      <div className={styles.boards_container}>
        {
          boards.length ? boards.map(board => (
            <BoardCard key={board.id} title={board.name} tasks={board.Tasks} />
          )) : null
        }
      </div>

    </section>

  )
}

export default Boards;