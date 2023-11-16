import './App.css';
import Layout from './Components/Layout';
import Flashcard from "./Pages/Flashcard";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import LaunchScreen from './Pages/LaunchScreen';
import LaunchScreenLayout from './Components/LaunchScreenLayout';

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  const [language, setLanguage] = React.useState('')

  const [right, setRight]= React.useState(false)

  const [wrong, setWrong]= React.useState(false)

  const [flipDeck, setFlipDeck] = React.useState(true)

  const [cardDeckComplete, setCardDeckComplete] = React.useState(false)

  return (
    <BrowserRouter>
      <FlashcardContext.Provider value={{flipDeck, setFlipDeck, language, setLanguage, right, setRight, wrong, setWrong, cardDeckComplete, setCardDeckComplete}}>
        <Routes>
          <Route path="flashcard" element={<Layout />}>
            <Route path="french" element={<Flashcard
              lang="french"
            />} />
            <Route path="spanish" element={<Flashcard
              lang="spanish" 
            />} />
            <Route path="italian" element={<Flashcard
              lang="italian"
            />} />
            <Route path="german" element={<Flashcard
              lang="german"
            />} />
            <Route path="japanese" element={<Flashcard
              lang="japanese"
            />} />
          </Route>
          <Route path="/" element={<LaunchScreenLayout />}>
            <Route index  element={<LaunchScreen />} />
          </Route>
        </Routes>
      </FlashcardContext.Provider>
    </BrowserRouter>
  );
}

export const FlashcardContext = React.createContext();
