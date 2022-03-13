import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import PriceCounter from '../components/NavBar/PriceCounter';
function Cart() {
    const cartItems = useSelector(state => state.cart.itemsList)
    return (
        <Container sx={{ p: 5 }}  >
            <PriceCounter />
            <Grid
                justifyContent="space-evenly"
                container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {
                    cartItems.map((c, i) => (
                        <CartItem key={i} data={c} />
                    ))
                }
            </Grid>

        </Container>
    )
}

export default Cart