import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Home = () => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const getPerson = async () => {
      try {
        const res = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc");
        setPerson(res.data.results[0]);
      } catch (err) {
        console.log(err);
      }
    };

    getPerson();
  }, []);

  return (
    <div className=' relative  bg-orange-300 w-screen h-screen flex items-center justify-center'>
      {person ? (
         <motion.div
         className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg transform hover:shadow-xl hover:scale-105 p-5  flex border-solid border-2 border-indigo-800 "
         whileHover={{ scale: 1.3, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',border:'2px solid indigo' }}
         whileTap={{ scale: 0.95 }}
       >
         <div className="relative">
           <img
             className="w-full h-auto object-cover  rounded-lg"
             src={person.picture.large}
             alt="Random"
           />
           
         </div>
         <div className="px-4 py-2">
           <h1 className="text-xl font-semibold">name - <span className='text-xl font-bold'>{person.name.title} {person.name.first}  {person.name.last}</span>  </h1>
           <h2 className='font-semibold text-xl'>Gender - <span className='text-xl font-bold'>{person.gender}</span></h2>
           <p className="mt-2 text-xl font-semibold">Phone-Number :- <span className='text-xl font-bold'>{person.phone}</span></p>
         </div>
       </motion.div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
