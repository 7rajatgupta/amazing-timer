import "./App.css";
import MainPage from "./MainPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container px-4 py-2">
          <nav className="flex">
            <h1 className="text-lg font-bold tracking-tight">
              Random Number Generator
            </h1>
          </nav>
        </div>
      </header>
      <main className="flex-1 bg-gray-100 py-10 flex items-center justify-center">
        <MainPage />
      </main>
      <div className="py-4">
        <div className="container flex items-center justify-center space-x-2 text-center">
          <p className="text-md text-gray-700 dark:text-gray-400">
            crafted with ❤️ by{" "}
            <a
              className="text-black font-bold"
              href="https://www.rajat-gupta.com"
              target="_blank"
              rel="noreferrer"
            >
              Rajat Gupta
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
