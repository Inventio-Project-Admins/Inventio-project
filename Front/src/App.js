import './App.css';
import Layout from './components/Layout';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

const samplePosts = [
  { username: "user1", content: "First publication" },
  { username: "user2", content: "Second publication" }
];

function App() {
  return (
    <Layout>
      <PostForm />
      <PostList posts={samplePosts} />
    </Layout>
  );
}

export default App;