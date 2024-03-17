import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Logo from "../../public/logo.png";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="bg-600 w-screen h-screen text-center justify-center items-center grid grid-cols-1 m-auto">
      <div className="flex align-top h-fit w-fit mt-0 p-1 absolute top-0 left-0">
        <img
          src={Logo}
          className="justify-start align-start items-start"
          height={50}
          width={50}
          alt="logo"
        ></img>
      </div>
      <div className="w-fit flex mx-auto p-4 flex-col gap-1">
        <div className="inline-block align-text-top text-left pb-1 text-lg justify-center">
          <p className="text-200 sm:px-1">Hello, my name is </p>
          <p className="text-4xl font-bold font-serif text-50 sm:px-1">
            Colton Spurgin
          </p>
          <p className=" text-200 font-sans text-lg text-right">
            {" "}
            and I like to build things.
          </p>
        </div>
        <div className="max-w-md sm:px-1">
          <p className="text-left text-100 pb-3 font-sans pt-4">
            I am currently in search of my next challenge. Among my many
            interests, I am currently most interested in full stack web
            development.
          </p>
        </div>
        <div className="flex pt-3 sm:px-1 justify-center">
          <Link to="/Repos">
            {/* button sucks */}
            <button className="pt-3 btn bg-200 hover:bg-400 text-900 font-bold py-2 px-4 rounded">
              Take a look at my work!
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute flex bottom-0 align-baseline p-1 w-screen sm:pb-6">
        <div className="flex lg:flex-col sm:align-middle sm:justify-center row-span-full sm:grid sm:grid-rows-3 w-screen md:justify-start">
          <div className="flex mx-auto">
            <a href="https://github.com/Kh1ng">
              <FaGithub size={42} />
            </a>
          </div>
          <div className="flex mx-auto">
            <a href="https://www.linkedin.com/in/coltonspurgin">
              <FaLinkedin size={42} />
            </a>
          </div>
          <div className="flex mx-auto">
            <a href="mailto:colton.spurgin1@gmail.com">
              <FaEnvelope size={42} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
