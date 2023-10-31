import './App.css';
import Layout from './Components/Layout';
import Flashcard from "./Pages/Flashcard";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import LaunchScreen from './Pages/LaunchScreen';
import LaunchScreenLayout from './Components/LaunchScreenLayout';

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
