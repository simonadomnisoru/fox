import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getPosts, deletePost } from "../api/posts";
import { IPostShow } from "../types/post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const history = useHistory();
  const handleDelete = (id: number) => {
    deletePost(id);
  };
  const handleShow = (id: number) => {
    history.push(`/edit/${id}`);
  };

  const postsItems = posts.map((post: IPostShow) => (
    <tr key={post.id}>
      <th scope="row">{post.id}</th>
      <td>{post.title}</td>
      <td>{post.content}</td>
      <td>
        <button onClick={() => handleShow(post.id)}>Edit</button>
      </td>
      <td>
        <button onClick={() => handleDelete(post.id)}>Delete</button>
      </td>
    </tr>
  ));

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPosts();
      if (result.error) {
        setError(true);
      } else {
        setPosts(result);
      }
    };
    fetchData();
  }, []);

  console.log(error);

  return (
    <div className="posts">
      <button
        className="btn btn-primary"
        onClick={() => history.push("/create")}
      >
        Create new entry
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{postsItems}</tbody>
      </table>
    </div>
  );
};

export default Posts;
