// src/components/ProfileModal.js
import { useState } from "react";

const ProfileModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);

    setLoading(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Update Profile</h2>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type='file' onChange={handleImageChange} />
        <button onClick={handleUpdate} disabled={loading}>
          {loading ? "Updating..." : "Update"}
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProfileModal;
