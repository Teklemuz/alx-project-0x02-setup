import { useState } from "react";
import PostModal from "../components/common/PostModal"; 
import Card from "@/components/common/Card"; 
import Header from "@/components/layout/Header"; 
import { type CardProps }"

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([
    { title: "Card 1", content: "This is the content of Card 1." },
    { title: "Card 2", content: "This is the content of Card 2." },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prevPosts) => [...prevPosts, { title, content }]);
  };

  return (
    <div>
      <Header />
      
      <h1 className="text-3xl mt-6 mb-4">Home Page</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        Add New Post
      </button>

      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default HomePage;
