import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function MUIAlert() {
    return (
        <div style={{ margin: '200px' }}>
            <Alert sx={{ width: '250px' }} severity='info'>Bilgilendirme mesajı</Alert>
            <Alert sx={{ width: '250px', marginTop: '5px' }} severity='error'>Hata mesajı</Alert>
            <Alert sx={{ width: '250px', marginTop: '5px' }} severity='warning'
                variant='standard'>Uyarı mesajı</Alert>

            <Alert variant='standard'
                severity='success'

                sx={{ width: '250px', marginTop: '5px' }}>
                <AlertTitle>Başarılı</AlertTitle>
                Bilgilendirme mesajı
            </Alert>
        </div>
    )
}

export default MUIAlert