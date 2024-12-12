import axios from 'axios'
// import React from 'react'
import { useNavigate } from 'react-router-dom'

const CaptainLogOut = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    axios.get("http://localhost:4000/captains/logout", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((response) => {
            if (response.status === 200) {
                navigate('/captain-login')
                localStorage.removeItem("token")
                console.log("LOG OUT SUCCESSFULLY");
            }
        })

    return (
        <div>CaptainLogOut</div>
    )
}

export default CaptainLogOut