import './topbar.css';
import { Link } from 'react-router-dom';

export default function Topbar({user}) {
    return (
        <div className="topbar">
            <div className="topbarLeft">
                <i className="topbarIcons fab fa-facebook-square"></i>
                <i className="topbarIcons fab fa-twitter-square"></i>
                <i className="topbarIcons fab fa-pinterest-square"></i>
                <i className="topbarIcons fab fa-instagram-square"></i>
            </div>
            <div className="topbarCenter">
                <ul className="topbarList">
                    <li className="topbarListItem">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="topbarListItem">
                        <Link to="/">About</Link>
                    </li>
                    <li className="topbarListItem">
                        <Link to="/">Contact us</Link>
                    </li>
                    <li className="topbarListItem">
                        <Link to="/write">Write</Link>
                    </li>
                    <li className="topbarListItem">
                        <Link to="/register">
                            {user && "Logout"}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="topbarRight">
                {
                    user ? (<>
                        <img className="topbarImg" src="https://wallpaperaccess.com/full/1762310.jpg" alt="" />
                        <i className="topbarSearchIcon fas fa-search"></i>
                    </>
                    ):(
                    <ul className="topbarList">
                        <li className="topbarListItem">
                            <Link className="link" to ="/register">Register</Link>
                        </li>
                        <li className="topbarListItem">
                            <Link className="link" to ="/login">Login</Link>
                        </li>
                    </ul>
                    )
                }
                
            </div>
        </div>
    )
}
