import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Rating from "./components/Rating";
import SectionPage from "./components/SectionPage";
import Browers from "./components/Browers";
import Article from "./components/Article";
import Footer from "./components/Footer";


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
                    <Browers/>
                    <Article/>
               </div>
                 <div>
                 <Footer/>
                 </div>
          </div>
     );
}

export default App;
