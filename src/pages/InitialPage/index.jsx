import styles from './initial-page.module.css';
import createProjectImage from '../../assets/create-project.svg';

const InitialPage = () => {
    return (
        <section className={styles.initial_page_section}>
            <div className={styles.image_container}>
                <img src={createProjectImage} alt="" />
                <h2>Bem vindo ao Cronos System. </h2>
                <p>
                    Cronos System é um sistema de gerenciamento de projetos completo, projetado para auxiliar as equipes a planejar, executar e acompanhar suas iniciativas com eficiência e produtividade. 
                    <br />
                    Com uma ampla gama de recursos e uma interface intuitiva, o Cronos System torna o gerenciamento de projetos uma tarefa simplificada e organizada.
                </p>
            </div>
        </section>
    )
}

export default InitialPage;