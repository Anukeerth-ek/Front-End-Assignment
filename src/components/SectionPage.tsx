import section1 from "../assets/motionarteffect-img11.png";
import section2 from "../assets/motionarteffect-img10.png";

const SectionPage = () => {
     return (
          <div className="py-[100px]">
               <div>
                    <div className="flex justify-center w-full mb-[60px]">
                         <h2 className="text-center text-[35px] text-white">
                              Apply On Any Section Or Enable
                              <br /> For Whole Page
                         </h2>
                    </div>
                    <div className="flex px-9">
                         <div className="section-page  p-8 mb-[100px] border-2 border-[#FFFFFF10] rounded-[20px] mr-[10px]">
                              <h2 className=" text-2xl text-[#EEE5FF] h-[45px]">Apply On Section</h2>
                              <p className=" text-[18px] text-[#EEE5FFBD] min-h-[60px] leading-7">
                                   Apply on section is a game-changer, offering an unparalleled<br></br> way to manage
                                   applications directly from your website.
                              </p>
                              <img src={section1} className="h-[388px] mt-[20px] w-[541px]" />
                         </div>

                         <div className="section-page p-8 mt-[100px]  border-2 border-[#FFFFFF10] rounded-[20px] ml-[10px]">
                              <h2 className=" text-2xl text-[#EEE5FF] h-[45px]">Apply On Page</h2>
                              <p className=" text-[18px] text-[#EEE5FFBD] min-h-[60px] leading-7">
                                   Take your website to new heights with Motion Art for Elementor.<br></br> Embrace the
                                   power of motion and animation.
                              </p>
                              <img src={section2} className=" mt-[20px] h-[388px] w-[541px]" />
                         </div>
                    </div>
               </div>
          </div>
          //   background-image: linear-gradient(180deg, #0D061F 0%, #251E35 100%);
     );
};

export default SectionPage;
