import { footerItems } from "../utils/Data";

const Footer = () => {
     return (
          <div className="py-[100px]">
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
                    {footerItems.map((item, index) => {
                         return (
                              <div key={index}>
                                   <img src={item.image}/>
                                   <h2>{item.title}</h2>
                                   <p>{item.content}</p>
                              </div>
                         );
                    })}
               </div>
          </div>
     );
};

export default Footer;
