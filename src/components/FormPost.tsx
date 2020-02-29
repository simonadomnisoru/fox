import React from "react";
import { IFormPost } from "../types/post";
import { useHistory } from "react-router-dom";

const FormPost = (props: IFormPost) => {
  const {
    title,
    content,
    lat,
    long,
    image_url,
    onChange,
    onSubmit
  } = props;
  const history = useHistory();
  return (
    <form>
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          value={title}
          name="title"
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label>Content</label>
        <input
          className="form-control"
          value={content}
          name="content"
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label>Latitude</label>
        <input
          className="form-control"
          value={lat}
          name="lat"
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label>Longitude</label>
        <input
          className="form-control"
          value={long}
          name="long"
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label>Image</label>
        <input
          className="form-control"
          value={image_url}
          name="image_url"
          onChange={onChange}
        />
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
            <button
              type="button"
              className="btn btn-primary"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormPost;
