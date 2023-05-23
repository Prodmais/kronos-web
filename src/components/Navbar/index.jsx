import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Menu, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AuthenticateService } from '../../services/authenticate-service';
import styles from './navbar.module.css';
import { useLocation } from 'react-router';

const Navbar = () => {

    const authenticateService = new AuthenticateService();
    const projectName = useSelector(state => state.navbar.projectName)
    
    const userStore = useSelector(state => state.auth.user);
    const systemStore = useSelector(state => state.system);
    const location = useLocation(); 

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (item) => {
        setAnchorEl(null);
    };

    useEffect(() => {
        console.log(location.pathname)

    }, [systemStore]);

    function stringToColor(string) {
        let hash = 0;
        let i;
        
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
        
        let color = '#';
        
        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        
        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
                width: 24, 
                height: 24,
                fontSize: '0.9em'
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
            variant: 'circle',
        };
    }


    return (
        userStore && <nav className={styles.navbar}>
            { (location.pathname.includes('membros') || location.pathname.includes('quadros')) &&
             <h2>{projectName}</h2>
            }
            <div className={styles.profile_button}>
                <button onClick={handleClick}>
                    <div className={styles.avatar_container}>
                        <Avatar {...stringAvatar(`${userStore.name.split(' ')[0]} ${userStore.lastName}`)} />
                    </div>
                    <p>{ `${userStore.name.split(' ')[0]} ${userStore.lastName}` }</p>
                    <KeyboardArrowDownIcon />
                </button>

                <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'button',
                    }}
                >
                    <MenuItem onClick={() => authenticateService.logout()}>Sair</MenuItem>
                </Menu>
            </div>

        </nav>
    );
}

export default Navbar;