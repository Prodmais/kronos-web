import { Button, TextField } from '@mui/material';
import styles from './form-project.module.css';

export default function FormProject() {
    return (
        <form className={styles.form_project_container}>
            <legend className={styles.form_project_title}>Criação de Projeto</legend>

            <div className={styles.form_project_box}>
                <div className={styles.form_project_input}>
                    <TextField sx={
                        {
                            width: '100%'
                        }
                    } id="outlined-disabled" placeholder='Nome do Projeto' />
                </div>

                <div className={styles.form_project_input}>
                    <TextField sx={{ background: 'white', width: '100%' }} id="outlined-multiline-static" placeholder='Descrição' multiline rows={8} />
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

                <Button sx={
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