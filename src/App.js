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
            frontContent={<p>french</p>}
            backContent={<p>english word here</p>}
          />} />
          <Route path="spanish" element={<Flashcard
            frontContent={<p>spanish</p>}
            backContent={<p>english word here</p>}
          />} />
          <Route path="italian" element={<Flashcard
            frontContent={<p>ialian</p>}
            backContent={<p>english word here</p>}
          />} />
          <Route path="german" element={<Flashcard
            frontContent={<p>german</p>}
            backContent={<p>english word here</p>}
          />} />
          <Route path="japanese" element={<Flashcard
            frontContent={<p>japanese</p>}
            backContent={<p>english word here</p>}
          />} />
        </Route>
        <Route path="/" element={<LaunchScreenLayout />}>
          <Route index element={<LaunchScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
