import './App.css';
import Layout from './Components/Layout';
import Flashcard from "./Pages/Flashcard"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"

export default function App() {

  const [ deckFace, setDeckFace ] = React.useState(true) 

  function flipDeck() {
      setDeckFace(!deckFace)
  }

  console.log(deckFace)
  return (
    <>
      <Layout deckFace={deckFace} flipDeck={flipDeck}/>
      <Flashcard
          frontContent={<p>first lang</p>}
          backContent={<p>second langugage</p>}
      />
    </>
  )
}
