import navLogo from "../assets/nav_logo.png";
import "../styles/customcontent.css";
const Navbar = () => {
     return (
          <nav>
               <div className="w-auto">
                    <div className="flex justify-between items-center h-[54px] bg-[#262626] px-[20px] fixed z-50 w-[100vw] mb-[1px]">
                         <div>
                              <img
                                   src={navLogo}
                                   className="bg-black-600 w-[118px] md:w-[152px] h-[18px] bg-[length:119px_18px] object-contain"
                              />
                         </div>
                         <button className="bg-[#82B440] text-white py-[5px] px-[20px] leading-6 rounded-md text-[14px] nav-btn ">
                              Buy now
                         </button>
                    </div>
               </div>
          </nav>
     );
};

export default Navbar;
