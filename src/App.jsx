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
      <main>
        <h1>FlashCards</h1>
        <Flashcard card={flashcards[index]}/>

        <Button onClick={nextCard} label="Next" />
        <Button onClick={prevCard} label="Previous" />
      </main>
    </>
  )
}

export default App
