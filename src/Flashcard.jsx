import { useState } from "react";

export const Flashcard = ({card}) => {
    const[isFlipped, setFlipped] = useState(false);

    return (
        <div onClick={()=> setFlipped(!isFlipped)} 
            dangerouslySetInnerHTML={{ __html: isFlipped ? card.back : card.front, }}>
        </div>
    );
}

