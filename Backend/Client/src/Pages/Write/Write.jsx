import './write.css'

export default function Write() {
    return (
        <div className="write">
            <img src="https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2015/03/1122-Top-things-to-do-in-manali.jpg" 
                alt="" 
                className="writeImg"/>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea  placeholder="Write about your thoughts..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Share</button>
            </form>
        </div>
    )
}
