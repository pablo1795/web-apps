import { useQuestionsStore } from '../store/questions'
import { useQuestionsData } from '../hooks/useQuestionsData'
import { type Question as QuestionType } from '../types/questionTypes'
import { useNavigate } from "react-router-dom";
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const getBackgroundColor = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info
  // sin responder
  if (userSelectedAnswer == null) return 'transparent'
  // respuesta incorrecta no seleccionada
  if (index !== correctAnswer && index !== userSelectedAnswer) return 'transparent'
  // respuesta correcta
  if (index === correctAnswer) return 'green'
  // respuesta incorrecta
  if (index === userSelectedAnswer) return 'red'
  // ninguna de las anteriores
  return 'transparent'
}

const QuestionCard = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionsStore(state => state.selectAnswer)

  const createHandleClick = (answerIndex: number) => {
    selectAnswer(info.id, answerIndex)
  }

  return (
    <section>
      <p className='text-bold'>{info.question}</p>

      <SyntaxHighlighter language='javascript' style={vs2015}>
        {info.code}
      </SyntaxHighlighter>

      <ul className='list-questions'>
        {info.answers.map((answer, index) => (
          <li key={index}>
            <button
              disabled={info.userSelectedAnswer != null}
              onClick={() => createHandleClick(index)}
              style={{ backgroundColor: getBackgroundColor(info, index) }}
            >{answer}</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export const Game = () => {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)

  const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
  const goPreviousQuestion = useQuestionsStore(state => state.goPreviousQuestion)

  const questionInfo = questions[currentQuestion]

  const { correct, incorrect, unanswered } = useQuestionsData()

  const navigate = useNavigate();

  const reset = () => { 
    useQuestionsStore(state => state.reset)
    navigate("/home")
  }

  return (
    <section>
      <QuestionCard info={questionInfo} />

      <section className='flex space-between items-center gap-2'>
        <button className="button" onClick={goPreviousQuestion} disabled={currentQuestion === 0}>
          Pregunta anterior
        </button>

        <p className='text-bold'>{currentQuestion + 1}/{questions.length}</p>

        <button className="button" onClick={goNextQuestion} disabled={currentQuestion >= questions.length - 1}>
          Siguiente pregunta
        </button>
      </section>

      <section className='flex flex-column content-center items-center gap-1 p-1'>
        <p className='text-italic'>{`✅ ${correct} correctas`}</p>
        <p className='text-italic'>{`❌ ${incorrect} incorrectas`}</p>
        <p className='text-italic'>{`❓ ${unanswered} sin responder`}</p>

        <button className='button' onClick={reset}>
          Resetear juego
        </button>
      </section>
    </section>
  )
}
