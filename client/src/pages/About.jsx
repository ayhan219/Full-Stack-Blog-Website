import React from 'react';
import { useUser } from '../UserContext/UserContext';


const About = () => {

    const {darkMode} = useUser();
  return (
    <div className={`w-full min-h-screen  flex flex-col items-center py-10 ${darkMode ? "bg-black text-white" : "bg-gray-100"}`}>
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600 mt-2">Learn more about our blog and the team behind it.</p>
        </div>
        
        {/* About the Blog */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">About Our Blog</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to our blog, a space where we share insights, tips, and stories on various topics ranging from technology and lifestyle to travel and personal development. Our mission is to provide valuable and engaging content that inspires, informs, and entertains our readers.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Our blog is not just about writing; it's about creating a community of like-minded individuals who are passionate about learning and growth. Whether you're here to stay updated with the latest trends, seek advice, or simply enjoy some good reads, we have something for everyone.
          </p>
        </section>

        {/* Who We Are */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are a dedicated team of writers, editors, and creatives who are passionate about delivering high-quality content. Our team comprises experts in various fields who bring their unique perspectives and experiences to the table.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Our team is committed to excellence and innovation. We constantly strive to improve and evolve, ensuring that our readers receive the best possible experience. We believe in the power of storytelling and the impact it can have on people's lives.
          </p>
        </section>

        {/* Join Us */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-600 mb-4">
            We invite you to join our community of readers and contributors. Whether you're interested in contributing your own content or simply staying updated with our latest posts, there's a place for you here.
          </p>
          <a href="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
