import React from 'react'
import { Stack, TextField, Container, Typography, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth-slice'
function Login() {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }
  return (
    <Container>
      <Typography sx={{ p: 5 }} align='center' variant="h3">Login</Typography>
      <Stack spacing={2}>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button onClick={handleSubmit} variant="contained">Login</Button>
      </Stack>
    </Container>
  )
}

export default Login