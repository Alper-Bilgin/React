import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Honda from '../images/honda.jpg';

function MUICard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="Honda Civic"
                height="200"
                image={Honda}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Honda Civic
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam quis in placeat delectus! Aut accusantium sequi vero, unde placeat labore? Dolore ad consectetur ipsum exercitationem? Minima incidunt voluptatum, non facere explicabo eum laudantium eos quod ipsa, adipisci, consectetur dicta?
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Satın Al</Button>
                <Button size="small">İletişime Geç</Button>
            </CardActions>
        </Card>
    )
}

export default MUICard