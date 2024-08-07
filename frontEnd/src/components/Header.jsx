import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={'/'}>
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Sahana</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        </Link>
     
        <form action="" className="bg-slate-100 flex items-center p-2 rounded-lg">
          <input
            type="text"
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            placeholder="Search ...."
          />
          <FaSearch className='text-slate-500'/>
        </form>
        <ul className='flex gap-10'>
        <Link to={'/'}> <li className='hidden sm:inline hover:underline'>Home</li></Link> 
        <Link to={'/about'}> <li className='hidden sm:inline hover:underline'>About</li></Link> 
         <Link to={'/sign-in'}><li className='hidden sm:inline hover:underline'>Sign In</li> </Link> 
        </ul>
      </div>
    </header>
  );
};

export default Header;
