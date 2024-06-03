import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // This is to avoid accessibility issues
const pet = {
  id: 1,
  name: "Buddy",
  age: 2,
  location: "New York",
  image: "https://via.placeholder.com/150",
};

const user = {
  name: "John Doe",
  email: "john@example.com",
};

const PetDetails = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    address: "",
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const adoptionData = {
      petId: pet.id,
      petName: pet.name,
      petImage: pet.image,
      userName: user.name,
      userEmail: user.email,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
    };

    // Save the adoptionData to the database (mocked here)
    console.log("Adoption Data Submitted:", adoptionData);

    // Close the modal after submission
    closeModal();
  };

  return (
    <div className='p-10 min-h-screen bg-gray-50'>
      <div className='max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
        <img
          src={pet.image}
          alt={pet.name}
          className='w-full h-64 object-cover rounded-t-lg'
        />
        <h2 className='text-3xl font-bold mt-4'>{pet.name}</h2>
        <p className='text-gray-700 mt-2'>Age: {pet.age}</p>
        <p className='text-gray-700 mt-2'>Location: {pet.location}</p>
        <button
          onClick={openModal}
          className='mt-6 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200'
        >
          Adopt
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'
        overlayClassName='fixed inset-0 bg-black bg-opacity-30'
      >
        <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
          <h2 className='text-2xl font-bold mb-4'>Adopt {pet.name}</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-gray-700'>User Name</label>
              <input
                type='text'
                value={user.name}
                disabled
                className='mt-1 p-2 w-full border border-gray-300 rounded bg-gray-100'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Email</label>
              <input
                type='email'
                value={user.email}
                disabled
                className='mt-1 p-2 w-full border border-gray-300 rounded bg-gray-100'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Phone Number</label>
              <input
                type='text'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className='mt-1 p-2 w-full border border-gray-300 rounded'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Address</label>
              <textarea
                name='address'
                value={formData.address}
                onChange={handleChange}
                required
                className='mt-1 p-2 w-full border border-gray-300 rounded'
              ></textarea>
            </div>
            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200'
            >
              Submit
            </button>
          </form>
          <button
            onClick={closeModal}
            className='mt-4 w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-200'
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PetDetails;
