import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://full-stack-development-lab.onrender.com";

function AddEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (id) {
      async function fetchPost() {
        const response = await fetch(`${API_URL}/api/v1/posts/${id}`);
        const data = await response.json();
        setTitle(data.data.title);
        setContent(data.data.content);
      }
      fetchPost();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = id ? "PUT" : "POST";
    const url = id
      ? `${API_URL}/api/v1/posts/${id}`
      : "${API_URL}/api/v1/posts";
    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    navigate("/");
  };

  return (
    <>
      <div>{id ? "Edit Form" : "Add Form"}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}></textarea>
        <br />
        <button type="submit">{id ? "Update" : "Add"}</button>
      </form>
    </>
  );
}

export default AddEditForm;
