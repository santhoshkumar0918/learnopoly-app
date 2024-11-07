import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header/>
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://www.shutterstock.com/image-photo/digital-technology-web-course-training-260nw-2298406325.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold">Welcome to Learnopoly!</h1>
          <p className="mt-4 text-xl">
            Stay updated with tech news, build your network, and enhance your
            skills.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12 p-4 w-full" id="features">
        <h2 className="text-3xl font-semibold text-center">Our Features</h2>
        <p className="mt-4 text-center text-gray-700">
          Explore our platform’s top features designed to help you grow in your
          career.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Interactive Courses</h3>
            <p className="mt-2 text-gray-600">
              Engage with coding exercises and quizzes to learn at your own
              pace.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Tech News</h3>
            <p className="mt-2 text-gray-600">
              Stay informed with the latest updates in technology and software
              development.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Networking Opportunities</h3>
            <p className="mt-2 text-gray-600">
              Connect with professionals and peers to build a strong network.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-800 text-white py-16 mt-12 w-full">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Ready to Start Learning?</h2>
          <p className="mt-4 text-lg">
            Sign up today and take your skills to the next level!
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 font-bold rounded-lg">
            Join Now
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 w-full">
        <h2 className="text-3xl font-semibold text-center">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-gray-600 italic">
              "Learnopoly has transformed the way I learn! The interactive
              courses are top-notch."
            </p>
            <div className="mt-4 text-right">
              <span className="text-blue-800 font-bold">- Sarah K.</span>
            </div>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-gray-600 italic">
              "The tech news section keeps me up-to-date with the latest trends.
              Highly recommend!"
            </p>
            <div className="mt-4 text-right">
              <span className="text-blue-800 font-bold">- David P.</span>
            </div>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-gray-600 italic">
              "The networking opportunities I found here have been invaluable
              for my career growth."
            </p>
            <div className="mt-4 text-right">
              <span className="text-blue-800 font-bold">- Michelle W.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-xl">Learnopoly</h4>
            <p className="mt-4 text-gray-400">
              Your platform to stay updated with tech news, build your network,
              and enhance your skills.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xl">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">
                  Plans & Pricing
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#signup" className="hover:underline">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl">Support</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#help" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl">Follow Us</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#twitter" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#facebook" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#linkedin" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
