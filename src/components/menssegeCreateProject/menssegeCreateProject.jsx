
import AddIcon from '@mui/icons-material/Add';
import './menssegeCreateProject.css';
function MenssageCreateProjetc() {
  return (
    <div className="mensagem-container">
      <div className="conteudo-mensagem-projeto">
        <div className="titulo-mensagem">
          <p className="paragraph-mensagem-projeto" >Bem-vindo ao Cronos System! </p>
          <p className="paragraph-mensagem-projeto" >Deseja criar seu primeiro projeto?</p>
        </div>
        <div className="botao-mensagem">
          <button className="botao-criar-projeto" type="button" value="cadastrar-projeto"> <AddIcon />Criar Projeto</button>
          <button className="botao-criar-projeto-depois" type="button" value="cadastrar-projeto-depois">Cadastrar Mais Tarde</button>
        </div>
      </div>
    </div>
  )
}
export default MenssageCreateProjetc;
