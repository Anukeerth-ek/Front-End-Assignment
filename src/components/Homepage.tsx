import MotionEffectImg1 from "../assets/MotionArtEffect-logo.png";

const Homepage = () => {
     return (
          <>
               <div>
                    <div className="flex justify-between px-[37px] pt-[52px]">
                         <img src={MotionEffectImg1} />
                         <button className="bg-white py-[13px] px-[37px] rounded-md text-[#Qdo51f] font-medium  w-[186px] hover:bg-[#101119] hover:text-white hover:border duration-300">
                              Purchase Now
                         </button>
                    </div>
                    <div className="flex justify-around py-[100px] px-[44px] ">
                         <div className="text-white w-[325px]">
                              <span className=" inline-block text-[20px] max-w-[128px] font-sora">
                                   <span className=" text-gradient text-lg  ">Transform</span>
                                   <span className="text-lg text-gradient"> Your Website</span>
                              </span>
                              <p className="max-w-[130px] break-all mt-2 font-normal text-[#EEE5FF] text-[17px] font-sans">With Motion Art Effect</p>
                         </div>

                         <div className="text-white homepage-main-content relative ">
                              <h1 className="max-w-[608px] text-6xl font-sora font-semibold leading-[80px] text-[#EEE5FF] z-50 mb-[15px]">
                                   Attract Your Visitors Attention With Colorful{" "}
                                   <span className="max-w-[530px]">
                                        <span className="text-gradient pb-[10px] ">Motion Art Effect</span>
                                   </span>
                              </h1>

                              <div>
                                   <p className="text-[18px] text-[#EEE5FFBD] leading-8">
                                        Unleash the power of creativity with Motion Art for Elementor - your <br></br>
                                        ultimate solution for seamlessly integrating captivating animations into <br></br>your
                                        website.
                                   </p>
                              </div>
                         </div>
                         <div className="min-w-[330px]"></div>
                    </div>
               </div>
          </>
     );
};

export default Homepage;
