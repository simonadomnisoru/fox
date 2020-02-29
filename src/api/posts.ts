
import { IPost } from "../types/post";
const url = 'https://wf-challenge-yn8dgzymk9.herokuapp.com/api/v1/posts';

const getPosts = async () => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (errorMessage) {
    throw new Error(`An error occured while getting the posts: ${errorMessage}`);
  };
};

const getPost = async (id: string) => {
  try {
    const response = await fetch(`${url}/${id}`);
    return await response.json();
  } catch (errorMessage) {
    throw new Error(`An error occured while getting the post: ${errorMessage}`);
  }
};

const deletePost = async (id: string) => {
  try {
    await fetch(`${url}/${id}`, {
      method: 'DELETE',
    })
    return { error: false };
  } catch (errorMessage) {
    throw new Error(`An error occured while deleating the post: ${errorMessage}`);
  }
};

const createPost = async (data: IPost) => {
  try {
    const response = await
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    return await response.json();
  } catch (errorMessage) {
    throw new Error(`An error occured while creating the post: ${errorMessage}`);
  }
};

const editPost = async (data: IPost) => {
  try {
    const response = await
      fetch(`${url}/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    return await response.json();
  } catch (errorMessage) {
    throw new Error(`An error occured while editing the post: ${errorMessage}`);
  }
};

export { getPosts, getPost, deletePost, createPost, editPost };