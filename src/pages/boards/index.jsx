// import styles from "../../components/cardO/card-o.module.css";
import { Add } from '@mui/icons-material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useEffect, useState } from "react";
import BoardCard from "../../components/Card";
import styles from "./boards.module.css";

const Boards = () => {

  const [tasks, setTasks] = useState({
    do: [
      {
        title: "Estudar Lógica de programação",
        description: "Olhar os vídeos do Curso em vídeo",
        createdAt: new Date()
      },
      {
        title: "Estudar POO",
        description: "Olhar os vídeos do Curso em vídeo",
        createdAt: new Date()
      },
      {
        title: "Estudar JavaScript",
        description: "Olhar os vídeos do Curso em vídeo",
        createdAt: new Date()
      },
      {
        title: "Estudar Java",
        description: "Olhar os vídeos do Curso em vídeo",
        createdAt: new Date()
      }
    ],
    doing: [

      {
        title: "Conferir o novo desafio 🚀 ",
        description: "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível",
        createdAt: new Date()
      }

    ],
    done: [

      {
        title: "#boraCodar uma página de login 👨‍💻",
        description: "Novo desafio do #boraCodar da Rocketseat",
        createdAt: new Date()
      }

    ]

  });

  function search(value) {

  }

  useEffect(() => {
    console.log(tasks);
  }, [])


  return (

    <section className={styles.boards_section}>

      <header>
        <div className={styles.sort_options}>
          <div className={styles.input_search}>
            <input placeholder='Pesquisar por atividade' type="text" />
            <SearchIcon />
          </div>
          <Button sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: '#FFF',
            padding: '10px !important',
            maxWidth: '130px',
            width: '100%',
          }}>
            <FilterListIcon />
            Filtro
          </Button>
        </div>

        <Button
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#FFF',
            color: 'var(--primary-color)'
          }}
        >
          <Add />
          Criar tarefa
        </Button>

      </header>

      <div className={styles.boards_container}>
        <BoardCard title={'Fazendo'} tasks={tasks.do} />
        <BoardCard title={'A fazer'} tasks={tasks.doing} />
        <BoardCard title={'Feito'} tasks={tasks.done} />
        <BoardCard title={'Feito'} tasks={tasks.done} />
        <BoardCard title={'Feito'} tasks={tasks.done} />
        <BoardCard title={'Feito'} tasks={tasks.done} />
        <BoardCard title={'Feito'} tasks={tasks.done} />
        <BoardCard title={'Feito'} tasks={tasks.done} />
        <BoardCard title={'Feito'} tasks={tasks.done} />
        <BoardCard title={'Feito'} tasks={tasks.done} />
        <BoardCard title={'Feito'} tasks={tasks.done} />

      </div>

    </section>

    // <div className={styles.container}>
    //   <header>
    //     <ButtonsNav />
    //     <Cartoes />
    //     <CartoesDois />
    //     <CartoesTres />
    //   </header>
    // </div>
  )
}

export default Boards;