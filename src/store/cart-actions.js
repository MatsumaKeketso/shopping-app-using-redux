import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await fetch('https://todoapp-a9619-default-rtdb.firebaseio.com/cartitems.json')
            const data = await res.json();
            return data
        }
        try {
            const cartData = await fetchHandler()
            // dispatch(cartActions.replaceData(cartData))
        } catch (error) {
            dispatch(uiActions.showNotification({
                open: true,
                message: 'Request send to fetch failed',
                type: 'error'
            }))
        }
    }
}

// Redux thunk function
export const sendCartData = (cart) => {
    // const dispatch = useDispatch()
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                open: true,
                message: 'Getting info',
                type: 'warning'
            })
        );
        const sendRequest = async () => {
            // state a sending 

            await fetch('https://todoapp-a9619-default-rtdb.firebaseio.com/cartitems.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            })
            // const data = await res.json();
            // state a request sucess
            dispatch(uiActions.showNotification({
                open: true,
                message: 'Send Request Sucess',
                type: 'success'
            }))
            setTimeout(() => {
                dispatch(uiActions.showNotification({
                    open: false,
                    message: 'Send Request Sucess',
                    type: 'success'
                }))
            }, 3000);
        }
        try {
            await sendRequest()
        } catch (error) {
            dispatch(uiActions.showNotification({
                open: true,
                message: 'Request send failed',
                type: 'error'
            }))
        }
    }
}