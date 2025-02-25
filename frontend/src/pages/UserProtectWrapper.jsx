import { useEffect } from 'react'
// import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserProtectWrapper = ({ children }) => {

    const token = localStorage.getItem("token")
    // console.log(token);

    const navigate = useNavigate()


    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [token])

    return (
        <>
            {children}
        </>
    )
}

export default UserProtectWrapper