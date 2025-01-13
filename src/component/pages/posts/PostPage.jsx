import { useState, useEffect} from "react";
import axios from "axios";
import AppPost from "../../AppPost";
import { Link } from "react-router-dom";
import Filters from "../../Filters";
const apiUrl = import.meta.env.VITE_API_URL;

const PostPage = () => {
  const [activeArticles, setActiveArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const [filter, setFilter] = useState("all");


  //USE EFFECT
  useEffect(() => {
    getPosts();
  }, [filter]);


  //AXIOS
  const getPosts = () => {
    let url = `${apiUrl}/bacheca`;
    if (filter !== "all") {
      url += `?tag=${filter}`
    }
    axios.get(url).then((resp) => {
      console.log("Dati ricevuti", resp);
     setActiveArticles(resp.data.posts);
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
          <Filters tags={tags}selectedTag={filter} onFilterChange={setFilter} />
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
