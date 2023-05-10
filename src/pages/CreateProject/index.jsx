
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import styles from './create-project.module.css';

function CreateProject() {
    return (
        <section className={styles.create_project_section}>
            <div className={styles.container_pg_criar_projeto}>
                <div className={styles.div_perfil}>
                    <div className={styles.perfil_do_usuario}>
                        <PersonIcon />
                    </div>
                </div>

                <div className={styles.div_principal_criar_projeto}>
                    <h1 className={styles.titulo_principal_criar_projeto}>Crie Seu projeto</h1>
                </div>
                <div className={styles.form_criar_projeto}>
                    <div className={styles.form_criar_projeto_col_01}>
                        <div className={styles.form_titulo_do_projeto}>
                            <h1 className={styles.titulo_quadro_projetos}>Criar Projeto</h1>
                        </div>
                        <div className={styles.form_name_projeto}>
                            {/* <TextField sx={{ background: 'white' }} label="Invoice’s Name" variant="outlined" />
                            <TextField sx={{ outline: '0' }} disabled id="outlined-disabled" label="Item #1" /> */}

                            <Button variant="text">Adicionar mais itens</Button>
                        </div>
                        <TextField sx={{ background: 'white' }} id="outlined-multiline-static" label="Escopo de trabalho" multiline rows={8} />
                        <div className={styles.form_opcoes}>
                            {/* <TextField sx={{ background: 'white', margin: '5px' }} label="Start date" variant="outlined" />
                            <TextField sx={{ background: 'white', margin: '5px' }} label="Start end" variant="outlined" />
                            <TextField sx={{ background: 'white', margin: '5px' }} label="Price" variant="outlined" /> */}
                        </div>
                    </div>
                    <div className={styles.form_criar_projeto_col_02}>
                        <div className={styles.form_titulo_do_projeto}>
                            <h1 className={styles.titulo_quadro_projetos}>Adicionar membros</h1>
                        </div>
                        <div className={styles.form_input_do_projeto}>
                            {/* <TextField sx={{ background: 'white', margin: '5px' }} id="outlined-basic" label="Nome do participante" variant="outlined" />
                            <TextField sx={{ background: 'white', margin: '5px' }} id="outlined-basic" label="email" variant="outlined" />
                            <TextField sx={{ background: 'white', margin: '5px' }} id="outlined-basic" label="Registration Number (optional)" variant="outlined" />
                            <TextField sx={{ background: 'white', margin: '5px' }} id="outlined-basic" label="Tax ID" variant="outlined" /> */}
                        </div>
                        <div className={styles.pg_buttom_projeto}>
                            <Button sx={{ width: '25ch', background: '#FFFFFF' }} variant="text">Voltar</Button>
                            <Button sx={{ width: '25ch', background: '#058B8A' }} variant="text">Próximo</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CreateProject;
