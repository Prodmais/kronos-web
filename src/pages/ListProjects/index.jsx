import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import styles from './list-projects.module.css';
import Button from "@mui/material/Button";
import NoProjects from "../NoProjects";
import { Box, CircularProgress } from "@mui/material";


const ListProjects = () => {

    const [projects, setProjects] = useState([1, 2, 3, 4, 5, 6, 7]);
    // const [projects, setProjects] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, [])

    const navigate = useNavigate();

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
                }} onClick={() => navigate('criar')} variant="contained">
                    <AddIcon />
                    Novo projeto
                </Button>
            </header>

            

            { isLoading ? 
                <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%', 
                    height: '100%' ,
                    background: 'transparent', 
                }}>
                    <CircularProgress sx={{
                        color: '#FFF',
                    }}/>
                </Box> 
                : projects.length ? 
                <div className={styles.list_container}>
                    <ul>
                        { projects.map(project => (
                            <li className={styles.card_list} key={project} >
                                <button onClick={() => navigate('/quadros')}>
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
                </div> :  <NoProjects />

            }
            
            
        </>

    )
}

export default ListProjects;