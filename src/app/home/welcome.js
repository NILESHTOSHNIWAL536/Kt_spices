import Image from 'next/image';

export default function Welcome() {
  return (
    <section className="bg-white">
      {/* Welcome Header */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center text-gray-800 tracking-wide">
            WELCOME TO Kt Spices Farms.
          </h1>
        </div>
      </div>

      {/* Red Banner */}
      {/* <div className="bg-red-600 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-white tracking-wider">
            AGRO FOOD PRODUCTS PROCESSING COMPANY IN INDIA
          </h2>
        </div>
      </div> */}

      {/* Products Section */}
      <div className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4">
            OUR PRODUCTS
          </h2>
          <p className="text-base md:text-lg text-center text-gray-600 max-w-4xl mx-auto">
            Checkout our extensive range of Agro food products right from Turmeric, Chilli to all type of
            Whole Spices, Blended Spices & more.
          </p>
        </div>
      </div>
    </section>
  );
}
