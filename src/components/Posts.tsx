import React, { useState, useEffect } from "react";
import { getPosts } from "../api/posts";
import { IPostShow } from "../types/post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const handleDelete = (id: number) => {
    console.log(id);
    // deletePost(id)
  };

  const postsItems = posts.map((post: IPostShow) => (
    <tr>
      <th scope="row">{post.id}</th>
      <td>{post.title}</td>
      <td>{post.content}</td>
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

  console.log(posts, error);
  return (
    <div className="posts">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Content</th>
          </tr>
        </thead>
        <tbody>{postsItems}</tbody>
      </table>
    </div>
  );
};

export default Posts;
