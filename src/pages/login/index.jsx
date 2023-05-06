import { useState } from 'react';
import styles from './login.module.css';
import logo from '../../assets/logo_cronos.png';


//importações do material ui

import * as React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router';

const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  function handleEmail(event) {
    setUser({...user, email: event.target.value});
  }

  function handlePassword(event) {
    setUser({...user, password: event.target.value});
  }

  function handleSubmit() {
    navigate('/')
  }

  return (
    <section className={styles.login_section}>
      <div className={styles.center}>
        <div className={styles.logo}>
          <img src={logo} alt="logoCronos" className={styles.logoCronos}/>
        </div>
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="email">Email
              <div className={styles.containerInput}>
                <EmailIcon className={styles.iconInput} />
                <input onChange={handleEmail} type="email" name='email' id='email' value={user.email} placeholder='seuemail@email.com' required/>
              </div>
            </label>
          
            <label htmlFor="password">Password
              <div className={styles.containerInput}>
              <LockIcon className={styles.iconInput} />
                <input onChange={handlePassword} type="password" name="password" id="password" value={user.password} placeholder='Digite sua senha' required/>
              </div>
            </label>
          
          <div className={styles.ForgetPassword}>
            <a href="/forgetpassword">Esqueceu sua senha?</a>
          </div>
          <div>
            <button type='submit' className={styles.buttonLogin}>Login</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login;