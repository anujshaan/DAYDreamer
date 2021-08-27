import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarItem">
               <span className="sidebarTitle">About Me</span>
                <img src="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2020/02/11120543/smartphone-for-kids-featured.jpg" alt="" />
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
