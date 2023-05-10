import { Outlet, useNavigate } from "react-router";
import Menu from "../../components/Menu";
import styles from './main.module.css';

const Main = () => {

    return (
        <main className={styles.layout_container}>
            <Menu id={2} />
            <section>
                <Outlet></Outlet>
            </section>
        </main>
    )
}

export default Main;
