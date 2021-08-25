import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarItem">
               <span className="sidebarTitle">About Me</span>
                <img src="https://media.allure.com/photos/5a26c1d8753d0c2eea9df033/3:4/w_1262,h_1683,c_limit/mostbeautiful.jpg" alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi veritatis magni, voluptatibus nemo fugiat est asperiores.
                </p>
           </div>
           <div className="sidebarItem">
               <span className="sidebarTitle sidebarFollowus">Catagories</span>
               <ul className="sidebarList">
                   <li className="sidebarListItem">Life</li>
                   <li className="sidebarListItem">Music</li>
                   <li className="sidebarListItem">Style</li>
                   <li className="sidebarListItem">Sport</li>
                   <li className="sidebarListItem">Tech</li>
                   <li className="sidebarListItem">Cinema</li>
               </ul>
           </div>
           <div className="sidebarItem">
               <span className="sidebarTitle sidebarFollowus">Follow us</span>
               <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
               </div>
           </div>
        </div>
    )
}
