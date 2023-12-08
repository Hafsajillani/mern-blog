import {Link} from "react-router-dom";
import {format} from "date-fns";
export default function Post({_id,title,summary,content,cover,createdAt,author}){
  const formattedDateTime = format(new Date(createdAt), "MMMM dd, yyyy  hh:mm a");
    return(
    <div className="post">
      <div className="image">
      <Link to={`/post/${_id}`}>
        <img src={'http://localhost:5000/'+cover} alt="" />
      </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formattedDateTime}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
    );
}