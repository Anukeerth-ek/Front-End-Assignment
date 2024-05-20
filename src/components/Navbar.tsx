const Navbar = () => {
     return (
          <nav>
               <div className="flex justify-between items-center h-[54px] bg-[#262626] px-[20px] fixed z-50 w-full">
                    <div>
                         <img
                              src="https://public-assets.envato-static.com/assets/logos/envato_market-dde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19.svg"
                              className="bg-black-600 w-[152px] h-[18px] bg-[length:152px_18px]"
                         />
                    </div>
                    <button className="bg-[#82B440] text-white py-[5px] px-[20px] leading-6 rounded-md text-[14px] nav-btn ">Buy now</button>
               </div>
          </nav>
     );
};

export default Navbar;
