'use client';
import { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

export default function ContactFormAlt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    isNotRobot: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our products? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Contact Form - Takes 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="flex gap-2">
                    <div className="w-24 px-3 py-3 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center font-semibold text-gray-700">
                      +91
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none"
                      placeholder="9333260000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="isNotRobot"
                      checked={formData.isNotRobot}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <span className="text-gray-700 text-sm">
                      I'm not a robot (reCAPTCHA verification)
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-gray-600 leading-relaxed">
                SF No.444, 1 to 5, Mukasi Pidariyur Village,<br />
                Pullapali Medu, R.S Road,<br />
                Chennimalai, Perundurai (TK),<br />
                Erode - 638 051,<br />
                Tamil Nadu, India.
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
              <a 
                href="mailto:info@nani.co.in"
                className="text-blue-600 hover:text-blue-700 font-semibold text-lg underline underline-offset-4 transition-colors"
              >
                info@nani.co.in
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <a 
                href="tel:+919333260000"
                className="text-green-600 hover:text-green-700 font-bold text-2xl transition-colors"
              >
                +91 93332 60000
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-white/90">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">9:00 AM - 2:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
