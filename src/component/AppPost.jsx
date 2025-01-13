const apiUrl = import.meta.env.VITE_API_URL
import { Link } from "react-router-dom";

const AppPost = ({post}) => {
    
    return (
        <div className="col-lg-3">
        <h4>{post.title}</h4>
        <img src={`${apiUrl}/${post.image}`} alt={post.title} />
        <div>{post.tags && post.tags.map((curTag, index) => 
        <span key={index} className="tag">{curTag}</span>)}</div>
        <div>
        <Link className="btn btn-secondary" to={`/posts/${post.id}`}>Dettagli</Link>
        </div>
        </div>
    )
}

export default AppPost;