import { Button, TextField } from '@mui/material';
import styles from './form-project.module.css';
import { useState } from 'react';

export default function FormProject() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isSubmit, setSubmit] = useState(false);

    const handleSubimt = (event) => {
        event.preventDefault();

        setSubmit(true);
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

                <Button sx={
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
                } variant="contained">Voltar</Button>

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