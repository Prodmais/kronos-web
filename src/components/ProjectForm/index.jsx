import { Button, TextField } from '@mui/material';
import styles from './form-project.module.css';
import { useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { ProjectsService } from '../../services/projects-service';

export default function ProjectForm({ onNextAction, onBackAction }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isSubmit, setSubmit] = useState(false);

    const projectService = new ProjectsService();

    const handleSubimt = (event) => {
        event.preventDefault();

        setSubmit(true);

        projectService.createProject({
            title: name,
            description: description,
        }).then(response => {
            enqueueSnackbar('Projeto criado com sucesso!', {
                variant: 'success'
            });
            onNextAction();
        }).catch(error => {
            enqueueSnackbar('Falha ao criar o projeto!', {
                variant: 'error'
            });
        })
    }

    return (
        <form className={styles.form_project_container} onSubmit={(e) => handleSubimt(e)}>
            <legend className={styles.form_project_title}>Criação de Projeto</legend>

            <div className={styles.form_project_box}>
                <div className={styles.form_project_input}>
                    <TextField sx={
                        {
                            width: '100%',
                            '& .MuiFormHelperText-root': {
                                display: !name && isSubmit ? 'initial' : 'none',
                            }
                        }
                    }
                        inputProps={
                            {
                                style: {
                                    backgroundColor: '#FFFFFF'
                                }
                            }
                        }
                        id="outlined-disabled outlined-error-helper-text" placeholder='Nome do Projeto' value={name} onChange={(e) => setName(e.target.value)}
                        helperText="Preencha o campo Nome do Projeto!" error={!name && isSubmit} />
                </div>

                <div className={styles.form_project_input}>
                    <TextField sx={{ backgroundColor: "#FFFFFF", width: '100%' }} id="outlined-multiline-static"
                        placeholder='Descrição' multiline rows={8}
                        value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
            </div>

            <div className={styles.form_project_buttons}>

                <Button type='button' sx={
                    {
                        width: '100%',
                        maxWidth: 120,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 6,
                        color: '#85B0B0',
                        ":hover": {
                            borderColor: 'white',
                            backgroundColor: 'rgba(255,255,255,0.2)'
                        }
                    }
                } variant="contained" onClick={() => onBackAction() }>Voltar</Button>

                <Button type='submit' sx={
                    {
                        width: '100%',
                        maxWidth: 120,
                        backgroundColor: '#058B8A4D',
                        borderRadius: 6,
                        padding: 2,
                        ":hover": {
                            borderColor: 'white',
                            backgroundColor: 'rgba(255,255,255,0.2)'
                        }
                    }
                } variant="contained">Criar</Button>
            </div>
        </form>
    );
}