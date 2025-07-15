import { useState } from "react";

export const Flashcard = ({card, isFlipped, onFlip}) => {

    return (
        <div className="flashcard-container" onClick={onFlip} >
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

