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
          <Route index element={<Flashcard
            frontContent={<p>first lang</p>}
            backContent={<p>second language</p>}
          />} />
        </Route>
        <Route path="/" element={<LaunchScreenLayout />}>
          <Route index element={<LaunchScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
