import right from "../assets/right.svg"
import wrong from "../assets/wrong.svg"
import restart  from "../assets/restart.svg"
import React from "react";

export default function Flashcard({lang}){

    const flashcardData = require(`../data/${lang}.json`);

    const correct = []
    const incorrect = []

    const [flip, setFlip] = React.useState(false)

    const [flipDeck, setFlipDeck] = React.useState(true)

    function handleClick(){
        setFlip(!flip)
    }

    function handleFlipDeck(){
        setFlipDeck(!flipDeck)
    }

    const [cardIndex, setCardIndex] = React.useState(0);

    function handleCorrect() {
        correct.push(flashcardData[cardIndex])
        setCardIndex(cardIndex + 1);  
    }

    function handleWrong() {
        incorrect.push(flashcardData[cardIndex])
        setCardIndex(cardIndex + 1);  
    }


    return (
        <div className="main-content">
            <div className={`flip-card ${flip ? 'flipped' : ''}`} onClick={handleClick}>
                <div className="flip-card-inner">    
                    <div className={`card-${flipDeck ? "front" : "back"}`}>
                        {flashcardData[cardIndex][flipDeck ? 'word' : 'eng']}
                    </div>
                    <div className={`card-${flipDeck ? "back" : "front"}`}>
                        {flashcardData[cardIndex][flipDeck ? 'eng' : 'word']}
                    </div>
                </div>
            </div>
        
            
                <div className="buttons">
                        <div className="correct-button" onClick={handleCorrect}>
                            <img className="icon" src={right} alt="checkmark with green background"/>
                        </div>
                        <div className="restart-button" onClick={handleFlipDeck}>
                            <img className="icon" src={wrong} alt="an x with a red background"/>
                        </div>
                        <div className="wrong-button" onClick={handleWrong}>
                            <img className="icon" src={restart} alt="a rounded arrow pointing back"/>
                        </div>
                </div>
        </div>
    )
}