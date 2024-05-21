import MotionEffectImg1 from "../assets/MotionArtEffect-logo.png";

const Homepage = () => {
     return (
          <header>
               <div className="pt-[50px] md:pt-[0px] flex flex-col md:flex-row  justify-between mt-[0px]  md:mt-[35px] md:px-0 ">
                    <div className="pt-[20px] md:pt-[0px]">
                         <img src={MotionEffectImg1} className="md:mt-[0px] w-[159px] md:w-[220px] p-[10px] md:p-[0px]" />
                    </div>
                    <div className="md:pt-[10px]">
                         <button className="hidden md:block bg-white py-[13px] px-[37px] rounded-md text-[#Qdo51f] font-medium  w-[186px] hover:bg-[#101119] hover:text-white hover:border duration-300">
                              Purchase Now
                         </button>
                    </div>
               </div>

               <div className="flex flex-col flex-wrap text-wrap md:flex-row justify-around py-[80px] px-[0px]  md:px-[10px] ">
                    <div className="flex flex-col items-center justify-center text-white w-full md:w-[325px] p-[10px] md:py-[0px] mb-0 md:mb-6 md:flex-none md:items-start md:justify-start">
                         <span className="text-center md:text-left text-[20px] font-sora pb-[10px] md:pb-0">
                              <span className="text-gradient text-lg text-center">
                                   Transform
                                   <br />
                                   Your WebsiteF
                              </span>
                         </span>

                         <p className="w-full md:max-w-[130px] text-center md:text-left md:break-all mt-0 md:mt-2 font-normal text-[#EEE5FF] text-[17px] font-sans">
                              With Motion Art Effect
                         </p>
                    </div>

                    <div className="text-white homepage-main-content relative w-full  md:w-auto md:mb-6 mb-0 p-[10px] text-center md:text-left">
                         <h1 className="max-w-full md:max-w-[608px] text-4xl md:text-6xl font-sora font-semibold leading-[50px] md:leading-[85px] text-[#EEE5FF] z-50 mb-[15px] mr-[10px]">
                              Attract Your Visitors Attention With Colorful{" "}
                              <span className="block md:max-w-[530px]">
                                   <span className="text-gradient pb-[10px]">Motion Art Effect</span>
                              </span>
                         </h1>

                         <div>
                              <p className="text-[16px] md:text-[18px] text-[#EEE5FFBD] leading-6 md:leading-8">
                                   Unleash the power of creativity with Motion Art for Elementor - your{" "}
                                   <br className="hidden md:block" />
                                   ultimate solution for seamlessly integrating captivating animations into{" "}
                                   <br className="hidden md:block" />
                                   your website.
                              </p>
                         </div>
                    </div>
                    <div className="min-w-[330px] hidden md:block"></div>
               </div>
          </header>
     );
};

export default Homepage;
