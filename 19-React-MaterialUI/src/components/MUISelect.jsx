import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

function MUISelect() {

    const [currencies, setCurrencycies] = useState([]);

    console.log(currencies)

    return (
        <div>
            {/* <FormControl sx={{ width: '150px' }}>
                <InputLabel>Para Birimi</InputLabel>
                <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>

                    <MenuItem value="TRY">Türk Lirası</MenuItem>
                    <MenuItem value="USD">Dolar</MenuItem>
                    <MenuItem value="EUR">EURO</MenuItem>
                </Select>
            </FormControl> */}

            <TextField
                SelectProps={{ multiple: true }}
                value={currencies} onChange={(e) => setCurrencycies(e.target.value)} sx={{ width: '250px' }} label="Para Birimi" select>
                <MenuItem value="TRY">Türk Lirası</MenuItem>
                <MenuItem value="USD">Dolar</MenuItem>
                <MenuItem value="EUR">EURO</MenuItem>
            </TextField>
        </div>
    )
}

export default MUISelect