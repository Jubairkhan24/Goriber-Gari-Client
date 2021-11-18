import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Item from './Item/Item';
import './ExploreItems'
import Navigation from '../Shared/Navigation/Navigation';

const ExploreItems = () => {

    const [exploreItems, setExploreItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setExploreItems(data))
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Navigation></Navigation>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 5, margin: '70px 0px', color: '#0F8C9C' }} variant="h4" component="div">
                    Explore the Items
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        exploreItems.map(item => <Item
                            key={item.name}
                            item={item}
                        ></Item>)
                    }
                </Grid>

            </Container>
        </Box>
    );
};

export default ExploreItems;