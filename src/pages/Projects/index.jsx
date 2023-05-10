import { Outlet } from 'react-router';
import styles from './projects.module.css';

const Projects = () => {
    return (
        <section className={styles.projects_section}>
            <Outlet></Outlet>
        </section>
    )
};

export default Projects;