import './resetSenha.css';
function ResetSenha(){
  return (
    <div className="container_reset_senha">
      <div className="div_titulo_reset_senha">
       <h1 className="titulo_reset_senha">Recuperar sua senha</h1>
       <p  className="paragraph_reset_senha">Esqueceu seua senha? Digite seu e-mail que enviaremos um link para definir uma nova senha</p>
      </div>
      <div className="div_input_email_reset_senha">
        <div className="div_input_email">
         <input className="input_email" type="text" name="nome" placeholder='Digite seu e-mail'/>
        </div>
        <div className="div_botao_enviar_senha">
        <input className="botao_enviar_senha" type="submit" value="Recuperar"/>
         </div>
      </div>
    </div>
  )
}
export default ResetSenha;
