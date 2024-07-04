import './App.css'
import { BrowserRouter } from "react-router-dom";
import AppRouter from './routes/appRouter'

function App() {
  return (
    <BrowserRouter>
      <section className='containerApp'>
        <header>
          <h1>JavaScript Quiz</h1>
        </header>

        <main>
          <AppRouter />
        </main>
      </section>
    </BrowserRouter>
  )
}

export default App
