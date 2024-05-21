import browserImage from "../assets/motionarteffect-img8.png";

const Browers = () => {
     return (
          <div
               className="section-page w-fit border-2 md:w-[1280px] py-[50px] px-[30px] m-[20px]
           md:flex flex-col inline-block items-center md:justify-center border-[#FFFFFF10] rounded-[20px] text-center"
          >
               <h2 className="text-[#EEE5FF] text-[20px] md:text-[25px] mb-[15px]">Supported by All Popular Browsers</h2>
               <p className="text-[#EEE5FFBD] text-center text-[18px] mb-[15px]">
                    Rest assured, Motion Art is designed to be compatible<br></br>
                    with all major web browsers.
               </p>
               <div className="align-middle">
                    <img src={browserImage} alt="Browsers" className="w-[229px] h-[42px] md:h-auto md:w-auto" />
               </div>
          </div>
     );
};

export default Browers;
