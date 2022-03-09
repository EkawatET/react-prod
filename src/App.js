//import Login from "./components/Login";
import {Routes,Route} from "react-router-dom";
import CreateItem from "./components/CreateItem";
import NavBar from "./components/NavBar";
import SummaryItem from "./components/SummaryItem";

function App() {
  return (
    <div  >
      <Routes>
      <Route path="/" element={<SummaryItem />} />
      <Route path="CreateItem" element={<CreateItem />} />
    </Routes> 
    </div>
  );

}

export default App;
