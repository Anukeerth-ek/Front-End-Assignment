import { ratingData } from "../utils/Data";
import { BsArrowRight } from "react-icons/bs";
import magicStickIcon from "../assets/motionarteffect-img5.png";

const Rating = () => {
     return (
          <>
               <div className="py-3 px-6 ">
                    <div>
                         <h2 className="text-center text-[#EEE5FF] text-[22px] ">
                              Trusted by thousands of users around the world
                         </h2>
                    </div>
                    <div className="flex justify-between">
                         {ratingData.map((item, index) => (
                              <div className="flex items-center pt-[50px] " key={index}>
                                   <div>
                                        <img src={item?.firstImage} />
                                   </div>
                                   <div className="ml-[10px]">
                                        <img src={item?.starIcon} />
                                        <p className="text-[#EEE5FFBD] pt-[10px]">{item?.rating}</p>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>

               {/* End of ratin */}

               <div className="text-white flex justify-between w-full px-6 pt-[100px]">
                    <div className="max-w-[700px] leading-7">
                         <h2 className="text-[40px] leading-[60px] text-[#EEE5FF] font-medium mb-[10px]">
                              Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
                         </h2>
                         <p className="max-w-[730px] mt-[5px] text-[#EEE5FFBD] font-medium leading-7">
                              Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse
                              your website with visually stunning motion art elements.
                         </p>
                         <button className="flex items-center custom-gradient text-white  rounded-2xl py-[18px] px-[35px] text-[20px] mt-[20px] font-sora font-normal">
                              Purchase from Envato <BsArrowRight className="ml-2" />
                         </button>
                    </div>
                    <div className="w-[264px]">
                         <img src={magicStickIcon} />
                    </div>
               </div>
          </>
     );
};

export default Rating;
