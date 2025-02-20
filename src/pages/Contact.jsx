import React from 'react'

function Contact() {
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Need help? Reach out to us anytime via email or phone, or drop us a
          message below.
        </p>
        <div className="mt-8 max-w-lg mx-auto">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 p-2 rounded-md h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact
