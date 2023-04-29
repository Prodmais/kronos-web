
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './createProject.css';

function CreateProjetc() {
    return (
        <div className='container-pg-criar-projeto'>
            <div className='div-perfil'>
                <div className='perfil-do-usuario'>
                    <PersonIcon />
                </div>
            </div>

            <div className='div-principal-criar-projeto'>
                <h1 className='titulo-principal-criar-projeto'>Crie Seu projeto</h1>
            </div>
            <div className='form-criar-projeto'>
                <div className='form-criar-projeto-col-01'>
                    <div className='form-titulo-do-projeto'>
                        <h1 className='titulo-quadro-projetos'>Criar Projeto</h1>
                    </div>
                    <div className='form-name-projeto'>
                        <TextField sx={{ background: 'white'}} label="Invoice’s Name" variant="outlined" />
                        <TextField sx={{outline: '0'}} disabled id="outlined-disabled" label="Item #1" />
                        <Button variant="text">Add more items</Button>
                    </div>
                    <TextField sx={{ background: 'white' }} id="outlined-multiline-static" label="Scope of work" multiline rows={8} />
                    <div className='form-opcoes'>
                        <TextField sx={{ background: 'white', margin: '5px' }} label="Start date" variant="outlined" />
                        <TextField sx={{ background: 'white', margin: '5px' }} label="Start end" variant="outlined" />
                        <TextField sx={{ background: 'white', margin: '5px' }} label="Price" variant="outlined" />
                    </div>
                </div>
                <div className='form-criar-projeto-col-02'>
                    <div className='form-titulo-do-projeto'>
                        <h1 className='titulo-quadro-projetos'>Adicionar membros </h1>
                    </div>
                    <div className='form-input-do-projeto'>
                        <TextField sx={{ background: 'white', margin: '5px' }} id="outlined-basic" label="Nome do participante" variant="outlined" />
                        <TextField sx={{ background: 'white', margin: '5px' }} id="outlined-basic" label="email" variant="outlined" />
                        <TextField sx={{ background: 'white', margin: '5px' }} id="outlined-basic" label="Registration Number (optional)" variant="outlined" />
                        <TextField sx={{ background: 'white', margin: '5px' }} id="outlined-basic" label="Tax ID" variant="outlined" />
                    </div>
                    <div className='pg-buttom-projeto'>
                        <Button sx={{ width: '25ch', background: '#FFFFFF' }} variant="text">Back</Button>
                        <Button sx={{ width: '25ch', background: '#058B8A' }} variant="text">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateProjetc;
