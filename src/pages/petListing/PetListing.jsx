import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const petsData = [
  {
    name: "Buddy",
    age: 2,
    location: "New York",
    category: "Dog",
    date: "2024-06-01",
    image: "https://i.ibb.co/QkrxHTn/pexels-mnannapaneni-20436462.jpg",
    adpoted: false,
  },
  {
    name: "Mittens",
    age: 3,
    location: "Los Angeles",
    category: "Cat",
    date: "2024-06-02",
    image: "https://i.ibb.co/JQnq9yT/pexels-rdne-7516109.jpg",
    adpoted: false,
  },
];

const PetListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const axiosPublic = useAxiosPublic();

  const { data: pets = [], isLoading: loading } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const result = await axiosPublic.get("/pets");
      return result.data;
    },
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredPets = pets
    .filter(
      (pet) =>
        pet.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory ? pet.category === selectedCategory : true)
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (loading) {
    <span>loading ...</span>;
  }

  return (
    <div className='mt-20 bg-gray-50 p-10 min-h-screen'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-8 flex flex-col md:flex-row items-center justify-center'>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className='p-2 border border-gray-300 rounded'
          >
            <option value=''>All Categories</option>
            <option value='Dog'>Dogs</option>
            <option value='Cat'>Cats</option>
            <option value='Rabbit'>Rabbits</option>
            <option value='Fish'>Fish</option>
          </select>
          <input
            type='text'
            placeholder='Search pets by name'
            value={searchTerm}
            onChange={handleSearch}
            className='mb-4 lg:w-[400px] md:mb-0 md:mr-4 p-2 border border-l-0 border-gray-300 rounded'
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {(filteredPets.length &&
            filteredPets.map((pet) => (
              <div key={pet._id} className='bg-white p-6 rounded-lg shadow-lg'>
                <img
                  src={pet.image}
                  alt={pet.name}
                  className='w-full h-48 object-cover rounded-t-lg'
                />
                <div className='pt-6 pb-4'>
                  <h3 className='text-2xl font-bold mb-2'>{pet.name}</h3>
                  <p className='text-gray-700 mb-1'>Age: {pet.age}</p>
                  <p className='text-gray-700 mb-1'>Location: {pet.location}</p>
                  <Link to={`/petDetails/${pet._id}`}>
                    <button className='mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200'>
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))) || (
            <p className='text-center text-red-500 font-medium'>
              No data found!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetListing;
