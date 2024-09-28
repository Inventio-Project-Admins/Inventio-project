import './styles-components/PostForm.css';
import userImage from "../utils/imageProfileDefault.png";
import separatorPost from "../utils/separatorPost.png";
import addImages from "../utils/addImages.png";
import takePhoto from "../utils/takePhoto.png";
import addAudio from "../utils/addAudio.png";

const PostForm = () => {
    return (
        <div className="post-form">
            <img src={userImage} alt="user-image" className="userImage" />
            <textArea placeholder="Write your publication here..." />
            <img src={separatorPost} alt="separator" className="separatorPost" />
            <div className="post-main">
                <div className="post-actions">
                    <button className="addImages">
                        <img src={addImages} alt="addImagesButton" className="addImagesImage" />
                    </button>
                    <button className="takePhoto">
                        <img src={takePhoto} alt="takePhotoButton" className="takePhotoImage" />
                    </button>
                    <button className="addAudio">
                        <img src={addAudio} alt="addAudioButton" className="addAudioImage" />
                    </button>
                    
                </div>
                <div className="post-public">
                    <button className="public">Public</button>
                </div>
            </div>
        </div>
    );
};

export default PostForm;