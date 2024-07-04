import { useQuestionsData } from "../hooks/useQuestionsData"
import { useQuestionsStore } from "../store/questions"
import { useNavigate } from "react-router-dom";

export const Results = () => {
  const { correct, incorrect } = useQuestionsData()

  const navigate = useNavigate();

  const reset = () => { 
    useQuestionsStore(state => state.reset)
    // navigate("/home");
  }

  return (
    <section>
      <h3>¡Tus resultados</h3>

      <div>
        <p>✅ {correct} correctas</p>
        <p>❌ {incorrect} incorrectas</p>
      </div>

      <button className="button" onClick={reset}>
        ¡Empezar de nuevo!
      </button>
    </section>
  )
}