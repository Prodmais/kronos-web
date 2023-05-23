import React, { useState } from 'react';
import styles from './navbar.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';
import { Menu, MenuItem } from '@mui/material';
import { AuthenticateService } from '../../services/authenticate-service';

const Navbar = () => {

    const authenticateService = new AuthenticateService();
    const [user, setUser] = useState({
        name: 'Luiz Victor'
    });
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (item) => {

        console.log(item)

        setAnchorEl(null);
    };

    function stringToColor(string) {
        let hash = 0;
        let i;
        
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
        
        let color = '#';
        
        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
        
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
        <nav className={styles.navbar}>
            <button onClick={handleClick}>
                <div className={styles.avatar_container}>
                    <Avatar {...stringAvatar(user.name)} />
                </div>
                <p>{ user.name }</p>
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

        </nav>
    );
}

export default Navbar;