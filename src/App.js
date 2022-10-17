import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
      </div>
    </HashRouter>
  );
}

export default App;
