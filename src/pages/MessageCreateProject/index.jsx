
import AddIcon from '@mui/icons-material/Add';

import createProjectImage from '../../assets/create-project.svg';
import styles from './menssege-create-project.module.css';
import { useNavigate } from 'react-router';

function MessageCreateProject() {

  const navigate = useNavigate();

  return (
    <section className={styles.message_section}>
      <div className={styles.image_project_container}>
        <img src={createProjectImage} alt="Imagem demonstrativa" />
      </div>

      <div className={styles.message_container}>
        <div className={styles.conteudo_mensagem_projeto}>
          <div className={styles.titulo_mensagem}>
            <p className={styles.paragraph_mensagem_projeto} >Bem-vindo ao Cronos System! </p>
            <p className={styles.paragraph_mensagem_projeto} >Deseja criar seu primeiro projeto?</p>
          </div>
          <div className={styles.botao_mensagem}>
            <button className={styles.botao_criar_projeto} type="button" onClick={() => navigate('/projetos/criar')} value="cadastrar-projeto"> <AddIcon />Criar Projeto</button>
            <button className={styles.botao_criar_projeto_depois} type="button" onClick={() => navigate('/inicio')} value="cadastrar-projeto-depois">Cadastrar Mais Tarde</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default MessageCreateProject;
