import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Rating from "./components/Rating";
import SectionPage from "./components/SectionPage";

function App() {
     return (
          <div className="font-outfit">
               <Navbar />
               <div className="bg-[#101119]  px-[100px] py-8 ">
                    <Homepage />
                    <div>

                    <Rating/>
                    </div>
                    <SectionPage/>
               </div>
          </div>
     );
}

export default App;
