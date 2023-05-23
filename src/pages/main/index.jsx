import { Outlet, useNavigate } from "react-router";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import styles from './main.module.css';
import { useDispatch, useSelector } from "react-redux";
import { setLoadingSystem } from "../../store/slices/system.slice";
import { useEffect } from "react";
import { Box, CircularProgress, Dialog, DialogContent } from "@mui/material";

const Main = () => {

    const systemState = useSelector(state => state.system);
    const authState = useSelector(state => state.auth);
    const dispatch = useDispatch();
  
    useEffect(() => {

        // console.log(systemState);

      if (authState.isAuthenticated && systemState.loadingSystem) {
        setTimeout(() => {
            dispatch(setLoadingSystem(false));
        }, 1000)
      }
    }, [authState])

    return (
        <>
            <Dialog open={systemState.loadingSystem}>
                <DialogContent
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '.choice': {
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            marginTop: '25px',
                        }
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        background: 'transparent',
                    }}>
                        <CircularProgress sx={{
                            color: 'var(--main-color)',
                        }} />
                    </Box>
                </DialogContent>
            </Dialog>

            {
                !systemState.loadingSystem &&
                <main className={styles.layout_container}>
                    <Menu id={2} />
                    <section className={styles.layout_section} >
                        <Navbar />
                        <Outlet></Outlet>
                    </section>
                </main>
            }
        </>
    )
}

export default Main;
