import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function MUISnackbar() {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleClick = () => {
        setOpenSnackbar(true)
    }

    const handleClose = () => {
        setOpenSnackbar(false);
    }

    const action = (
        <>
            <Button size='small' color='info' onClick={handleClose}>Kapat</Button>
            <IconButton sx={{ color: '#fff' }} onClick={handleClose}>
                <CloseIcon />
            </IconButton>
        </>
    )
    return (
        <div>
            <Button onClick={handleClick}>Snackbarı Aç</Button>
            <Snackbar open={openSnackbar}
                message="Hata oluştu"
                action={action}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            />
        </div>
    )
}

export default MUISnackbar