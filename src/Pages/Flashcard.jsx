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
        setFlip(false)
    }

    function handleWrong() {
        incorrect.push(flashcardData[cardIndex])
        setCardIndex(cardIndex + 1);
        setFlip(false)  
    }

    const correctText = 
        <p className="button-text">correct</p>

    const [correctButtonHover, setCorrectButtonHover] = React.useState(false)

    function handleCorrectMouseOver() {
        setCorrectButtonHover(true)
    }

    function handleCorrectMouseOut(){
        setCorrectButtonHover(false)
    }

    const restartText = 
        <p className="button-text">restart</p>

    const [restartButtonHover, setRestartButtonHover] = React.useState(false)

    function handleRestartMouseOver() {
        setRestartButtonHover(true)
    }

    function handleRestartMouseOut(){
        setRestartButtonHover(false)
    }

    const wrongText = 
        <p className="button-text">wrong</p>

    const [wrongButtonHover, setWrongButtonHover] = React.useState(false)

    function handleWrongMouseOver() {
        setWrongButtonHover(true)
    }

    function handleWrongMouseOut(){
        setWrongButtonHover(false)
    }

    function restartDeck (){
        setCardIndex(0)
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
                    <div className="button-element">
                        {correctButtonHover && correctText}
                        <div className="correct-button" onClick={handleCorrect} onMouseOver={handleCorrectMouseOver} onMouseOut={handleCorrectMouseOut}>
                            <img className="icon" src={right} alt="checkmark with green background"/>
                        </div>
                    </div>
                    <div className="button-element">
                        {restartButtonHover && restartText}  
                        <div className="restart-button" onClick={restartDeck} onMouseOver={handleRestartMouseOver} onMouseOut={handleRestartMouseOut}>
                            <img className="icon" src={wrong} alt="an x with a red background"/>
                        </div>
                    </div>
                    <div className="button-element">
                        {wrongButtonHover && wrongText}  
                        <div className="wrong-button" onClick={handleWrong} onMouseOver={handleWrongMouseOver} onMouseOut={handleWrongMouseOut}>
                            <img className="icon" src={restart} alt="a rounded arrow pointing back"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}