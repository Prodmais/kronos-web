import Box from '@mui/material/Box';
import styles from './members.module.css';
import { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Members = () => {

    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
            maxHeight: '90px',
            padding: 0,
            height: '100%',
            fontSize: '1.25em'
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
          variant: 'rounded',
        };
      }


    useEffect(() => {

        const membersMock = [
            {
                name: 'João Wezen',
                role: 'QA',
                quality: 'Ótimo gestor'
            },
            {
                name: 'Luiz Victor',
                role: 'Dev Fullstack Jr',
                quality: 'Ótimo desenvolvedor'
            },
            {
                name: 'Luís Eduardo',
                role: 'Dev Java Jr',
                quality: 'Ótimo desenvolvedor'
            },
            {
                name: 'Affonso Ruiz',
                role: 'Dev Back-end Jr',
                quality: 'Ótimo desenvolvedor'
            },
        ]

        setMembers(membersMock);

        setTimeout(() => setIsLoading(false), 1000);

    }, []);


    return (
        <section className={styles.members_section}>

            <header className={styles.title}>
                <h1>Membros</h1>
            </header>

            <div className={styles.members_content}>
                

                { isLoading ? 
                    <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%', 
                        height: '50vh' ,
                        background: 'transparent', 
                    }}>
                        <CircularProgress sx={{
                            color: '#FFF',
                        }}/>
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
                            <Avatar {...stringAvatar(member.name)}/>
                        </div>
                        <div className={styles.member_info}>
                            <p>Nome: <span>{member.name}</span></p>
                            <p>Função: <span>{member.role}</span></p>
                            <p>Uma Qualidade: <span>{member.quality}</span></p>
                        </div>
                    </Box>
                )
                ) : null}
            </div>
        </section>
    );
}

export default Members;