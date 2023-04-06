import { useState } from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-600 w-screen h-screen text-center align-middle justify-center items-center grid grid-cols-1">
      <div className="w-fit inline-block mx-auto mt-32">
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
          <a href="https://">
            {/* button sucks */}
            <button className="pt-3 btn bg-200 hover:bg-400 text-900 font-bold py-2 px-4 rounded">
              Checkout my newest project!
            </button>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-4 max-h-4 w-full relative max-w-fit ml-2">
        <div className="relative inline-block justify-items-start content-end gird grid-cols-1 gap-x-64 mx-0 mt-10">
          {/* TODO: Icons need to be responsive */}
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
