'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function CartPage({ initialCartData }) {
  const router = useRouter();
  const [cartItems, setCartItems] = useState(initialCartData.cartItems);

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const calculateTotals = () => {
    const mrpTotal = cartItems.reduce((sum, item) => 
      sum + (item.originalPrice * item.quantity), 0
    );
    const total = cartItems.reduce((sum, item) => 
      sum + (item.price * item.quantity), 0
    );
    const discount = mrpTotal - total;
    
    return { mrpTotal, total, discount, deliveryFee: 0, totalSavings: discount };
  };

  const totals = calculateTotals();

  return (
    <div className="min-h-screen bg-gray-50 py-6 md:py-8 lg:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Left Section - Cart Items */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                Quick Basket <span className="text-gray-500">({cartItems.length})</span>
              </h1>
              <div className="text-lg md:text-xl font-bold text-gray-900">
                ₹{totals.total.toFixed(2)}
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4 md:mb-6">
              <div className="p-4 md:p-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium">
                  Delivery Between{' '}
                  <span className="text-green-600 font-semibold">
                    {initialCartData.deliveryInfo.startDate} to {initialCartData.deliveryInfo.endDate}
                  </span>
                </p>
              </div>
            </div>

            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-white rounded-lg border border-gray-100 p-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        // fill
                        className="object-contain"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm md:text-base font-medium text-gray-900 mb-1 line-clamp-2">
                        {item.name}
                      </h3>
                      
                      {/* Price */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-base md:text-lg font-bold text-gray-900">
                          ₹{item.price.toFixed(2)}
                        </span>
                        <span className="text-xs md:text-sm text-gray-400 line-through">
                          ₹{item.originalPrice.toFixed(2)}
                        </span>
                      </div>

                      {/* Savings Badge */}
                      <div className="inline-block bg-green-50 px-2 py-1 rounded text-xs md:text-sm text-green-700 font-medium mb-2">
                        You Save ₹{item.savings.toFixed(2)}
                      </div>

                      {/* Seller Info */}
                      <p className="text-xs md:text-sm text-gray-600 mb-1">
                        Sold by: <span className="font-medium">{item.seller}</span>
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        Size: <span className="font-medium">{item.size}</span>
                      </p>

                      {/* Quantity Controls - Mobile & Desktop */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4 text-gray-600" />
                          </button>
                          <span className="w-10 md:w-12 text-center font-semibold text-sm md:text-base">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors group"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty Cart Message */}
            {cartItems.length === 0 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12 text-center">
                <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
                <button
                  onClick={() => router.push('/products')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          {/* Right Section - Checkout Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              {/* Progress Steps */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 md:p-6 mb-4 md:mb-6">
                <div className="flex items-center justify-between mb-4">
                  {/* Step 1 - Active */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold mb-2">
                      1
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-gray-900">Your Cart</span>
                  </div>

                  {/* Connector */}
                  <div className="flex-1 h-0.5 bg-gray-300 mx-2 -mt-6"></div>

                  {/* Step 2 - Inactive */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold mb-2">
                      2
                    </div>
                    <span className="text-xs md:text-sm text-gray-500">Order Review</span>
                  </div>

                  {/* Connector */}
                  <div className="flex-1 h-0.5 bg-gray-300 mx-2 -mt-6"></div>

                  {/* Step 3 - Inactive */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold mb-2">
                      3
                    </div>
                    <span className="text-xs md:text-sm text-gray-500">Payment</span>
                  </div>
                </div>
              </div>

              {/* Payment Details Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                  Payment Details
                </h2>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-600">MRP Total</span>
                    <span className="font-semibold text-gray-900">₹{totals.mrpTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-600">Product Discount</span>
                    <span className="font-semibold text-green-600">- ₹{totals.discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-green-600 font-medium">Delivery Fee (Quick)</span>
                    <span className="font-bold text-green-600">FREE</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Total */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-base md:text-lg font-bold text-gray-900">Total</span>
                  <span className="text-xl md:text-2xl font-bold text-gray-900">
                    ₹{totals.total.toFixed(2)}
                  </span>
                </div>

                {/* Savings */}
                <p className="text-sm md:text-base text-green-600 font-semibold mb-6">
                  You Saved ₹{totals.totalSavings.toFixed(2)}
                </p>

                {/* Coupon Section */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm md:text-base">Apply Coupon</p>
                        <p className="text-xs md:text-sm text-gray-500">Sign in to see best offers & promotions</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Sign In Button */}
                <button className="w-full py-3 md:py-4 px-4 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors mb-3 text-sm md:text-base">
                  Sign in
                </button>

                {/* Sign In & Order Button */}
                <button 
                  onClick={() => router.push('/order')}
                  className="w-full py-3 md:py-4 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
                  disabled={cartItems.length === 0}
                >
                  Sign in & Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
