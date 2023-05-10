import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import styles from './list-projects.module.css';
import Button from "@mui/material/Button";
import NoProjects from "../NoProjects";


const ListProjects = () => {

    const [projects, setProjects] = useState([1,2,3,4,5,6,7]);

    return (
        <>
            <header>
                <h1>Projetos</h1>

                <Button sx={{
                    backgroundColor: '#002D2B',

                    fontSize: '0.6em',
                    gap: '0.8em',
                    '&:hover': {
                        backgroundColor: '#002D2B',
                    }
                }} variant="contained">
                    <AddIcon />
                    Novo projeto
                </Button>
            </header>

            { projects.length ? 
                <div className={styles.list_container}>
                    <ul>
                        { projects.map(project => (
                            <li className={styles.card_list} key={project} >
                                <button>
                                    <div className={styles.informations}>
                                        <h2>Cronos System</h2>
                                        <p className={styles.description} >Descrição do projeto</p>
                                    </div>
                                    <p className={styles.last_update}>
                                        <span>Útima atualização</span>
                                        <span>08/05/2002</span>
                                    </p>
                                </button>
                            </li>
                        )) }
                    </ul>
                </div> :
                <NoProjects />

            }
            
            
        </>

    )
}

export default ListProjects;