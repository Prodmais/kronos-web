import styles from './reset-password.module.css';

function ResetPassword(){
  return (
    <div className={styles.container_reset_senha}>
      <div className={styles.div_titulo_reset_senha}>
       <h1 className={styles.titulo_reset_senha}>Recuperar sua senha</h1>
       <p  className={styles.paragraph_reset_senha}>Esqueceu seua senha? Digite seu e-mail que enviaremos um link para definir uma nova senha</p>
      </div>
      <div className={styles.div_input_email_reset_senha}>
        <div className={styles.div_input_email}>
         <input className={styles.input_email} type="text" name="nome" placeholder='Digite seu e-mail'/>
        </div>
        <div className={styles.div_botao_enviar_senha}>
        <input className={styles.botao_enviar_senha} type="submit" value="Recuperar"/>
         </div>
      </div>
    </div>
  )
}
export default ResetPassword;