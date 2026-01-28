import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="py-28 bg-white w-full flex items-center justify-center">
      <div className='max-w-[1140px]'>
        <h1 className="text-center ">Contact Us</h1>
      <p className="mb-6 text-gray-600 text-center">We'd love to hear from you! Please fill out the form below or reach out to us through the following contact information.</p>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Location</h2>
        <iframe
          title="Our Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.517939973594!2d85.3240153150613!3d27.7172459827917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a8b1b1b1b%3A0x2b1b1b1b1b1b1b!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1613972627898!5m2!1sen!2snp"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="border-0 rounded-lg shadow-md"
        ></iframe>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Contact Information</h2>
        <p className="text-gray-600"><strong>Address:</strong> 123 Ice Cream St, Dessert City, Sweetland</p>
        <p className="text-gray-600"><strong>Phone:</strong> (123) 456-7890</p>
        <p className="text-gray-600"><strong>Email:</strong> contact@icecream.com</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Follow Us</h2>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="text-blue-600 hover:underline">Facebook</a>
          <a href="https://twitter.com" className="text-blue-400 hover:underline">Twitter</a>
          <a href="https://instagram.com" className="text-pink-600 hover:underline">Instagram</a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Submit
        </button>
      </form>
      </div>
      
    </div>
  );
};

export default Contact;