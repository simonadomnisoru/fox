import React, { useState, useReducer, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { editPost, getPost } from "../api/posts";
import { reducer, initialState } from "../hooks/formPostReducer";
import FormPost from "./FormPost";

const Edit = withRouter(({ match: { params } }) => {
  const { id } = params;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState(false);
  const history = useHistory();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };
  const onSubmit = async () => {
    try {
      const result = await editPost({ ...state, id });
      result.error ? setError(true) : history.goBack();
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPost(id);
      for (var field in result) {
        if (initialState.hasOwnProperty(field)) {
          dispatch({ field, value: result[field] });
        }
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="posts">
      <h4>Edit</h4>
      {error ? (
        <div className="alert alert-danger" role="alert">
          An error occurred while your post was submitted. Try again later.
        </div>
      ) : (
        <FormPost {...state} onChange={onChange} onSubmit={onSubmit}></FormPost>
      )}
    </div>
  );
});

export default Edit;
