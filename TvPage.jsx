// TVPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { tvData } from '../data/tvData'; // adjust path as needed

const TVPage = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {tvData.map((tv) => (
        <div key={tv.id} className="border rounded-2xl shadow p-4">
          <img src={tv.image} alt={tv.model} className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-bold mt-2">{tv.brand} - {tv.model}</h2>
          <p className="text-gray-600">{tv.description.slice(0, 60)}...</p>
          <p className="text-green-600 font-semibold mt-1">${tv.price}</p>
          <Link to={`/tv/${tv.id}`} className="text-blue-500 hover:underline mt-2 block">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TVPage;
