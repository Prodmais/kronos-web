import styles from './menu.module.css';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import DescriptionIcon from '@mui/icons-material/Description';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import { useState } from 'react';

const Menu = ({ id }) => {

    const [toggleMenu, setToggleMenu] = useState(true);

    function handleToggleMenu() {
        setToggleMenu(!toggleMenu);
    }

    // console.log(id);

    return (
        <aside className={styles.menu_aside}>
            <ul className={ toggleMenu ? styles.open_menu : '' } >

                <li>
                    <button className={ toggleMenu ? styles.flip_x_1 : '' } onClick={handleToggleMenu}>
                        <KeyboardDoubleArrowRightIcon />
                    </button>
                </li>

                <li>
                    <button>
                        <DescriptionIcon />
                        Página inicial
                    </button>
                </li>

                <li>
                    <button>
                        <DashboardIcon />
                        Quadros
                    </button>
                </li>

                <li>
                    <button>
                        <GroupIcon />
                        Membros
                    </button>
                </li>

            </ul>
        </aside>
    );
}

export default Menu;