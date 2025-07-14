import { useState } from "react";

export const Flashcard = ({card}) => {
    const[isFlipped, setFlipped] = useState(false);

    return (
        <div className="flashcard-container" onClick={() => {setFlipped(!isFlipped)}}>
            <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="flashcard-front">
                    <p>{card.front}</p>
                </div>
                <div className="flashcard-back">
                    <p>{card.back}</p>
                </div>
            </div>
        </div>
    );
}

