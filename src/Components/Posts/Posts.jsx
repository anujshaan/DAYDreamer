import Post from '../Post/Post';
import './posts.css';
import { Link } from 'react-router-dom';

export default function Posts() {
    return (
        <div className="posts">
            <Link to="/post/:postId"><Post/></Link>
            <Link to="/post/:postId"><Post/></Link>
            <Link to="/post/:postId"><Post/></Link>
            <Link to="/post/:postId"><Post/></Link>
            <Link to="/post/:postId"><Post/></Link>
            <Link to="/post/:postId"><Post/></Link>
            <Link to="/post/:postId"><Post/></Link>
            <Link to="/post/:postId"><Post/></Link>
        </div>
    )
}
