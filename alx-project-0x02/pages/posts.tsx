import React from 'react';
import Header from '@/components/layout/Header'; 
import PostCard from '../components/common/PostCard'; 
import { PostProps } from '../interfaces'; 

const PostsPage: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  return (
    <div>
      <Header />
      <h1 className="text-3xl mt-6 mb-4">Posts Page</h1>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.body}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      posts: data, 
    },
    revalidate: 5
  };
}

export default PostsPage;
