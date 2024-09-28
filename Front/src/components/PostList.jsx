import Post from './Post';
import './styles-components/PostList.css';

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.map((post, index) => (
                <Post key={index} username={post.username} content={post.content} />
            ))}
        </div>
    );
};

export default PostList;