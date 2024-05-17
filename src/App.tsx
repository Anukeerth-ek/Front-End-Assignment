import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

function App() {
     return <div>
      <Navbar/>
    <div className="bg-black h-[100vh] px-[140px] py-8 ">
    <Homepage/>
    </div>
     </div>;
}

export default App;
