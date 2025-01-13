import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;
const initialForm = {
  name: "",
  image: "",
};

const CreatePage = () => {
  const [formData, setFormData] = useState(initialForm);

  const navigate = useNavigate();

  //FUNZIONE INPUT
  const handleInputChange = (event) => {
    const keyToChange = event.target.name;
    const newValue = event.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [keyToChange]: newValue,
    }));
  };

  //SUBMIT
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("submit", formData);

    axios.post(`${apiUrl}/posts`, formData).then((resp) => {
      navigate("/posts");
    });
  };

  return (
    <>
      {/*Title*/}
      <h2 className="text-secondary mb-3">Insert a new article here</h2>
      <form action="" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="text-secondary">
            <strong>Enter title</strong>
          </label>
          <input
            className="form-control"
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>

        {/*Image*/}
        <div className="mb-3">
          <label htmlFor="image" className="text-secondary fw-bold me-2">
            Image
          </label>
          <input
            id="image"
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-secondary mt-3">
          Add Article
        </button>
      </form>
    </>
  );
};

export default CreatePage;
