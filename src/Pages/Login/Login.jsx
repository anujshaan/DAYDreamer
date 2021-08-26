import './login.css';
import img from '../../Assets/register.jpg';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login">
            <div className="loginLogo">
                <h1>DAYDremer</h1>
                <img src={img} alt="" />
            </div>
            <div className="hrLine"></div>
            <div className="loginFormWrapper">
                <form className="loginForm">
                    <label>Email:</label>
                    <input type="email" placeholder="Enter your email.." />
                    <label>Password:</label>
                    <input type="password" placeholder="Enter your password..." />
                    <button className="loginButton">Login</button>
                </form>
                    <p className="noAccount">Don't have Account ?</p>
                    <button className="loginRegisterButton">
                        <Link to="/register">Register</Link>
                    </button>
            </div>
        </div>
    )
}
