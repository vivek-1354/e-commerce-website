import React, { useState } from 'react'

import "./User.css"

const User = () => {
    const [isLogin, setIsLogin] = useState(false)


    React.useEffect(() => {
        const IsTokenSet = localStorage.getItem("demo-token")
        setIsLogin(IsTokenSet)
    }, [])


    const handleLogin = () => {
        localStorage.setItem("demo-token", true)
        setIsLogin(true)

    }
    return (
        <center>
            {isLogin ? <h1>Welcome to our website</h1> : <h1>Please Login</h1>}
            <button className={isLogin ? "login" : "logout"} onClick={handleLogin}>{isLogin ? <strong>Logout</strong> : <strong>Login</strong>}</button>
        </center>
    )
}

export default User
