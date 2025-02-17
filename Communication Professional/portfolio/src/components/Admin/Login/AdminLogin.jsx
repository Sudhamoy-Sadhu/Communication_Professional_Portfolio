import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginAttempts, setLoginAttempts] = useState(0);
    const [isLocked, setIsLocked] = useState(false);
    const navigate = useNavigate();

    // Define correct admin credentials (hashed for better security)
    const ADMIN_USERNAME = "rayariju2";
    const ADMIN_PASSWORD_HASH = btoa("holabhola2233");

    useEffect(() => {
        document.title = "Shreya Mukherjee - Login";
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if login is locked
        if (isLocked) {
            alert("Too many failed attempts. Try again later.");
            return;
        }

        // Hash user input for comparison
        const enteredPasswordHash = btoa(password);

        // Validate username and password
        if (username === ADMIN_USERNAME && enteredPasswordHash === ADMIN_PASSWORD_HASH) {
            localStorage.setItem("adminUsername", username);
            setLoginAttempts(0);
            navigate("/adminDashboard");
        } else {
            setLoginAttempts(prev => prev + 1);
            alert("Invalid username or password!");
            setUsername(""); 
            setPassword("");

            // Lock login after 3 failed attempts
            if (loginAttempts + 1 >= 3) {
                setIsLocked(true);
                setTimeout(() => {
                    setIsLocked(false);
                    setLoginAttempts(0);
                }, 60000);
            }
        }
    };

    return (
        <>
            <div className="loginMain">
                <div className="loginform">
                    <h2>Admin Login</h2>
                    <div className="loginInput">
                        <input 
                            type="text" 
                            className="username" 
                            placeholder="Username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            disabled={isLocked} 
                        />
                        <input 
                            type="password" 
                            className="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            disabled={isLocked} 
                        />
                    </div>
                    <div className="loginButton">
                        <button 
                            className="loginbtn" 
                            onClick={handleLogin} 
                            disabled={isLocked}
                        >
                            Login
                        </button>
                    </div>
                    {isLocked && <p style={{ color: "red", textAlign: "center" }}>Too many failed attempts. Please wait 60 seconds.</p>}
                </div>
            </div>
        </>
    );
}

export default AdminLogin;
