import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Myprofile = () => {
  const { user } = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
 
    if (selectedFile) {
     
      console.log("Selected File:", selectedFile);

    } else {
      console.error("No file selected!");
    }
  };

  return (
    <div className="w-8/12 mx-auto items-center justify-center text-center h-44 p-8 mt-24">
      <img className="mt-20 ml-72 mb-4" src={user.photoURL} alt="User Profile" />
      <p className="text-black text-2xl font-semibold">{user?.displayName}</p>

      <div className="join join-vertical lg:join-horizontal mt-3">
        <input type="file" onChange={handleFileChange} accept="image/*" className="hidden" id="fileInput" />
        <label htmlFor="fileInput" className="btn join-item bg-teal-500 cursor-pointer">
          Upload Picture
        </label>
        <button onClick={handleUpload} className="btn join-item">
          Update Profile
        </button>
      </div>
    
    </div>
  );
};

export default Myprofile;
