import React, { useState, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { createPost } from "../api/posts";
import { reducer, initialState } from "../hooks/formPostReducer";
import FormPost from "./FormPost";

const Create = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState(false);
  const history = useHistory();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };
  const onSubmit = async () => {
    try {
      const result = await createPost(state);
      result.error ? setError(true) : history.goBack();
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="posts">
      <h4>Create</h4>
      {error ? (
        <div className="alert alert-danger" role="alert">
          An error occurred while your post was submitted. Try again later.
        </div>
      ) : (
        <FormPost {...state} onChange={onChange} onSubmit={onSubmit}></FormPost>
      )}
    </div>
  );
};

export default Create;
