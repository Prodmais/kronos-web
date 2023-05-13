import styles from './create-user.module.css';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Lock from '@mui/icons-material/Lock';
import { Button } from '@mui/material';

export default function CreateUser() {
    return (
        <div className={styles.background_signup}>
            <form>
                <legend className={styles.signup_form_title}>CADASTRE-SE AQUI</legend>
                {/* Input Nome */}

                <div className={styles.background_signup_container}>
                    <AccountCircle className={styles.background_signup_icon} />
                    <input type='text' className={styles.background_signup_input} placeholder='Nome' />
                </div>

                {/* Input SobreNome */}
                <div className={styles.background_signup_container}>
                    <AccountCircle className={styles.background_signup_icon} />
                    <input type='text' className={styles.background_signup_input} placeholder='Sobrenome' />
                </div>

                {/* Input Email */}
                <div className={styles.background_signup_container}>
                    <EmailIcon className={styles.background_signup_icon} />
                    <input type='email' className={styles.background_signup_input} placeholder='Email' />
                </div>

                {/* Input Password */}
                <div className={styles.background_signup_container}>
                    <Lock className={styles.background_signup_icon} />
                    <input type='password' className={styles.background_signup_input} placeholder='Password' />
                </div>

                {/* Input Data Nascimento */}
                <label className={styles.background_signup_label}>Data de nascimento:</label>
                <div className={styles.background_signup_container}>
                    <input type='date' className={styles.background_signup_input} />
                </div>

                {/* Input Categoria */}
                <label className={styles.background_signup_label}>Categoria:</label>
                <div className={styles.background_signup_group_radio}>
                    <div className={styles.background_signup_container_radio}>
                        <label className={styles.background_signup_label_radio} for="age2">
                            Escola
                        </label>
                        <input type="radio" className={styles.background_signup_radio} />
                    </div>

                    <div className={styles.background_signup_container_radio}>
                        <label className={styles.background_signup_label_radio} for="age2">
                            Empresa
                        </label>
                        <input type="radio" className={styles.background_signup_radio} />
                    </div>

                    <div className={styles.background_signup_container_radio}>
                        <label className={styles.background_signup_label_radio} for="age2">
                            Outro
                        </label>
                        <input type="radio" className={styles.background_signup_radio} />
                    </div>
                </div>

                <span className={styles.background_signup_span}>
                    As pessoas que usam nosso serviço podem ter carregado suas informações de contato no Medium. <a className={styles.background_signup_span_link} href='#'>Saiba mais.</a>
                </span>
                <span className={styles.background_signup_span}>
                    Ao clicar em Cadastre-se, você concorda com nossos <a className={styles.background_signup_span_link} href='#'>Termos, Política de Privacidade e Política de Cookies.</a> Você poderá receber notificações por SMS e cancelar isso quando quiser.
                </span>

                <Button sx={{
                    color: 'white',
                    borderColor: 'white',
                    margin: 2,
                    ":hover": {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255,255,255,0.2)'
                    }
                }}variant="outlined">Cadastre-se</Button>
            </form>
        </div>
    );
}