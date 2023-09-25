import React from 'react'

const Footer = () => {
  return (
    <div className="footer bg-black absolute  w-full text-white shadow-md flex justify-center py-3">
      <h2>
        &copy; {new Date().getFullYear()} created by ❣{" "}
        <a target='_blank'
          className=" italic font-mono tracking-wide text-blue-500 duration-500 hover:text-blue-800 hover:underline hover:decoration-solid	"
          href="https://www.linkedin.com/in/yousef-abdallah-760273242/"
        >
          Yousef Abdallah
        </a>
      </h2>
    </div>
  );
}

export default Footer