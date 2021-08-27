import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">--A blogging platform--</span>
                <span className="headerTitleLg">DAYDremers</span>
            </div>
            <img className="headerImg" src="https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg" alt="" />
        </div>
    )
}
