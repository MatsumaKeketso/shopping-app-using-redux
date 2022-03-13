import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
function CartItem({ data }) {
    const dispatch = useDispatch()
    // const cartItems = useSelector((state) => state.cart.itemsList)
    const addToCart = () => {
        // dispatch(cartActions.addToCart({ name: 'Lorem', id, price: 55 }))
    }
    const incrementItem = () => {
        dispatch(cartActions.addToCart({
            name: data.name,
            id: data.id,
            price: data.price
        }))
    }
    const decrementItem = () => {
        dispatch(cartActions.removeFromCart({
            name: data.name,
            id: data.id,
            price: data.price
        }))
    }
    return (
        <Card item sx={{ maxWidth: 300, minWidth: 300, m: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/08/29143522/RT_200EssentialMovies_731X200.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Stack direction="column">
                    <Stack direction="row" alignItems="center">
                        <Typography sx={{ flexGrow: 1 }} gutterBottom variant="h5" component="div">
                            {data.name}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            {data.quantity > 1 ? (<div>R{data.price} (x{data.quantity})</div>) : (<div>R{data.price}</div>)}
                        </Typography>
                    </Stack>
                    {data.totalPrice > data.price ? (<Typography sx={{ flexGrow: 1 }} align="right">Total: R{data.totalPrice}</Typography>) : null}

                </Stack>
            </CardContent>
            <CardActions >
                {/* <Stack  direction="row"> */}
                <Stack sx={{ flexGrow: 1 }} spacing={2} direction="row" justifyContent="center" alignItems="center">
                    <IconButton onClick={decrementItem} size="small" color="secondary" aria-label="add">
                        <RemoveIcon />
                    </IconButton >
                    <Typography align='center' variant='body1' >{data.quantity}</Typography>
                    <IconButton onClick={incrementItem} size="small" color="secondary" aria-label="add">
                        <AddIcon />
                    </IconButton >
                    <Typography sx={{ flexGrow: 1 }} align='center' variant='body1' />
                    <Button size="small" variant="text" color="warning" onClick={addToCart}>Remove</Button>
                </Stack>
            </CardActions>
        </Card>
    )
}

export default CartItem