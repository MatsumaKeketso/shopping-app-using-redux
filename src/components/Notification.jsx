import React from 'react'
import { Alert } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/ui-slice'
function Notification({ type, message }) {
    const dispatch = useDispatch()
    const notification = useSelector(state => state.ui.notification)
    const handleClose = () => {
        dispatch(uiActions.showNotification({
            open: false
        }))
    }
    return (
        <div style={{ position: 'fixed', top: 80, right: 10 }}>
            {notification.open &&  <Alert onClose={handleClose} severity={type}>{message}</Alert>}
           
        </div>

    )
}

export default Notification