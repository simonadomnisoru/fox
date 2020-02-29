import { IPost, IReducerCreate } from "types/post";
import React, { useState, useReducer } from "react";

const initialState: IPost = {
  title: "",
  content: "",
  lat: "",
  long: "",
  image_url: ""
};

const reducer = (state: IPost, { field, value }: IReducerCreate) => {
  return {
    ...state,
    [field]: value
  };
};

const useHooks = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [disabled, setDisabled] = useState(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const checkDisabled = () => {
    const hasEmptyValue: boolean = Object.values(state).indexOf("") >= 0;
    setDisabled(hasEmptyValue);
  }

  return { state, dispatch, disabled, onChange, checkDisabled };
};

export { initialState, reducer, useHooks }