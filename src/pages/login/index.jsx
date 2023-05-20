import { useEffect, useState } from 'react';
import loginSVG from '../../assets/login.svg';
import logo from '../../assets/logo_cronos.png';
import styles from './login.module.css';

//importações do material ui
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Alert, Box, CircularProgress, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthenticateService } from '../../services/authenticate-service';
import { enqueueSnackbar } from 'notistack';

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const [alert, setAlert] = useState({
    message: '',
    severity: 'success',
    horizontal: 'center',
    vertical: 'top',
  });

  const authenticateService = new AuthenticateService();

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const navigate = useNavigate();

  function addAlert({ message, severity, horizontal, vertical }) {

    setOpen(true);
    setAlert({
      message,
      severity: severity || 'success',
      horizontal: horizontal || 'center',
      vertical: vertical || 'top'
    });


  }

  function handleEmail(event) {
    setUser({ ...user, email: event.target.value });
  }

  function handlePassword(event) {
    setUser({ ...user, password: event.target.value });
  }

  function handleSubmit(event) {

    event.preventDefault();

    setIsLoading(true);

    authenticateService.authentication({
      email: user.email,
      password: user.password
    })
      .then(response => {
        console.log(response);

        authenticateService.setToken({ token: response.data.token });

        navigate('/inicio');

      })
      .catch(error => {

        // addAlert({
        //   message: 'Email ou senha inválidos',
        //   severity: 'error'
        // });

        // setTimeout(() => {
        //   setOpen(false);
        // }, 2000)

        enqueueSnackbar('Email ou senha inválidos', {
          variant: 'error'
        });

        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <section className={styles.login_section}>
      {/* 
      <Snackbar
        autoHideDuration={2000}
        open={open}
        anchorOrigin={{ vertical: alert.vertical, horizontal: alert.horizontal }}
      >
        <Alert severity={ alert.severity } sx={{ width: '100%' }}>
          { alert.message  }
        </Alert>
      </Snackbar> */}

      <div className={styles.center}>
        <div className={styles.logo}>
          <img src={logo} alt="logoCronos" className={styles.logoCronos} />
        </div>
        <div className={styles.loginSVG}>
          <img src={loginSVG} alt="Login SVG" />
        </div>
        <form onSubmit={handleSubmit}>

          <label htmlFor="email">Email
            <div className={styles.containerInput}>
              <EmailIcon className={styles.iconInput} />
              <input onChange={handleEmail} type="email" name='email' id='email' value={user.email} placeholder='seuemail@email.com' required />
            </div>
          </label>

          <label htmlFor="password">Password
            <div className={styles.containerInput}>
              <LockIcon className={styles.iconInput} />
              <input onChange={handlePassword} type="password" name="password" id="password" value={user.password} placeholder='Digite sua senha' required />
            </div>
          </label>

          <div className={styles.ForgetPassword}>
            <Link to="forgetpassword">Esqueceu sua senha?</Link>
          </div>

          <div>
            <button type='submit' className={styles.buttonLogin}>

              {isLoading ? <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                background: 'transparent',
              }}>
                <CircularProgress size={24} sx={{
                  color: '#FFF',
                }} />
              </Box> : <span>Login</span>}

            </button>
          </div>

          <div className={styles.CreateAcount }>
            <Link to="/signup">Ainda não possui conta? Cadastre-se aqui!</Link>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login;