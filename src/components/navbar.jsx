import { useContext, useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
   const [visible, setVisible] = useState(false);

   const {setShowSearch,showSearch} = useContext(ShopContext);


   return (
      <>
         <div className="flex items-center justify-between py-5 font-medium">
            <Link to={'/'}>
               <img src={assets.logo} alt="Logo" className='w-36' />
            </Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
               {['home', 'collection', 'about', 'contact'].map((item) => (
                  <NavLink
                     key={item}
                     to={item === 'home' ? '/' : `/${item.toLowerCase()}`}                     
                     className={({ isActive }) => 
                        isActive ? 'text-black' : 'flex flex-col items-center gap-1'
                     }
                  >
                     <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
                     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                  </NavLink>
               ))}
            </ul>

            <div className="flex items-center gap-6">
               <img onClick={()=>setShowSearch(!showSearch)} src={assets.search_icon} alt="Search" className='w-5 cursor-pointer' />
               <div className="group relative">
                  <img src={assets.profile_icon} alt="Profile" className='w-5 cursor-pointer' />
                  <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                     <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Order</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                     </div>
                  </div>
               </div>
               <Link to='/cart' className='relative'>
                  <img src={assets.cart_icon} alt="Cart" className='w-5 min-w-5' />
                  <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>10</p>
               </Link>
               <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="Menu" className='w-5 min-w-5 cursor-pointer sm:hidden' />
            </div>
         </div>

         {/* Sidebar For Small Screen */}
         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
               <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                  <img src={assets.dropdown_icon} alt="Back" className='h-4 rotate-180' />
                  <p>Back</p>
               </div>
               {['home', 'collection', 'about', 'contact'].map((item) => (
                  <NavLink
                     key={item}
                     onClick={() => setVisible(false)}
                     className='py-2 pl-6 border'
                     to={`/${item}`}
                  >
                     {item.charAt(0).toUpperCase() + item.slice(1)}
                  </NavLink>
               ))}
            </div>
         </div>
      </>
   );
}

export default Navbar;
