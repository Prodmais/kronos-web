import Box from '@mui/material/Box';
import styles from './members.module.css';
import { useEffect, useState } from 'react';

const Members = () => {

    const [members, setMembers] = useState([]);

    useEffect(() => {

        const membersMock = [
            {
                name: 'João Wezen',
                role: 'QA',
                quality: 'Bom  gestor'
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
    }, []);


    return (
        <section className={styles.members_section}>

            <div className={styles.members_content}>
                <div className={styles.title}>
                    <h1>Membros</h1>
                </div>

                { members.length ? members.map((member) => (
                    <Box
                        key={member.name}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            minHeight: '100px',
                            maxHeight: '120px',
                            height: 'auto',
                            padding: '10px',
                            backgroundColor: '#043434',
                            borderRadius: '8px',
                            // border: '1px solid red',
                            // '.className': {}, if i want to style some class
                            'p': {
                                color: '#FFF'
                            }
                        }}
                    >
                        <div className={styles.image_container}>
                            <span>
                                { member.name[0] }
                                { member.name.split(' ')[1][0] }
                            </span>
                        </div>
                        <div className={styles.member_info}>
                            <p>Nome: {member.name}</p>
                            <p>Função: {member.role}</p>
                            <p>Uma Qualidade: {member.quality}</p>
                        </div>
                    </Box>
                )
                ) : null}
            </div>
        </section>
    );
}

export default Members;