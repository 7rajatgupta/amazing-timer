import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainPage from "./pages/main";

function App() {
  return (
    <div className="grid place-content-center h-screen w-screen bg-black">
      <main className="flex flex-col px-4 py-4 border border-solid border-zinc-700 bg-zinc-900 rounded-lg xl:px-32">
        <MainPage />
      </main>
    </div>
  );
}

export default App;
