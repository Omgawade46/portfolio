import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/OG.png';
import resume from '../assets/resume.jpg';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handClick = () => setNav(!nav);

  const [showImage, setShowImage] = useState(false);

  // Function to toggle the image visibility
  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div className='fixed w-full h-[50px] flex justify-between items-center px-4 back text-gray-300 z-50'>
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: '80px' }} />
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li className=' hover:text-yellow-400 bg:blur-2xl'>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className=' hover:text-yellow-400'>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=' hover:text-yellow-400'>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=' hover:text-yellow-400'>
          <Link to="project" smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className=' hover:text-yellow-400'>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#020509] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl hover:text-yellow-400'>
          <Link onClick={handClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-yellow-400'>
          <Link onClick={handClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-yellow-400'>
          <Link onClick={handClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-yellow-400'>
          <Link onClick={handClick} to="project" smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-yellow-400'>
          <Link onClick={handClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
            <button className='flex justify-between items-center w-full text-gray-300' href="/">
              Linked <FaLinkedin size={30} />
            </button>
          </li>
          <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3333333]'>
            <button className='flex justify-between items-center w-full text-gray-300' href="/">
              Github <FaGithub size={30} />
            </button>
          </li>
          <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <Link to="contact" smooth={true} duration={500}>
              <button href="#" className='flex justify-between items-center w-full text-gray-300 '>
                Email <HiOutlineMail size={30} />
              </button>
            </Link>
          </li>
          <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <button onClick={toggleImage} className='flex justify-between items-center w-full text-gray-300' href="#">
              Resume <BsFillPersonLinesFill size={30} />
            </button>
          </li>
        </ul>
      </div>

      {/* Conditionally render the image and close button */}
      {showImage && (
        <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)' }}>

          <div style={{ position: 'relative', textAlign: 'center' }}>
          <button className="close-btn" onClick={toggleImage} >
            
            <img
              src={resume}
              alt="Example"
              style={{ width: '700px', height: '700px',  padding: '3px',  borderRadius: '10px' }}
            />
            </button>
            
           
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
