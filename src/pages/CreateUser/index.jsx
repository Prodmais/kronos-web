import styles from './create-user.module.css';

export default function CreateUser(){
    return (
    <div className={styles.background_signup}>
        <form>
            <legend className={styles.signup_form_title}>Cadastre-se aqui</legend>
        </form>
    </div>
    );
}