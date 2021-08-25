import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">react &node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg" alt="" />
        </div>
    )
}
