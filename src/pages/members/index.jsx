import * as React from 'react';
import Box from '@mui/material/Box';
import styles from './members.module.css';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Avatar, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { ProjectsService } from '../../services/projects-service';
import { useSelector } from 'react-redux';
import { Flag, GroupAdd } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { enqueueSnackbar } from 'notistack';

const Members = () => {

    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const menuItems = useSelector((state) => state.menuItem.items)
    const projectService = new ProjectsService();

    const [open, setOpen] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [email, setEmail] = useState('');

    const emailRegex = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
                width: '100%',
                maxWidth: '80px',
                maxHeight: '80px',
                padding: 0,
                height: '100%',
                fontSize: '1.2em'
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
            variant: 'squared',
        };
    }


    useLayoutEffect(() => {
        if (menuItems.projectId) {
            projectService.getOneProject(menuItems.projectId).then(response => {
                const memberList = response.UsersIntegrated.map(userData => {
                    const data = {
                        name: userData.Users.name,
                        lastName: userData.Users.lastName,
                        email: userData.Users.email
                    };
                    return data;
                });

                setMembers([...memberList]);
            });
            setIsLoading(false);
        }
    }, []);

    const handleSendEmail = (event) => {
        event.preventDefault();
        setIsSubmit(true);

        if(!email || !emailRegex.test(email)) {
            return
        }

        if (menuItems.projectId) {
            projectService.sendInvite(menuItems.projectId, email).then(res =>
                enqueueSnackbar('Email enviado com sucesso!', { variant: 'success' })
            ).catch(err => enqueueSnackbar('Falha ao enviar o email!', { variant: 'error' }));
        } else {
            enqueueSnackbar('Falha ao enviar o email!', { variant: 'error' });
        }

        setEmail('');
        handleClose();
    };

    return (
        <section className={styles.members_section}>

            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={(e) => handleSendEmail(e)}>

                    <DialogTitle sx={
                        {
                            alignSelf: 'center'
                        }}>Convidar membro</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Será enviado um convite de participação no projeto para o email inserido
                        </DialogContentText>
                        <TextField
                            sx={
                                {
                                    '& .MuiFormHelperText-root': {
                                        display: !email && isSubmit ? 'initial' : 'none',
                                    }
                                }
                            }
                            autoFocus
                            margin="dense"
                            id="name"
                            placeholder="Email"
                            type="email"
                            fullWidth
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={!email && isSubmit}
                            helperText='Insira um email válido!'
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button type='submit'>Enviar</Button>
                    </DialogActions>
                </form>
            </Dialog>

            <header className={styles.title}>
                <h1>Membros</h1>

                <Button
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        paddingRight: '15px',
                        backgroundColor: '#FFF',
                        marginLeft: '20px',
                        minWidth: '190px',
                        color: 'var(--primary-color)',
                        '&:hover': {
                            backgroundColor: '#CECECE',
                        }
                    }}

                    onClick={() => handleClickOpen()}
                >
                    <GroupAdd />
                    <span style={{
                        paddingTop: '3px'
                    }}>
                        Convidar membro
                    </span>
                </Button>
            </header>

            <div className={styles.members_content}>


                {isLoading ?
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '50vh',
                        background: 'transparent',
                    }}>
                        <CircularProgress sx={{
                            color: '#FFF',
                        }} />
                    </Box> :
                    members.length ? members.map((member) => (
                        <Box
                            key={member.name}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                minHeight: '120px',
                                height: 'auto',
                                padding: '10px',
                                backgroundColor: '#043434',
                                borderRadius: '8px',
                                'p': {
                                    color: '#FFF'
                                }
                            }}
                        >
                            <div className={styles.image_container}>
                                <Avatar {...stringAvatar(`${member.name} ${member.lastName}`)} />
                            </div>
                            <div className={styles.member_info}>
                                <p>Nome: <span>{member.name}</span></p>
                                <p>Sobrenome: <span>{member.lastName}</span></p>
                                <p>E-mail: <span>{member.email}</span></p>
                            </div>
                        </Box>
                    )
                    ) : null}
            </div>
        </section>
    );
}

export default Members;