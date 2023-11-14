import righticon from "../assets/right-icon.svg"
import wrongicon from "../assets/wrong-icon.svg"
import restart  from "../assets/restart.svg"
import React from "react";
import { FlashcardContext } from '../App'

export default function Flashcard({lang}){

    const { flipDeck, setLanguage, right, wrong } = React.useContext(FlashcardContext)

    const [correct, setCorrect] = React.useState([]);
    const [incorrect, setIncorrect] = React.useState([]);
    
    setLanguage(lang)

    var flashcardData = 
    (!right && !wrong)
        ? require(`../data/${lang}.json`)
        : (right ? correct : (wrong ? incorrect : null));

    React.useEffect(()=>{
        setCardIndex(0)
    }, [flashcardData])
        
    // React.useEffect(() => {
    //     setLanguage(lang);
    // }, []);

    const [flip, setFlip] = React.useState(false)
   
    const [cardIndex, setCardIndex] = React.useState(0);

    const [disableFlip, setDisableFlip] = React.useState(false); // state to disable flip animation

    function handleClick(){
        setFlip(!flip)
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

    // const [currentFlipDeck, setCurrentFlipDeck] = React.useState(flipDeck);

    // React.useEffect(() => {
    //     setCurrentFlipDeck(flipDeck);
    // }, [flipDeck]);

    console.log(`This is the flipDeck state: ${flipDeck}`);
    console.log(`This is the flip state: ${flip}`)
        
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
                    {/* <div className={`card-${flip ? "front" : "back"}`}>
                        {flashcardData[cardIndex][flipDeck ? 'word' : 'eng']}
                    </div> */}
                    {flipDeck ? 
                    <div className={`card-${flip ? "back" : "front"}`}>
                        {flashcardData[cardIndex][flip ? 'eng' : 'word']}
                    </div> : 
                    <div className={`card-${flip ? "back" : "front"}`}>
                        {flashcardData[cardIndex][flip ? 'word' : 'eng']}
                    </div>
                    }
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