import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { user, logOut } = useAuth();

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const handleLogOut = async () => {
    await logOut();
  };

  const navLinks = (
    <>
      <li className='text-base lg:text-xl'>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className='text-base lg:text-xl'>
        <NavLink to='/petListing'>Pet Listing</NavLink>
      </li>
      <li className='text-base lg:text-xl'>
        <NavLink to='/donation'>Donation</NavLink>
      </li>
    </>
  );

  return (
    <nav
      className={`bg-black fixed w-full top-0 z-10 ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-opacity-30 text-white transition-transform duration-300`}
    >
      <div className='w-[90%] mx-auto navbar flex justify-between'>
        <div className='navbar-start max-w-60'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content *:text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navLinks}
            </ul>
          </div>
          <img className='size-16' src='/assets/logo.png' alt='logo' />
        </div>

        <div className='navbar-end flex items-center max-w-[70%]'>
          <div className='hidden lg:flex lg:mr-3'>
            <ul className='menu menu-horizontal px-1 *:text-white'>
              {navLinks}
            </ul>
          </div>
          <div className='flex items-center gap-5'>
            <div>
              {user ? (
                user && (
                  <div className='flex items-center gap-4'>
                    <div className='dropdown dropdown-end'>
                      <div tabIndex={0} role='button' className='m-1'>
                        <img
                          className='w-12 h-12 mr-3 rounded-full'
                          src={user?.photoURL}
                          alt=''
                        />
                      </div>
                      <ul
                        tabIndex={0}
                        className='flex px-2 py-3 bg-white flex-col gap-2 dropdown-content z-[1] menu shadow rounded w-max'
                      >
                        <Link
                          to='/dashboard'
                          className='w-full text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center me-2'
                        >
                          <li>Dashboard</li>
                        </Link>
                        <button
                          onClick={handleLogOut}
                          type='button'
                          className='w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center me-2'
                        >
                          Logout
                        </button>
                      </ul>
                    </div>
                  </div>
                )
              ) : (
                <Link to='/login'>
                  <button className='w-full text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center me-2'>
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
