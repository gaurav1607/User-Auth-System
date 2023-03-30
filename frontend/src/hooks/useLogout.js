import { useAuthContext } from "./useAuthContext"

export const uselogout =()=>{
    const {dispatch} = useAuthContext
    const logout =()=>{
        //remove user from storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}