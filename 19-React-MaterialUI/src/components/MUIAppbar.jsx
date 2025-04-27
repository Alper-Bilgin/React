import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, Stack } from '@mui/material';


function MUIAppbar() {

    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const closeMenu = () => {
        setAnchorEl(null);
    }

    const openControl = anchorEl ? true : false;
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton>
                    <MenuIcon sx={{ color: '#fff' }} />
                </IconButton>

                <Typography variant='h6'>MUI</Typography>

                <Stack direction="row" sx={{ marginLeft: 'auto' }}>
                    <Button sx={{ color: '#fff' }}>Anasayfa</Button>
                    <Button sx={{ color: '#fff' }}>Hakkımızda</Button>
                    <Button sx={{ color: '#fff' }} onClick={openMenu}>Ürünler</Button>
                    <Button sx={{ color: '#fff' }}>İletişim</Button>
                </Stack>

                <Menu anchorEl={anchorEl} open={openControl} onClose={closeMenu}>
                    <MenuItem onClick={closeMenu}>Lastik</MenuItem>
                    <MenuItem onClick={closeMenu}>Bijon</MenuItem>
                    <MenuItem onClick={closeMenu}>Body Kit</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default MUIAppbar