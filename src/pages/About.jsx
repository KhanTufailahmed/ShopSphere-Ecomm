import React from 'react'

const About = () => {
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Welcome to ShopSphere , your go-to destination for quality products at
          the best prices. Our mission is to provide a seamless online shopping
          experience with millions of products across various categories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver top-quality products while ensuring customer
              satisfaction and convenience.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Integrity, Innovation, and Customer Focus drive everything we do.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become a global leader in e-commerce with unparalleled service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
