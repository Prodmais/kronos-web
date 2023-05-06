import { Outlet, useNavigate } from "react-router";
import Menu from "../../components/Menu";

const Main = () => {

    return (
        <>
            <Menu />
            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}

export default Main;
