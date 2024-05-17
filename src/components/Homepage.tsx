import MotionEffectImg1 from "../assets/MotionArtEffect-logo.png";

const Homepage = () => {
     return (
          <>
               <div className="flex justify-between">
                    <img src={MotionEffectImg1} />
                    <button className="bg-white py-[13px] px-[37px] rounded-md text-[#Qdo51f] font-medium  w-[186px]">
                         Purchase Now
                    </button>
               </div>
               <div className="text-white">
               <span
  className="max-w-[121px] break-words inline-block p-2 text-white"
  style={{ background: 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)' }}
>
  <span className="text-lg break-all">Transform Your Website</span>
</span>

                    <p className="max-w-[121px] break-all">With Motion Art Effect</p>
               </div>
          </>
     );
};

export default Homepage;
