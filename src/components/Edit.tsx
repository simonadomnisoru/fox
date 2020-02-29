import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { editPost, getPost } from "api/posts";
import { useHooks, initialState } from "utils/hookForm";
import FormPost from "./FormPost";

const Edit = withRouter(({ match: { params } }) => {
  const { id } = params;
  const { state, disabled, dispatch, onChange, checkDisabled } = useHooks();
  const [error, setError] = useState(false);
  const history = useHistory();

  const onSubmit = async () => {
    try {
      await editPost({ ...state, id });
      history.goBack();
    } catch (error) {
      setError(true);
    }
  };

  const onError = () => {
    dispatch({
      field: "image_url",
      value: "https://image.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600w-1114445501.jpg"
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPost(id);
        for (var field in result) {
          if (initialState.hasOwnProperty(field)) {
            dispatch({ field, value: result[field] });
          }
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    checkDisabled();
  }, [state]);

  return (
    <div className="posts">
      <h4>Edit</h4>
      {error ? (
        <div className="alert alert-danger" role="alert">
          An error occurred while your post was submitted. Try again later.
        </div>
      ) : (
        <React.Fragment>
          <label>Tumbnail</label>
          <br />
          <img
            alt="post"
            src={state.image_url}
            className="img-thumbnail"
            height="100"
            width="100"
            onError={onError}
          />
          <FormPost
            post={state}
            onChange={onChange}
            onSubmit={onSubmit}
            disabled={disabled}
          ></FormPost>
        </React.Fragment>
      )}
    </div>
  );
});

export default Edit;
