import styles from './create-user.module.css';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Lock from '@mui/icons-material/Lock';
import { Button } from '@mui/material';
import { useState } from 'react';

export default function CreateUser() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState(new Date());
    const [category, setCategory] = useState('');

    return (
        <div className={styles.background_signup}>
            <form>
                <legend className={styles.signup_form_title}>CADASTRE-SE AQUI</legend>
                {/* Input Nome */}

                <div className={styles.background_signup_container}>
                    <AccountCircle className={styles.background_signup_icon} />
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} name='name' className={styles.background_signup_input} placeholder='Nome' />
                </div>

                {/* Input SobreNome */}
                <div className={styles.background_signup_container}>
                    <AccountCircle className={styles.background_signup_icon} />
                    <input type='text' value={lastName} onChange={(e)=> setLastName(e.target.value)} name='lastName'  className={styles.background_signup_input} placeholder='Sobrenome' />
                </div>

                {/* Input Email */}
                <div className={styles.background_signup_container}>
                    <EmailIcon className={styles.background_signup_icon} />
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} name='email' className={styles.background_signup_input} placeholder='Email' />
                </div>

                {/* Input Password */}
                <div className={styles.background_signup_container}>
                    <Lock className={styles.background_signup_icon} />
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}  name="password" className={styles.background_signup_input} placeholder='Password' />
                </div>

                {/* Input Data Nascimento */}
                <label className={styles.background_signup_label}>Data de nascimento:</label>
                <div className={styles.background_signup_container}>
                    <input type='date' value={date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2)} onChange={(e) => {
                        const newDate = new Date(e.target.value);
                        newDate.setDate(Number(e.target.value.slice(-2)));
                        setDate(newDate);
                        }} name="birthday" className={styles.background_signup_input} placeholder='25/05/2023'/>
                </div>

                {/* Input Categoria */}
                <label className={styles.background_signup_label}>Categoria:</label>
                <div className={styles.background_signup_group_radio}>
                    <div className={styles.background_signup_container_radio}>
                        <label className={styles.background_signup_label_radio} for="school">
                            Escola
                        </label>
                        <input type="radio" id="school" name="category" className={styles.background_signup_radio} value={true} onClick={()=> setCategory('school')}/>
                    </div>

                    <div className={styles.background_signup_container_radio}>
                        <label name="category" className={styles.background_signup_label_radio} for="company">
                            Empresa
                        </label>
                        <input type="radio" id="company" name="category" className={styles.background_signup_radio} onClick={()=> setCategory('company')}/>
                    </div>

                    <div className={styles.background_signup_container_radio}>
                        <label className={styles.background_signup_label_radio} for="other">
                            Outro
                        </label>
                        <input type="radio" name="category" id="other" className={styles.background_signup_radio} onClick={()=> setCategory('other')}/>
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