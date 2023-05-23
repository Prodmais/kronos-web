import { useState } from 'react';
import loginSVG from '../../assets/login.svg';
import logo from '../../assets/logo_cronos.png';
import styles from './login.module.css';

//importações do material ui
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Box, CircularProgress } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthenticateService } from '../../services/authenticate-service';
import { useDispatch } from 'react-redux';
import { setUserAuthentication } from '../../store/slices/auth.slice';
import { UserService } from '../../services/user-service';
import { setLoadingSystem } from '../../store/slices/system.slice';

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const authenticateService = new AuthenticateService();
  const userService = new UserService();


  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleEmail(event) {
    setUser({ ...user, email: event.target.value });
  }

  function handlePassword(event) {
    setUser({ ...user, password: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    dispatch(setLoadingSystem(true))
    setIsLoading(true);
    console.log('login')

    authenticateService.authentication({
      email: user.email,
      password: user.password
    })
      .then(response => {
        authenticateService.setToken({ token: response.data.token });

        userService.getUser()
          .then((user) => {

            console.log(user);

            dispatch(setUserAuthentication({
              user: {
                id: user.id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone
              },
              isAuthenticated: true,

              token: authenticateService.getToken()
            }))

          })
          .catch(error => {
            enqueueSnackbar('Houve um error ao obter informações do usuário', {
              variant: 'error'
            });
          })
          .finally(() => {
            setTimeout(() => {
              dispatch(setLoadingSystem(false));
            }, 1000)
          })

        navigate('/inicio');

      })
      .catch(error => {

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