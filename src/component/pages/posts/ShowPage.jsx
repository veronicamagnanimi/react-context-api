import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

const ShowPage = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  //USE EFFECT
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${apiUrl}/posts/${id}`)
      .then((resp) => {
        setPost(resp.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/not-found");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, navigate]);

  return (
    <>
      <div>
        <a className="btn btn-secondary m-3" onClick={() => navigate(-1)}>
          Ritorna
        </a>
      </div>
      {post && (
        <div>
          <h1>{post.name}</h1>
          <img className="w-50" src={`${apiUrl}/${post.image}`} alt="" />

          <div className="mt-4">
            <Link className="btn btn-secondary m-3" to={`/posts/${post.id - 1}`}>
              Precedente
            </Link>
            <Link className="btn btn-secondary" to={`/posts/${post.id + 1}`}>
              Successiva
            </Link>
          </div>
        </div>
      )}
      {loading && <p>Loading...</p>}
    </>
  );
};

export default ShowPage;
