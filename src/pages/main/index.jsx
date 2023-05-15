import { Outlet, useNavigate } from "react-router";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import styles from './main.module.css';

const Main = () => {

    return (
        <main className={styles.layout_container}>
            <Menu id={2} />
            <section className={styles.layout_section} >
                <Navbar />
                <Outlet></Outlet>
            </section>
        </main>
    )
}

export default Main;
