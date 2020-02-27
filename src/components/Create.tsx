import React, { useState } from "react";
import { createPost } from "../api/posts";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = () => {
    const fetchData = async () => {
      const post = { title, content };
      const result = await createPost(post);
      console.log(result);
    };
    fetchData();
  };

  return (
    <div className="posts">
      <h4>Create</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(event.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Content</label>
          <input
            className="form-control"
            value={content}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setContent(event.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Latitude</label>
          <input className="form-control" />
        </div>

        <div className="form-group">
          <label>Longitude</label>
          <input className="form-control" />
        </div>

        <div className="form-group">
          <label>Image</label>
          <input className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
