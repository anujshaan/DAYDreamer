import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img 
                className="postImg"
                src="https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature-1600x900.jpg" 
                alt="" 
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quasi consectetur molestiae architecto perspiciatis asperiores, nulla libero soluta? Provident id dignissimos tenetur inventore. Tenetur</p>
        </div>
    )
}
