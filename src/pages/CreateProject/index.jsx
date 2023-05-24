import styles from './create-project.module.css';
import ProjectForm from '../../components/ProjectForm';
import { useNavigate } from 'react-router';
import { Box, CircularProgress, Dialog, DialogContent } from '@mui/material';
import { useState } from 'react';

function CreateProject() {

    const navigate = useNavigate();
    const [loadingCreateProject, setLoadingCreateProject] = useState(false);

    return (
        <section className={styles.create_project_section}>
            <Dialog open={loadingCreateProject}>
                <DialogContent
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '.choice': {
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            marginTop: '25px',
                        }
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        background: 'transparent',
                    }}>
                        <CircularProgress sx={{
                            color: 'var(--main-color)',
                        }} />
                    </Box>
                </DialogContent>
            </Dialog>
            <ProjectForm onBackAction={() => navigate('/inicio')} onNextAction={() => navigate('/projetos')} setLoading={setLoadingCreateProject} />

        </section>
    )
}
export default CreateProject;
