import browserImage from "../assets/motionarteffect-img8.png";

const Browers = () => {
     return (
          <div className="section-page border-2 w-[1280px] py-[50px] px-[30px] m-[20px] flex flex-col items-center justify-center border-[#FFFFFF10] rounded-[20px]">
               <h2 className="text-[#EEE5FF] text-[25px] mb-[15px]">Supported by All Popular Browsers</h2>
               <p className="text-[#EEE5FFBD] text-center text-[18px] mb-[15px]">
                    Rest assured, Motion Art is designed to be compatible<br></br>
                    with all major web browsers.
               </p>
               <div>
                    <img src={browserImage} alt="Browsers" />
               </div>
          </div>
     );
};

export default Browers;
