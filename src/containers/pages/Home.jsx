import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../../components/Topbar/Topbar";
import { useAuth, upload, auth, db } from "../../firebase/index";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { getAppKey } from "../../helpers/getKey";
import Post from "../../components/Post/Post";
import Createpost from "../../components/CreatePost/Createpost";
import { MdNoteAdd } from "react-icons/md";

const Home = () => {
  const navigate = useNavigate();
  const [key, setKey] = useState("");
  const [postLists, setPostList] = useState([]);
  const [addPost, setAddPost] = useState(false);
  const postsCollectionRef = collection(db, "posts");
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  useEffect(() => {
    setKey(getAppKey());
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  return (
    <div>
      {key?.length > 0 ? (
        <div className="bg-gray-800 min-h-screen pb-10 ">
          <Topbar />

          {key?.includes("guest") ? null : (
            <div
              className="create_cont w-full mt-5 text-3xl text-white/30"
              onClick={() => setAddPost(false)}
            >
              <div className="flex items-center justify-around w-11/12 mx-auto py-2">
                <h3>Create New Post</h3>
                <MdNoteAdd
                  color="white"
                  className="cursor-pointer"
                  onClick={() => setAddPost(!addPost)}
                />
              </div>
            </div>
          )}

          {addPost && <Createpost />}
          {postLists.map((post) => (
            <Post post={post} />
          ))}
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default Home;
