import styles from './no-projects.module.css';
import createProjectImage from '../../assets/create-project.svg';

const NoProjects = () => {
    return (
        <div className={styles.no_projects_container}>
            <div className={styles.image_container}>
                <img src={createProjectImage} alt="" />
                <p>Ops! Você ainda não tem projetos criados. <br /> Vamos criar? É super rápido! <br /> Basta clicar no botão indicado acima.</p>
            </div>
        </div>
    )
};

export default NoProjects;