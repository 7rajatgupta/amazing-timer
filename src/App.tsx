import "./App.css";
import MainPage from "./MainPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container px-4 py-2">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4"></div>
            <div className="flex-1 min-w-0 text-center">
              <h1 className="text-lg font-bold tracking-tight">
                Random Number Generator
              </h1>
            </div>
            <div className="flex-1 min-w-0 text-right" />
          </nav>
        </div>
      </header>
      <main className="flex-1 bg-gray-100 py-10 flex items-center justify-center">
        <MainPage />
      </main>
    </div>
  );
}

export default App;
