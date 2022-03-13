import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Product from '../components/Product';
import PriceCounter from '../components/NavBar/PriceCounter';


function Home() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <Container sx={{ p: 5 }}  >
      <PriceCounter />
      <Grid
        justifyContent="space-evenly"
        container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >{cards.map((c, i) => (
        <Product key={i} id={i} />
      ))}</Grid>

    </Container>
  )
}

export default Home