import { Add } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, CircularProgress, Dialog, DialogContent } from '@mui/material';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import BoardCard from "../../components/Card";
import styles from "./boards.module.css";
import { BoardsService } from '../../services/boards-service';
import TaskForm from '../../components/TaskForm';
import { ProjectsService } from '../../services/projects-service';
import { TasksService } from '../../services/task-service';
import { enqueueSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { setProjectNameNavbar } from '../../store/slices/navbar.slice';

const Boards = () => {

  const boardsService = new BoardsService();
  const projectsService = new ProjectsService();
  const tasksService = new TasksService();
  const [boards, setBoards] = useState([]);
  const [filterBoards, setFilterBoards] = useState([]);
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openCreateTask, setOpenCreateTask] = useState(false);
  const [openEditTask, setOpenEditTask] = useState(false);
  const [currentEditableTask, setCurrentEditableTask] = useState('');
  const [openDeleteTask, setOpenDeleteTask] = useState(false);
  const [currentDeleteTaskId, setCurrentDeleteTaskId] = useState(null);

  const [isLoadingActionTask, setIsLoadingActionTask] = useState(false);
  const [reloadBoards, setReloadBoards] = useState(false);

  const dispatch = useDispatch();

  const { id } = useParams();

  function search(value) {
    const boardsFilteds = boards.map(board => {
      const FilterBoard = {
        ...board,
        Tasks: board.Tasks.filter(task => task.name.toLowerCase().includes(value.toLowerCase()))
      }

      return FilterBoard;
    })

    setFilterBoards([...boardsFilteds]);

  }

  useEffect(() => {

    Promise.all([
      boardsService.getAllboardsByProject(id)
        .then((boards) => {
          setBoards(boards);
          setFilterBoards(boards);
        }),
      projectsService.getOneProject(id)
        .then(project => {
          setProject(project);
          dispatch(setProjectNameNavbar(project.title))
          console.log(project)
        })
    ]).then(() => {
      setIsLoading(false);
    })

  }, [reloadBoards]);

  function createTask(task) {

    tasksService.createTaskByProject(task)
      .then(res => {
        setOpenCreateTask(false);
        enqueueSnackbar("Tarefa criada com sucesso!", {
          variant: 'success'
        })
        setReloadBoards(!reloadBoards);
      })
      .catch(error => {
        console.error(error)
        enqueueSnackbar("Houve um error ao criar a tarefa!", {
          variant: 'error'
        });
        setOpenCreateTask(false);
        setReloadBoards(!reloadBoards);
      })
  }

  function handleEditTask(task) {
    setCurrentEditableTask(task);
    setOpenEditTask(!openEditTask);
  }

  function editTask(task) {

    let resultMessage = {
      message: 'Tarefa editada com sucesso!',
      variant: 'success'
    }

    setIsLoadingActionTask(true);

    tasksService.editTaskById(task)
      .then(res => { })
      .catch(error => {
        console.error(error);
        resultMessage = {
          message: 'Houve um error ao editar a tarefa!',
          variant: 'error'
        }

      })
      .finally(() => {
        setTimeout(() => setIsLoadingActionTask(false), 500);
        setOpenEditTask(!openEditTask);
        enqueueSnackbar(resultMessage.message, {
          variant: resultMessage.variant
        });
        setReloadBoards(!reloadBoards);
      })
  }

  function deleteTask(task) {

    let resultMessage = {
      message: 'Tarefa deletada com sucesso!',
      variant: 'success'
    }
    setIsLoadingActionTask(true);
    tasksService.deleteTaskById(task.id)
      .then((res) => { })
      .catch(error => {
        resultMessage = {
          message: 'Houve um error ao deletar a tarefa!',
          variant: 'error'
        }
        console.error(error);
      })
      .finally(() => {
        enqueueSnackbar(resultMessage.message, {
          variant: resultMessage.variant
        });
        setReloadBoards(!reloadBoards);
        setOpenDeleteTask(!openDeleteTask);
        setTimeout(() => setIsLoadingActionTask(false), 500)
      })
  }

  function handleDeleteTask(task) {
    setOpenDeleteTask(true);
    setCurrentDeleteTaskId(task);
  }

  return (

    <section className={styles.boards_section}>

      {
        isLoading ? <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}>
          <CircularProgress sx={{
            color: '#FFF',
          }} />
        </Box>
          :
          <>

            <Dialog onClose={() => setOpenDeleteTask(!openDeleteTask)} open={openDeleteTask}>
              <DialogContent
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '.choice': {
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginTop: '25px',
                  }
                }}
              >
                {
                  isLoadingActionTask ?
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                      background: 'transparent',
                    }}>
                      <CircularProgress sx={{
                        color: 'var(--main-color)',
                      }} />
                    </Box>
                    : <div>
                      <p>Você tem certeza que deseja excluir está tarefa?</p>
                      <div className='choice'>
                        <Button onClick={() => deleteTask(currentDeleteTaskId)} >Sim</Button>
                        <Button onClick={() => setOpenDeleteTask(!openDeleteTask)}>Cancelar</Button>
                      </div>
                    </div>
                }
              </DialogContent>
            </Dialog>

            <Dialog onClose={() => setOpenEditTask(!openEditTask)} open={openEditTask}>
              <DialogContent
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {
                  isLoadingActionTask ?
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                      background: 'transparent',
                    }}>
                      <CircularProgress sx={{
                        color: 'var(--main-color)',
                      }} />
                    </Box> : <TaskForm
                      title='EDITE SUA TAREFA'
                      buttonText='Editar tarefa'
                      boards={boards}
                      users={project.UsersIntegrated}
                      handleSubmit={editTask}
                      editableTask={currentEditableTask}
                    />
                }


              </DialogContent>
            </Dialog>

            <Dialog onClose={() => setOpenCreateTask(!openCreateTask)} open={openCreateTask}>
              <DialogContent
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TaskForm
                  boards={boards}
                  users={project.UsersIntegrated}
                  handleSubmit={createTask}
                />
              </DialogContent>
            </Dialog>

            <header>
              <div className={styles.sort_options}>
                <div className={styles.input_search}>
                  <input onChange={(e) => search(e.target.value)} placeholder='Pesquisar por atividade' type="text" />
                  <SearchIcon />
                </div>

                <Button
                  onClick={() => setOpenCreateTask(!openCreateTask)}
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
                filterBoards.length ? filterBoards.map(board => (
                  <BoardCard
                    openDeleteTask={(task) => handleDeleteTask(task)} // Em breve ajeitar todos os props-drilling
                    openEditTask={(task) => handleEditTask(task)} // Em breve ajeitar todos os props-drilling
                    key={board.id}
                    title={board.name}
                    tasks={board.Tasks}
                  />
                )) : null
              }
            </div>

          </>

      }

    </section>

  )
}

export default Boards;