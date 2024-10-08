import { useState } from 'react';
import './App.css'

function App() {
  const quizQuestions = [
    {
      "question": "What is the largest planet in our solar system?",
      "options": [
        { "text": "Earth", "isCorrect": false },
        { "text": "Mars", "isCorrect": false },
        { "text": "Jupiter", "isCorrect": true },
        { "text": "Venus", "isCorrect": false }
      ]
    },
    {
      "question": "What is the chemical symbol for water?",
      "options": [
        { "text": "O2", "isCorrect": false },
        { "text": "CO2", "isCorrect": false },
        { "text": "H2O", "isCorrect": true },
        { "text": "NaCl", "isCorrect": false }
      ]
    },
    {
      "question": "Which country hosted the 2016 Summer Olympics?",
      "options": [
        { "text": "China", "isCorrect": false },
        { "text": "Brazil", "isCorrect": true },
        { "text": "USA", "isCorrect": false },
        { "text": "Japan", "isCorrect": false }
      ]
    },
    {
      "question": "Which element has the atomic number 1?",
      "options": [
        { "text": "Oxygen", "isCorrect": false },
        { "text": "Helium", "isCorrect": false },
        { "text": "Hydrogen", "isCorrect": true },
        { "text": "Carbon", "isCorrect": false }
      ]
    },
    {
      "question": "What is the tallest mountain in the world?",
      "options": [
        { "text": "Mount Kilimanjaro", "isCorrect": false },
        { "text": "Mount Everest", "isCorrect": true },
        { "text": "K2", "isCorrect": false },
        { "text": "Mount Elbrus", "isCorrect": false }
      ]
    },
    {
      "question": "Who painted the Mona Lisa?",
      "options": [
        { "text": "Vincent van Gogh", "isCorrect": false },
        { "text": "Leonardo da Vinci", "isCorrect": true },
        { "text": "Pablo Picasso", "isCorrect": false },
        { "text": "Claude Monet", "isCorrect": false }
      ]
    },
    {
      "question": "Which organ in the human body is responsible for pumping blood?",
      "options": [
        { "text": "Lungs", "isCorrect": false },
        { "text": "Brain", "isCorrect": false },
        { "text": "Heart", "isCorrect": true },
        { "text": "Kidney", "isCorrect": false }
      ]
    },
    {
      "question": "What is the currency of Japan?",
      "options": [
        { "text": "Yuan", "isCorrect": false },
        { "text": "Dollar", "isCorrect": false },
        { "text": "Yen", "isCorrect": true },
        { "text": "Won", "isCorrect": false }
      ]
    },
    {
      "question": "Who wrote 'Romeo and Juliet'?",
      "options": [
        { "text": "Charles Dickens", "isCorrect": false },
        { "text": "William Shakespeare", "isCorrect": true },
        { "text": "Mark Twain", "isCorrect": false },
        { "text": "Jane Austen", "isCorrect": false }
      ]
    },
    {
      "question": "What is the hardest natural substance on Earth?",
      "options": [
        { "text": "Gold", "isCorrect": false },
        { "text": "Iron", "isCorrect": false },
        { "text": "Diamond", "isCorrect": true },
        { "text": "Silver", "isCorrect": false }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [click, setClick] = useState(1);
  const [ansClick, setAnsClick] = useState(1);
  const [count,setCount] = useState(1)
  // Start the quiz
  const startQuiz = () => {
    setClick(2);
    setScore(0);
    setCurrentQuestion(0);
  };

  const handleAnswerClick = (isCorrect) => {
    setCount(count+1)
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnsClick(ansClick + 1);

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const setCurrentView = () => {
    setScore(0);
    setClick(1);
    setAnsClick(1);
    setCount(1)
  };

  return (
    <>
      {
        click === 1 ? (
          <div className="container align-items-center text-center pt-5">
            <div className='pb-3'><h1 className='fw-bolder'>Welcome to the Quiz App</h1></div>
            <div><button onClick={startQuiz} className='btn btn-success p-3 fs-4'>Start Quiz</button></div>
          </div>
        ) : (
          <div></div>
        )
      }

      {
        click === 2 && ansClick <= 10 ? (
          <div className="container text-center pt-5">
            <div><h3 className='fw-bolder'>{quizQuestions[currentQuestion].question}</h3></div>
            <div className='pt-2 text-danger'><h4>{count}/10</h4></div>
            <div className="d-flex flex-column align-items-center pt-3">
              {
                quizQuestions[currentQuestion].options.map((option, index) => (
                  <div key={index} onClick={() => handleAnswerClick(option.isCorrect)}
                    style={{ width: '200px' }} className="btn btn-success my-2">{option.text}
                  </div>
                ))
              }
            </div>
          </div>
        ) : (
          <div></div>
        )
      }

      {
        ansClick === 11 ? (
          <div className="container align-items-center text-center pt-5">
            <div className='pb-3'>
              <h2 className='fw-bolder'>Your Score: {score}/{quizQuestions.length}</h2>
            </div>
            <div><button onClick={setCurrentView} className='btn btn-primary p-3 fs-4'>Retake Quiz</button></div>
          </div>
        ) : (
          <div></div>
        )
      }
    </>
  );
}

export default App;
