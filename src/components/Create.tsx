import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createPost } from "api/posts";
import { useHooks } from "utils/hookForm";
import FormPost from "./FormPost";

const Create = () => {
  const { state, disabled, onChange, checkDisabled } = useHooks();
  const [error, setError] = useState(false);
  const history = useHistory();

  const onSubmit = async () => {
    try {
      await createPost(state);
      history.goBack();
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    checkDisabled();
  }, [state]);

  return (
    <div className="posts">
      <h4>Create</h4>
      {error ? (
        <div className="alert alert-danger" role="alert">
          An error occurred while your post was submitted. Try again later.
        </div>
      ) : (
        <FormPost
          post={state}
          onChange={onChange}
          onSubmit={onSubmit}
          disabled={disabled}
        ></FormPost>
      )}
    </div>
  );
};

export default Create;
