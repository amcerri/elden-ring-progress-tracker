import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
