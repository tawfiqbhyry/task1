import "./App.css";
import Header from "./components/Header";
import TripManagement from "./components/TripManagement"

function App() {
    return <div className="bg-gray-100 min-h-screen">
      <Header />
      <TripManagement />
    </div>;
}

export default App;
