import { Divider, Stack } from '@mui/material'
import React from 'react'

function MUIStack() {
    return (
        <div>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}
                divider={<Divider orientation='horizontal' flexItem />}
            >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </Stack>
        </div>
    )
}

export default MUIStack