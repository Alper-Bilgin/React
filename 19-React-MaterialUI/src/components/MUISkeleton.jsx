import React, { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton';
import HondaCivic from '../images/honda.jpg';

function MUISkeleton() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500)
    }, [])
    return (
        <div>
            {
                loading ? <Skeleton variant='rounded' width={250} height={150} animation='wave' />
                    : <img src={HondaCivic} width={250} height={150} />
            }

        </div>
    )
}

export default MUISkeleton