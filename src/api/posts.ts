
import { IPost } from "../types/post";

const url = 'https://wf-challenge-yn8dgzymk9.herokuapp.com/api/v1/posts';

const getPosts = async () => {
  try {
    const response = await fetch(url);
    const parsedResponse = await response.json();
    return parsedResponse;
  } catch (errorMessage) {
    return { error: true, errorMessage }
  }
};

const getPost = async (id: number) => {
  try {
    const response = await fetch(`${url}/${id}`);
    const parsedResponse = await response.json();
    return parsedResponse;
  } catch (errorMessage) {
    return { error: true, errorMessage }
  }
};

const deletePost = async (id: number) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    })
    const parsedResponse = await response.json();
    return parsedResponse;
  } catch (errorMessage) {
    return { error: true, errorMessage }
  }
};

const createPost = async (data: any) => {
  try {
    console.log(data)
    const response = await
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    const parsedResponse = await response.json();
    return parsedResponse;
  } catch (errorMessage) {
    return { error: true, errorMessage }
  }
};

const editPost = async (data: IPost) => {
  try {
    const response = await
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    const parsedResponse = await response.json();
    return parsedResponse;
  } catch (errorMessage) {
    return { error: true, errorMessage }
  }
};

export { getPosts, getPost, deletePost, createPost, editPost };