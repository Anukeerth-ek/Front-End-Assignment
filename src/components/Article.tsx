import { articleItems } from "../utils/Data";

const Article = () => {
     return (
          <div className="p-[10px] md:py-[100px] md:px-[30px] ">
               <div>
                    <h2 className="text-[25px] md:text-[40px] text-[#EEE5FF] text-center">
                         An All-Round Plugin With<br></br> Powerful Features
                    </h2>
                    <p className="text-[#EEE5FFBD] text-[16px] md:text-[18px] text-center">
                         Whether you're a seasoned web designer or just starting out, Motion Art for <br></br>Elementor
                         seamlessly integrates with the Elementor platform, providing you<br></br> with a seamless and
                         intuitive experience.
                    </p>
               </div>
               <div className="md:flex pt-[30px] md:pt-[50px]">
                    {articleItems.map((item, index) => {
                         return (
                              <div
                                   key={index}
                                   className={`md:m-[10px] px-[30px] pt-[30px] pb-[40px] border-2 border-[#FFFFFF10] section-page w-[100%] md:w-[400px] rounded-[20px] ${
                                        item.isMargin ? "mt-[20px]" : ""
                                   }`}
                              >
                                   <div className="w-full mt-[-20px] mr-[0px] mb-[20px] ml-[40px] relative right-[75px]">
                                        <img src={item.image} />
                                   </div>
                                   <h2 className="text-[#EEE5FF] text-[23px] md:text-[25px] h-[45px] mb-[10px] ">
                                        {item.title}
                                   </h2>
                                   <p className=" text-[#EEE5FFBD] text-[16px] md:text-[18px] h-[60px] leading-[30px]">
                                        {item.content}
                                   </p>
                              </div>
                         );
                    })}
               </div>
          </div>
     );
};

export default Article;
