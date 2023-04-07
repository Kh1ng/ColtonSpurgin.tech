import { useState } from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Logo from "/src/logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-600 w-screen h-screen text-center align-start justify-center items-center grid grid-cols-1 m-auto">
      <div className="flex align-top h-fit w-fit mt-0 p-1 absolute top-0 left-0">
        <img
          src={Logo}
          className="justify-start align-start items-start"
          height={50}
          width={50}
        ></img>
      </div>
      <div className="w-fit inline-block mx-auto mt-32 sm:mt-0 sm:p-8">
        <div className="inline-block align-text-top text-left pb-2 text-sm">
          <span className="text-200">Hello, I am </span>
          <span className="text-4xl font-bold font-serif text-50">
            Colton Spurgin
          </span>
          <span className="text-200 font-sans">
            {" "}
            and I like to build things.
          </span>
        </div>
        <div className="max-w-md">
          <p className="text-left text-900 pt-2 pb-3 font-sans">
            I am currently in search of my next challenge. Among my many
            interests, I am currently most interested in full stack web
            development.
          </p>
        </div>
        <div className="flex pt-3">
          <a href="https://bork.coltonspurgin.tech/">
            {/* button sucks */}
            <button className="pt-3 btn bg-200 hover:bg-400 text-900 font-bold py-2 px-4 rounded">
              Checkout my newest project!
            </button>
          </a>
        </div>
      </div>
      <div className="absolute flex bottom-0 align-baseline p-1 w-screen">
        <div className="flex lg:flex-col sm:align-middle sm:justify-center">
          <div className="flex">
            <a href="https://github.com/Kh1ng">
              <FaGithub size={42} />
            </a>
          </div>
          <div className="flex">
            <a href="https://www.linkedin.com/in/coltonspurgin">
              <FaLinkedin size={42} />
            </a>
          </div>
          <div className="flex">
            <a href="mailto:colton.spurgin1@gmail.com">
              <FaEnvelope size={42} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
