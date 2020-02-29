import { IPost, IReducerCreate } from "../types/post";
const initialState = {
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

export { initialState, reducer }