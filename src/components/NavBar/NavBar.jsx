import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const pages = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
    ];
    // const cartItems = useSelector((state) => state.cart.itemsList)
    const location = useLocation()
    const dispatch = useDispatch()
    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(authActions.logOut())
    }
    const quantity = useSelector(state => state.cart.totalQuantity)
    return (
        <div style={{ marginTop: 70 }}>
            <div style={{
                position: 'fixed', top: 0, left: 0,
                width: '100%',
            }}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                <MenuIcon />
                            </IconButton>
                            <Typography sx={{ pr: 2 }} variant="h6" color="inherit" component="div">
                                Redux Shopping App
                            </Typography>
                            {/* Pages */}
                            {pages.map((page) => (
                                <Link style={{ textDecoration: 'none' }} key={page.label} to={page.path}>
                                    <Button
                                        variant='outlined'
                                        color={location.pathname === page.path ? 'inherit' : 'primary'}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page.label}
                                    </Button>
                                </Link>

                            ))}
                            {/* Pages */}
                            <Typography sx={{ flexGrow: 1 }} />
                            <Link style={{ textDecoration: 'none' }} to="/cart">
                                <Button
                                    variant='outlined'
                                    color='primary'
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Cart&nbsp;&nbsp;<Badge badgeContent={quantity} color="error">
                                        <CartIcon color="inherit" />
                                    </Badge>
                                </Button>
                            </Link>

                            <Button
                                variant='text'
                                color='warning'
                                sx={{ my: 2, display: 'block' }}
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>

        </div>
    )
}

export default NavBar