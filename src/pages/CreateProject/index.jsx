import styles from './create-project.module.css';
import ProjectForm from '../../components/ProjectForm';
import { useNavigate } from 'react-router';

function CreateProject() {

    const navigate = useNavigate();

    return (
        <section className={styles.create_project_section}>

            <ProjectForm onBackAction={() => navigate('/inicio')} onNextAction={() => navigate('/projetos')}/>

        </section>
    )
}
export default CreateProject;
