import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainPage from "./pages/main";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-100 py-10 flex items-center justify-center">
        <MainPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
