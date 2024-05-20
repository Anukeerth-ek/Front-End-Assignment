import { articleItems } from "../utils/Data";

const Article = () => {
     return (
          <div className="py-[100px] px-[30px] ">
               <div>
                    <h2 className="text-[40px] text-[#EEE5FF] text-center">
                         An All-Round Plugin With<br></br> Powerful Features
                    </h2>
                    <p className="text-[#EEE5FFBD] text-[18px] text-center">
                         Whether you're a seasoned web designer or just starting out, Motion Art for <br></br>Elementor
                         seamlessly integrates with the Elementor platform, providing you<br></br> with a seamless and
                         intuitive experience.
                    </p>
               </div>
               <div className="flex">
                    {articleItems.map((item, index) => {
                         return (
                              <div key={index} className="m-[10px] px-[30px] pt-[30px] pb-[40px] border-2 border-[#FFFFFF10] section-page w-[400px] rounded-[20px]">
                                  <div className="w-full mt-[-20px] mr-[0px] mb-[20px] ml-[40px] relative right-[75px]">

                                   <img src={item.image} />
                                   </div>
                                   <h2 className="text-[#EEE5FF] text-[25px] h-[45px] mb-[10px]">{item.title}</h2>
                                   <p className=" text-[#EEE5FFBD] text-[18px] h-[60px]">{item.content}</p>
                              </div>
                         );
                    })}
               </div>
          </div>
     );
};

export default Article;
