import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {Suspense, lazy} from 'react';
import Navbar from "./Navbar.js"
import About from "./About.js"
import TwitterTool from './TwitterTool.js'
import ProjectOverview from './ProjectOverview.js';
import Military_Service from './Military_Service';


function App() {
    return (
        <>
        <Navbar></Navbar>
        <Suspense fallback={<About />}>
        <Routes>
        <Route exact path="/financial-scraping-overview" element={<ProjectOverview/>}>
        </Route>
        <Route exact path="/TwitterTool" element={<TwitterTool/>}>
        </Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/military-service" element={<Military_Service/>}>
          </Route>
          <Route exact path="/" element={<About/>}>
          </Route>
        </Routes>
        </Suspense>
        </>
    );
  }

export default App;

