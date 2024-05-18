import { ratingData } from "../utils/Data";

const Rating = () => {
     return (
          <div className="py-3 px-4 ">
               <div>
                    <h2 className="text-center text-[#EEE5FF] text-[22px] ">
                         Trusted by thousands of users around the world
                    </h2>
               </div>
               <div className="flex justify-between">

               {ratingData.map((item, index) => (
                    <div className="flex items-center py-[50px] " key={index}>
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
     );
};

export default Rating;
