'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Edit, CheckCircle2 } from 'lucide-react';

export default function OrderReviewPage({ orderData, deliveryAddress }) {
  const router = useRouter();
  const [whatsappOptIn, setWhatsappOptIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-6 md:py-8 lg:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
          Order Review
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Left Section - Order Details */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            
            {/* Delivery Address */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-lg md:text-xl font-bold text-gray-900">Delivery Address</h2>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Edit className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">{deliveryAddress.name}</span>
                  <span className="px-2 py-0.5 bg-teal-600 text-white text-xs font-medium rounded">
                    {deliveryAddress.type}
                  </span>
                </div>
                
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {deliveryAddress.address}
                </p>
                
                <p className="text-sm md:text-base text-gray-700">
                  {deliveryAddress.city}, {deliveryAddress.state}
                </p>
                
                <p className="text-sm md:text-base text-gray-700">
                  Phone: <span className="font-medium">{deliveryAddress.phone}</span>
                </p>
              </div>
            </div>

            {/* Products Unavailable Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                Products Unavailable <span className="text-gray-500 font-normal">(2)</span>
              </h2>

              <div className="space-y-4">
                {orderData.unavailableItems.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                    {/* Product Image */}
                    <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-gray-100 rounded-lg border border-gray-200 p-2">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain opacity-50"
                      />
                      {/* Unavailable Overlay Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm md:text-base font-medium text-gray-900 mb-1 line-clamp-2">
                        {item.name}
                      </h3>
                      
                      <p className="text-xs md:text-sm text-gray-600 mb-2">
                        Sold by: <span className="font-medium">{item.seller}</span>
                      </p>
                      
                      <p className="text-sm md:text-base text-red-600 font-medium">
                        Currently unavailable, please try again later
                      </p>
                    </div>
                  </div>
                ))}

                {/* Save for Later Button */}
                <button className="text-sm md:text-base text-blue-600 font-semibold hover:underline">
                  Save for Later
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Progress & Payment */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-4 md:space-y-6">
              
              {/* Progress Steps */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 md:p-6">
                <div className="flex items-center justify-between">
                  {/* Step 1 - Completed */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center mb-2">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-700">My Cart</span>
                  </div>

                  {/* Connector - Active */}
                  <div className="flex-1 h-0.5 bg-green-600 mx-2 -mt-6"></div>

                  {/* Step 2 - Active */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold mb-2">
                      2
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-gray-900">Order Review</span>
                  </div>

                  {/* Connector - Inactive */}
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

              {/* WhatsApp Opt-in */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 flex-shrink-0">
                    <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        checked={whatsappOptIn}
                        onChange={(e) => setWhatsappOptIn(e.target.checked)}
                        className="mt-1 mr-3 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <div>
                        <p className="text-sm md:text-base font-medium text-gray-900 mb-1">
                          Enable order updates & important information on Whatsapp
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                  Payment Details
                </h2>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-600">MRP Total</span>
                    <span className="font-semibold text-gray-900">₹{orderData.pricing.mrpTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-600">Product Discount</span>
                    <span className="font-semibold text-green-600">- ₹{orderData.pricing.discount.toFixed(2)}</span>
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
                    ₹{orderData.pricing.total.toFixed(2)}
                  </span>
                </div>

                {/* Savings */}
                <p className="text-sm md:text-base text-green-600 font-semibold mb-6">
                  You Saved ₹{orderData.pricing.totalSavings.toFixed(2)}
                </p>

                {/* Make Payment Button */}
                <button 
                  onClick={() => router.push('/payment')}
                  className="w-full py-3 md:py-4 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
                >
                  Make Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
