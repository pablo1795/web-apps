import { create } from 'zustand'
import { type QuestionsState } from '../types/questionTypes.d'
import confetti from 'canvas-confetti'
import { persist, devtools } from 'zustand/middleware'
import { getAllQuestions } from '../services/questions'

const initialState = {
  loading: false,
  questions: [],
  currentQuestion: 0,
}

export const useQuestionsStore = create<QuestionsState>()(devtools(persist((set, get) => {
  return {
    ...initialState,

    fetchQuestions: async (limit: number) => {
      const json = await getAllQuestions()
      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)
      set({ questions })
    },

    selectAnswer: (questionId: number, answerIndex: number) => {
      const { questions } = get()
      // usar el structuredClone para clonar el objeto
      const newQuestions = structuredClone(questions)
      // encontramos el índice de la pregunta
      const questionIndex = newQuestions.findIndex(q => q.id === questionId)
      // obtenemos la información de la pregunta
      const questionInfo = newQuestions[questionIndex]
      // averiguamos si el usuario ha seleccionado la respuesta correcta
      const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex

      if (isCorrectUserAnswer) confetti()

      // cambiar esta información en la copia de la pregunta
      newQuestions[questionIndex] = {
        ...questionInfo,
        isCorrectUserAnswer,
        userSelectedAnswer: answerIndex
      }
      // actualizamos el estado
      set({ questions: newQuestions })
    },

    goNextQuestion: () => {
      const { currentQuestion, questions } = get()
      const nextQuestion = currentQuestion + 1

      if (nextQuestion < questions.length) {
        set({ currentQuestion: nextQuestion })
      }
    },

    goPreviousQuestion: () => {
      const { currentQuestion } = get()
      const previousQuestion = currentQuestion - 1

      if (previousQuestion >= 0) {
        set({ currentQuestion: previousQuestion })
      }
    },

    reset: () => {
      set(initialState)
    }
  }
}, {
  name: 'questions'
})))
