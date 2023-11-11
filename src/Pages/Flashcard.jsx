import righticon from "../assets/right-icon.svg"
import wrongicon from "../assets/wrong-icon.svg"
import restart  from "../assets/restart.svg"
import React from "react";
import { FlashcardContext } from '../App'

export default function Flashcard({lang}){

    const { flipDeck, setFlipDeck, setLanguage, right, wrong } = React.useContext(FlashcardContext)

    const [correct, setCorrect] = React.useState([]);
    const [incorrect, setIncorrect] = React.useState([]);
    
    setLanguage(lang)

    var flashcardData = 
    (!right && !wrong)
        ? require(`../data/${lang}.json`)
        : (right ? correct : (wrong ? incorrect : null));

    // React.useEffect(()=>{
    //     setCardIndex(0)
    // }, [flashcardData])

    // var flashcardData = require(`../data/${lang}.json`);

    // Assuming 'right' and 'wrong' are defined and truthy
    // if (right) {
    //     if (Array.isArray(correct)) {
    //         flashcardData = correct;
    //     } else {
    //         console.error("Error: 'correct' is not an array or is not defined.");
    //     }
    // } else if (wrong) {
    //     if (Array.isArray(wrong)) {
    //         flashcardData = wrong;
    //     } else {
    //         console.error("Error: 'wrong' is not an array or is not defined.");
    //     }
    // } else {
    //     console.error("Error: Neither 'right' nor 'wrong' is truthy.");
    // }
    
    // Now flashcardData is set based on the conditions

    console.log(correct);
    
    React.useEffect(() => {
        setLanguage(lang);
    }, []);

    const [flip, setFlip] = React.useState(false)
   
    const [cardIndex, setCardIndex] = React.useState(0);

    const [disableFlip, setDisableFlip] = React.useState(false); // state to disable flip animation

    function handleClick(){
        setFlip(!flip)
    }

    function handleFlipDeck(){
        setFlipDeck(!flipDeck)
    }

    const handleButtonClick = (isCorrect) => {
        if (isCorrect) {
          setCorrect((prevCorrect) => [...prevCorrect, flashcardData[cardIndex]]);
        } else {
          setIncorrect((prevIncorrect) => [...prevIncorrect, flashcardData[cardIndex]]);
        }
    
        setCardIndex(cardIndex + 1);
        setDisableFlip(true);
        setFlip(false);

        setTimeout(() => {
            setDisableFlip(false);
          }, 500);
    };

    function restartDeck (){
        setCardIndex(0)
        setFlip(!flip)
    }
        
    const Button = ({ text, image, onClick }) => (
        <div className={`${text} button-element`}>
          <p className={`${text} button-text`}>{text}</p>
          <div className={`${text}-button`} onClick={onClick}>
            <img className="icon" src={image} alt={text} />
          </div>
        </div>
      );
   
    return ( 
        <div className="main-content">
            {flashcardData && flashcardData[cardIndex] ? (
            <div className={`flip-card ${flip ? 'flipped' : ''} ${disableFlip ? 'disable-animation' : ''}`} onClick={handleClick}>
                <div className="flip-card-inner">    
                    <div className={`card-${flipDeck ? "front" : "back"}`}>
                        {flashcardData[cardIndex][flipDeck ? 'word' : 'eng']}
                    </div>
                    <div className={`card-${flipDeck ? "back" : "front"}`}>
                        {flashcardData[cardIndex][flipDeck ? 'eng' : 'word']}
                    </div>
                </div> 
            </div> ) : ( <p>Loading...</p>)}
            
                <div className="buttons">
                    <Button
                        text="correct"
                        image={righticon}
                        onClick={() => handleButtonClick(true)}
                    />

                    <Button
                        text="restart"
                        image={wrongicon}
                        onClick={restartDeck}
                    />

                    <Button
                        text="wrong"
                        image={restart}
                        onClick={() => handleButtonClick(false)}
                    />
                </div>
        </div>
    )
}