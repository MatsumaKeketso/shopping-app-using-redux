import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
function Product({ name, id, imageUrl, price }) {
    const dispatch = useDispatch()
    // const cartItems = useSelector((state) => state.cart.itemsList)
    const addToCart = () => {
        dispatch(cartActions.addToCart({ name: 'Lorem', id, price: 55 }))
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
                <Stack direction="row" alignItems="center">
                    <Typography sx={{ flexGrow: 1 }} gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                        R200.00
                    </Typography>
                </Stack>

                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button fullWidth size="small" onClick={addToCart}>Add to Cart</Button>

            </CardActions>
        </Card>
    )
}

export default Product