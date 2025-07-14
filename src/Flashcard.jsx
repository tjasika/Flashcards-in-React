import { useState } from "react";

export const Flashcard = ({card}) => {
    const[isFlipped, setFlipped] = useState(false);

    return (
        <div 
            className="w-1/2 h-1/2 bg-white rounded-xl flex justify-center items-center shadow-xl/20 text-xl"
            onClick={()=> setFlipped(!isFlipped)} >
                {isFlipped ? card.back : card.front}
        </div>
    );
}

