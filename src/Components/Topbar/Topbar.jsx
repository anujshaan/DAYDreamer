import './topbar.css';

export default function Topbar() {
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
                    <li className="topbarListItem">Home</li>
                    <li className="topbarListItem">About</li>
                    <li className="topbarListItem">Contact us</li>
                    <li className="topbarListItem">Write</li>
                    <li className="topbarListItem">Logout</li>
                </ul>
            </div>
            <div className="topbarRight">
                <img className="topbarImg" src="https://wallpaperaccess.com/full/1762310.jpg" alt="" />
                <i className="topbarSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
