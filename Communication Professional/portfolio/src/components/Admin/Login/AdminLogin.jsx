import React, { useState } from "react";
import "./AdminLogin.css"

function AdminLogin() {
    useState(() => {
        document.title = "Shreya Mukherjee - Login"
    }, [])
    return (
        <>
            <div className="loginMain">
                <div className="loginform">
                    <h2>Admin Login</h2>
                    <div className="loginInput">
                        <input type="text" className="username" placeholder="Username" />
                        <input type="password" className="password" placeholder="Password" />
                    </div>
                    <div className="loginButton">
                        <button className="loginbtn">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminLogin;