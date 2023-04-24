import Box from '@mui/material/Box';
import './members.css';
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
        <section className='members-section'>
            { members.length ? members.map((member) => (
                <Box

                    key={member.name}
                    sx={{
                        width: '500px',
                        minHeight: '100px',
                        maxHeight: '120px',
                        height: 'auto',
                        padding: '10px',
                        backgroundColor: '#FFF',
                        borderRadius: '8px',
                        // '.className': {}, if i want to style some class
                        'p': {
                            color: '#756966'
                        }
                    }}
                >
                    <p>Nome: {member.name}</p>
                    <p>Função: {member.role}</p>
                    <p>Uma Qualidade: {member.quality}</p>
                </Box>
            )
            ) : null}
        </section>
    );
}

export default Members;