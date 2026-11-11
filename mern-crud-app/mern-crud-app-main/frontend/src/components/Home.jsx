import { useEffect, useState } from "react";
import Header from "./Header";
import Post from "./Post";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:3000/api/v1/posts");
      const data = await response.json();
      setPosts(data.data);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <div className="posts-container">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
