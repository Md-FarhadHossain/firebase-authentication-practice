import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { UserContext } from '../context/AuthContext'

const PrivetRoute = ({children}) => {

    const {user,loading} = useContext(UserContext)
    const location = useLocation()

    if(loading) {
        return <>
            <h1 className='text-3xl'>Loading...</h1>
        </>
    }

    if(user){
        return children
    }

  return <Navigate to='/signup' state={{from: location}} replace />
}

export default PrivetRoute