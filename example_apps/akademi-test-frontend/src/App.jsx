import "./App.css";

// React Router V6
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/routes/AppRouter";

// Layouts
import NavBar from "./app/components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-stone-900 min-h-screen flex flex-col flex-nowrap">
        <NavBar />
        <main className="min-h-screen p-4 flex justify-center">
          <AppRouter />
        </main>
        {/* <footer className="bg-stone-800 text-white text-center p-4">
          <address>copyright@Pablo F. Diaz</address>
        </footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
