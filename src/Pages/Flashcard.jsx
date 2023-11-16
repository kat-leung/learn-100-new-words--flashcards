import righticon from "../assets/right-icon.svg"
import wrongicon from "../assets/wrong-icon.svg"
import restart  from "../assets/restart.svg";
import backicon from "../assets/back-icon.svg"
import forwardicon from "../assets/forward-icon.svg"
import React from "react";
import { FlashcardContext } from '../App'
import Confetti from 'react-confetti'

export default function Flashcard({lang}){

    const {  setCardDeckComplete, flipDeck, setLanguage, language,  right, wrong } = React.useContext(FlashcardContext)

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

    console.log(correct)


    
    const [flip, setFlip] = React.useState(false)
    
    const [cardIndex, setCardIndex] = React.useState(90);
    
    const [disableFlip, setDisableFlip] = React.useState(false); // state to disable flip animation
    
    function handleClick(){
      setFlip(!flip)
    }
    
    if (cardIndex === 99){
      setCardDeckComplete(true)
    }
    
    function removeDuplicates(arr) {
      return arr.filter((currentObject, index, array) =>
      index === array.findIndex((obj) =>
        obj.word === currentObject.word && obj.eng === currentObject.eng
      )
    );
    }
    
    const handleButtonClick = (isCorrect) => {
        if (isCorrect) {
          setCorrect((prevCorrect) => [...prevCorrect, flashcardData[cardIndex]]);
        } else {
          setIncorrect((prevIncorrect) => [...prevIncorrect, flashcardData[cardIndex]]);
        }

        if (isCorrect){
          setCorrect((prevCorrect) => removeDuplicates(prevCorrect));
        } else {
          setIncorrect((prevIncorrect) => removeDuplicates(prevIncorrect));
        }
    
        setCardIndex(cardIndex + 1);
        setDisableFlip(true);
        setFlip(false);

        setTimeout(() => {
            setDisableFlip(false);
          }, 500);
    };

  function handleForwardBackButtonClick(value) {
    if (value) {
      setCardIndex(cardIndex +1)
    } else if (!value) {
      setCardIndex(cardIndex -1)
    }
  }

  console.log(cardIndex)

    React.useEffect(()=>{
      setCorrect([])
    }, [language])

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
          {cardIndex < 100 ? (
            flashcardData && flashcardData[cardIndex] ? (
              <div className={`flip-card ${flip ? 'flipped' : ''} ${disableFlip ? 'disable-animation' : ''}`} onClick={handleClick}>
                <div className="flip-card-inner">
                  {flipDeck ? (
                    <div className={`card-${flip ? "back" : "front"}`}>
                      {flashcardData[cardIndex][flip ? 'eng' : 'word']}
                    </div>
                  ) : (
                    <div className={`card-${flip ? "back" : "front"}`}>
                      {flashcardData[cardIndex][flip ? 'word' : 'eng']}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )
          ) :  (correct.length !== 100 ? (
            <div>
              <h1>Yay! You've reviewed all 100 words.</h1>
                <div className="results">
                    <h2>How you did:</h2>
                    <div className="complete-text">
                        <div>
                            <p>{`Correct: ${correct.length}`}</p>
                            <div className="progress">
                                <div className="green" style={{width:`${correct.length}%`}}></div>
                            </div>
                        </div>
                        <div>
                            <p>{`Wrong: ${incorrect.length}`}</p>
                            <div className="progress">
                                <div className="red" style={{width:`${incorrect.length}%`}}></div>
                            </div>
                        </div>
                    </div>
                    <Button text="restart" image={wrongicon} onClick={restartDeck} />
                </div>
            </div>
          ) : (
            <div className="win">
              <div className="confetti">
                <Confetti/>
                <h1>Congrats! You've learned 100 new {lang} words.</h1>
                <h2>Now to learn another 100 words in new language. Select another language to learn using the dropdown.</h2>
              </div>
            </div>
          )
          )}
        
          {cardIndex < 100 && !right && 
          <div className="buttons">
            <Button text="correct" image={righticon} onClick={() => handleButtonClick(true)} />
            <Button text="restart" image={wrongicon} onClick={restartDeck} />
            <Button text="wrong" image={restart} onClick={() => handleButtonClick(false)} />
          </div> }

          {right && cardIndex >= 0  && 
            <div className="buttons">
            {cardIndex > 0 && <Button text="back" image={backicon} onClick={() => handleForwardBackButtonClick(false)}/>}
            {cardIndex < correct.length -1 && <Button text="forward" image={forwardicon} onClick={() => handleForwardBackButtonClick(true)}/>}
          </div> }

        </div>
      );
      }
      
      