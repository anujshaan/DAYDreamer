import './register.css';
import img from '../../Assets/register.jpg';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="register">
            <div className="registerLogo">
                <h1>DAYDremer</h1>
                <img src={img} alt="" />
            </div>
            <div className="hrLine"></div>
            <div className="registerFormWrapper">
                <form className="registerForm">
                    <div className="registerFormName">
                        <div className="registerFormNameStyle">
                            <label>First Name:</label>
                            <input type="text" placeholder="firstname"/>
                        </div>
                        <div className="registerFormNameStyle">
                            <label>Last Name:</label>
                            <input type="text" placeholder="lastname"/>
                        </div>
                    </div>
                    <label>Email:</label>
                    <input type="email" placeholder="Enter your email.." />
                    <label>Password:</label>
                    <input type="password" placeholder="Enter your password..." />
                    <label>Confirm password:</label>
                    <input type="password" placeholder="Enter password again..." />
                    <button className="registerButton">Register</button>
                </form>
                    <p className="noAccount">Already have Account ?</p>
                    <button className="registerLoginButton">
                        <Link to ="/login">Login</Link>
                    </button>
            </div>
        </div>
    )
}
