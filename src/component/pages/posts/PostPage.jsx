import { useState, useEffect } from "react";
import axios from "axios";
import AppPost from "../../AppPost";
import { Link } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

const PostPage = () => {
  const [activeArticles, setActiveArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const [filter, setFilter] = useState("all");


  //USE EFFECT
  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    getTags();
  }, [filter]);

  //AXIOS
  const getPosts = () => {
    axios.get(`${apiUrl}/bacheca`).then((resp) => {
      console.log("Dati ricevuti", resp);
      setActiveArticles(resp.data.posts);
    });
  };

  //SELECT TAG
  const getTags = () => {
    axios.get(`${apiUrl}/tags`).then((resp) => {
      console.log("Tag", resp);
      setTags(resp.data.tags);
    });
  };

  //FUNZIONE DELETE
  const handleDelete = (idDaCancellare) => {
    axios.delete(`${apiUrl}/posts/${idDaCancellare}`).then((resp) => {
      const newArray = activeArticles.filter(
        (curPost) => curPost.id !== idDaCancellare
      );
      setActiveArticles(newArray);
    });
  };

  return (
    <>
      <div className="container">
        <section className="d-flex justify-content-between align-items-center">
          <select
            name="tag"
            id=""
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          >
            <option value="all">All tags</option>
            {tags.map((curTag, index) => (
              <option key={index} value={curTag}>
                {curTag}
              </option>
            ))}
          </select>
          <Link className="btn btn-secondary" to="/posts/create">
            Aggiungi un nuovo articolo
          </Link>
        </section>
       
        <h2 className="text-center text-secondary my-3 fs-1">New articles</h2>
        {activeArticles.length > 0 ? (
          <div className="display">
            <div className="card">
              {activeArticles.map((curItem) => (
                <div key={curItem.id}>
                  <AppPost post={curItem} />
                  <button
                    onClick={() => handleDelete(curItem.id)}
                    className="btn btn-outline-secondary m-3"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-secondary">There are currently no articles</p>
        )}
      </div>
    </>
  );
};

export default PostPage;
