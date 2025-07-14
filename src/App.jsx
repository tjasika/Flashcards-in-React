import { useState } from 'react'
import { Flashcard } from './Flashcard'
import { Button } from './Button'
import { flashcards } from './data'

const App = () => {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    if(index < flashcards.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0);
    }
  }

  const prevCard = () => {
    if(index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(flashcards.length - 1);
    }
  }

  return (
    <>
      <main className ="flex flex-col items-center justify-center w-full h-screen bg-gray-300">
        <h1 className="text-3xl mb-5">FlashCards</h1>
        <Flashcard card={flashcards[index]}/>

        <div className="w-1/2 flex flex-row justify-between gap-2 mt-5">
          <Button onClick={prevCard} icon="bi-arrow-left" />
          <Button onClick={nextCard} icon="bi-arrow-right" />
        </div>
        
      </main>
    </>
  )
}

export default App
