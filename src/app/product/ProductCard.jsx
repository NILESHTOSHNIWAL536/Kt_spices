'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Heart } from 'lucide-react'; // or use react-icons

export default function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite);
  const [quantity, setQuantity] = useState(0);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = () => {
    if (quantity === 0) {
      setQuantity(1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative w-full aspect-square p-4 bg-white">
        {/* Favorite Icon */}
        <button
          onClick={toggleFavorite}
          className="absolute top-6 right-6 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Add to favorites"
        >
          <Heart
            className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
              isFavorite ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'
            }`}
          />
        </button>

        {/* Veg Badge */}
        {product.isVeg && (
          <div className="absolute top-6 left-6 z-10">
            <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-green-600 rounded flex items-center justify-center bg-white">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-600 rounded-full"></div>
            </div>
          </div>
        )}

        {/* Product Image */}
        <div className="relative w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            // fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 md:p-5 flex flex-col flex-grow">
        {/* Product Name */}
        <h3 className="text-sm md:text-base font-medium text-gray-800 mb-3 md:mb-4 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]">
          {product.name}
        </h3>

        {/* Price Section */}
        <div className="flex items-center gap-2 mb-3 md:mb-4 mt-auto">
          <span className="text-lg md:text-xl font-bold text-gray-900">
            ₹{product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-sm md:text-base text-gray-400 line-through">
                ₹{product.originalPrice.toFixed(2)}
              </span>
              {product.discount && (
                <span className="text-xs md:text-sm font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                  {product.discount}% OFF
                </span>
              )}
            </>
          )}
        </div>

        {/* Add to Cart Button / Quantity Selector */}
        {quantity === 0 ? (
          <button
            onClick={handleAddToCart}
            className="w-full py-2.5 md:py-3 px-4 bg-white border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors duration-200 flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <span>Add</span>
            <span className="text-lg">+</span>
          </button>
        ) : (
          <div className="w-full flex items-center justify-between bg-green-600 rounded-lg overflow-hidden">
            <button
              onClick={decrementQuantity}
              className="flex-1 py-2.5 md:py-3 text-white font-bold text-lg hover:bg-green-700 transition-colors"
            >
              −
            </button>
            <span className="flex-1 text-center py-2.5 md:py-3 text-white font-semibold text-sm md:text-base">
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              className="flex-1 py-2.5 md:py-3 text-white font-bold text-lg hover:bg-green-700 transition-colors"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
