// TVSinglePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { tvData } from '../data/tvData';

const TVSinglePage = () => {
  const { id } = useParams();
  const product = tvData.find((tv) => tv.id === id);

  if (!product) {
    return <div className="p-4">Product not found.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={`/${product.image}`} alt={product.model} className="w-full h-96 object-cover rounded-2xl mb-4" />
      <h1 className="text-3xl font-bold">{product.brand} - {product.model}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-xl text-green-700 font-semibold mt-4">${product.price}</p>
      <p className="mt-2 text-sm text-gray-500">Category: {product.category}</p>
    </div>
  );
};

export default TVSinglePage;
