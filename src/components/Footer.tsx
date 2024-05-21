const Footer = () => {
     return (
          <div className="w-[100%]">
               <div className="flex justify-between flex-col-reverse md:flex-row bg-gradient-to-r from-orange-500 to-purple-700  text-[14px]  md:pt-[10px] md:px-[120px]">
                    <p className="text-[#EEE5FFB8] p-[10px] ">© 2023 Copywrite. All rights reserved by QodeMatrix</p>
                    <div className="p-[10px] flex justify-evenly">
                         <span className="text-[#EEE5FFB8] ">Documentation</span>
                         <span className="text-[#EEE5FFB8] md:ml-[30px]">Support</span>
                    </div>
               </div>
          </div>
     );
};

export default Footer;
