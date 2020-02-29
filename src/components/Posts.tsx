import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getPosts, deletePost } from "../api/posts";
import { IPost } from "../types/post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const history = useHistory();
  const fetchData = async () => {
    try {
      const result = await getPosts();
      setPosts(result);
    } catch (error) {
      setError(true);
    }
  };
  const handleDelete = async (id: string | undefined = "") => {
    try {
      await deletePost(id);
      fetchData();
    } catch (error) {
      setError(true);
    }
  };
  const handleShow = (id: string | undefined = "") => {
    history.push(`/edit/${id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="posts">
      {error ? (
        <div className="alert alert-danger" role="alert">
          An error occurred. Try again later.
        </div>
      ) : (
        <React.Fragment>
          <div>
            <button
              className="btn btn-primary"
              onClick={() => history.push("/create")}
            >
              Create new entry
            </button>
          </div>
          <br />
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
            <tbody>
              {posts.map((post: IPost) => (
                <tr key={post.id}>
                  <th scope="row">{post.id}</th>
                  <td>{post.title}</td>
                  <td>{post.content}</td>
                  <td>
                    <button onClick={() => handleShow(post.id)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(post.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      )}
    </div>
  );
};

export default Posts;
