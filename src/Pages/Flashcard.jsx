import right from "../assets/right.svg"
import wrong from "../assets/wrong.svg"
import undo from "../assets/undo.svg"
import React from "react";


export default function Flashcard({frontContent, backContent}){

    const [flip, setFlip] = React.useState(false)


    function handleClick(){
        setFlip(!flip)
    }

    return (
        <div className="main-content">

        <div className={`flip-card ${flip ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="flip-card-inner">
                <div className="card-front">
                    {frontContent}
                </div>
                <div className="card-back">
                    {backContent}
                </div>
            </div>
        </div>
            
            <div className="buttons">
                <div className="correct-button">
                    <img className="icon" src={right} alt="checkmark with green background"/>
                </div>
                <div className="undo-button">
                    <img className="icon" src={undo} alt="a rounded arrow pointing back"/>
                </div>
                <div className="wrong-button">
                    <img className="icon" src={wrong} alt="an x with a red background"/>
                </div>
            </div>
        </div>
    )
}