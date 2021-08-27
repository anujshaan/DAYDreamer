import './setting.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete Account
                    </span>
                   </div>
                    <form className="settingsForm">
                        <label>Profile Picture</label>
                        <div className="settingsPP">
                            <img src="https://media.allure.com/photos/5a26c1d8753d0c2eea9df033/3:4/w_1262,h_1683,c_limit/mostbeautiful.jpg" alt="" />
                        
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                        </div>
                        <label>Username:</label>
                        <input type="text" placeholder="anujshaan" />
                        <label>Email address:</label>
                        <input type="email" placeholder="anuj@gmail.com" />
                        <label>Password:</label>
                        <input type="password" placeholder="(atleast 6 character)" />
                        <button className="settingsSubmit">Update</button>
                    </form>
             
            </div>
                <Sidebar />
        </div>
    )
}
