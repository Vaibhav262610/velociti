import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogOut = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    axios.get("http://localhost:4000/users/logout", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((response) => {
            if (response.status === 200) {
                navigate('/login')
                localStorage.removeItem("token")
                console.log("LOG OUT SUCCESSFULLY");
            }
        })

    return (
        <div>UserLogOut</div>
    )
}

export default UserLogOut