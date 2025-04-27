import React from 'react'
import Badge from '@mui/material/Badge';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

function MUIBadge() {
    return (
        <div style={{ marginTop: '100px', marginLeft: '100px' }}>
            <Badge badgeContent={15} color='primary' max={9} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                <AttachEmailIcon />
            </Badge>
        </div>
    )
}

export default MUIBadge