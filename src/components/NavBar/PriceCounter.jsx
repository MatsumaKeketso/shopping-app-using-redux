import React from 'react'
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import CartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
function PriceCounter() {
    const itemsList = useSelector((state) => state.cart.itemsList)
    const itemsListd = useSelector((state) => state)
    let total = 0
    console.log(itemsListd);
    if (itemsList.length > 0) {
        
    } else {
        itemsList.forEach(item => {
            total += item.totalPrice
        })
    }
    return (
        <div style={{ position: 'fixed', bottom: 10, right: 10, display: 'flex', alignItems: 'center', padding: 10, background: 'white', borderRadius: 10, borderWidth: 2, borderColor: 'blue', zIndex: 200 }}>
            <Typography sx={{ mr: 3 }} variant="h5">Total: R{total}</Typography>
            <Fab variant="extended" size="small" color="primary" aria-label="add">
                <CartIcon sx={{ mr: 1 }} />
                Place Order
            </Fab>
        </div>
    )
}

export default PriceCounter