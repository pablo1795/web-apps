import { useQuestionsStore } from '../store/questions'
import { useNavigate } from "react-router-dom";

const LIMIT_QUESTIONS = 10

export const Start = () => {
  const fetchQuestions = useQuestionsStore(state => state.fetchQuestions)

  const navigate = useNavigate();
  
  const handleSubmit = (evemt) => {
    evemt.preventDefault()
    fetchQuestions(LIMIT_QUESTIONS)
    navigate("/quiz")
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <button className='button'>
          ¡Comenzar Quiz!
        </button>
      </form>
    </section>
  )
}
