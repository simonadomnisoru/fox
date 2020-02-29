import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createPost } from "../api/posts";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();
  const handleSubmit = () => {
    const fetchData = async () => {
      const post = { title, content };
      const result = await createPost(post);
      if (result.error) {
        setError(true);
      } else {
        history.goBack();
      }
    };
    fetchData();
  };

  console.log(error);

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
        <div className="container">
          <div className="row">
            <div className="col-11">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => history.goBack()}
              >
                Back
              </button>
            </div>
            <div className="col-1">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;