import { useQuestionsData } from '../hooks/useQuestionsData'
import { useQuestionsStore } from '../store/questions'
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData()

  const navigate = useNavigate();

  const reset = () => { 
    navigate("/home")
    useQuestionsStore(state => state.reset)
  }

  return (
    <section className='flex flex-column content-center items-center gap-1 p-1'>
      <p className='text-italic'>{`✅ ${correct} correctas`}</p>
      <p className='text-italic'>{`❌ ${incorrect} incorrectas`}</p>
      <p className='text-italic'>{`❓ ${unanswered} sin responder`}</p>

      <button className='button' onClick={reset}>
        Resetear juego
      </button>
    </section>
  )
}
