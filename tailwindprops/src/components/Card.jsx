import React from "react";

const Card = ({ name, setName, btnText = "Contact me" }) => {
  const nameChange = () => {
    setName("Sufi");
  };
  return (
    <>
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-2xl p-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src="https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Profile"
            className="w-36 h-36 rounded-full object-left border-2 border-blue-700 shadow-md"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold text-blue-800">{name}</h2>
            <p className="text-indigo-600 mt-1 font-medium">
              Agronomy Graduate | Sustainable Tech Enthusiast
            </p>
            <p className="mt-4 text-gray-600">
              Passionate about blending AI and sustainability. Working on
              climate-resilient agri-solutions, tech-enabled tools, and digital
              products that create real-world value.
            </p>
            <div className="mt-4 flex justify-center sm:justify-start gap-4">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-800 transition"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-800 transition"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-800 transition"
              >
                Portfolio
              </a>
            </div>
            <button
              onClick={nameChange}
              className="active:bg-blue-300 bg-blue-500 p-4 rounded-full text-white text-xl font-bold shadow-2xl w-fit mt-4"
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
