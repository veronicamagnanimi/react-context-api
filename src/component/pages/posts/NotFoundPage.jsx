import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Errore 404</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Ritorna indietro
      </button>
      <Link to="/">HomePage</Link>
    </>
  );
}

export default NotFoundPage;